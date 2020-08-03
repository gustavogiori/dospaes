import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Usuario } from "../models/usuario";
import { UserMenuComponent } from "../components/user-menu/user-menu.component";
import { MenuUser } from "../models/menuUser";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  userData = new BehaviorSubject<Usuario>(new Usuario());

  constructor(private http: HttpClient, private router: Router) {}

  login(userDetails) {
    console.log(userDetails);
    return this.http.post<any>("/api/login", userDetails).pipe(
      map(
        (response) => {
          localStorage.setItem("authToken", response.token);
          this.setUserDetails();
          MenuUser.usuario = this.userData.value;
          MenuUser.logado = true;
          return response;
        },
        (err) => {
          MenuUser.usuario = new Usuario();
          MenuUser.logado = false;
        }
      )
    );
  }

  setUserDetails() {
    if (localStorage.getItem("authToken")) {
      const userDetails = new Usuario();
      const decodeUserDetails = JSON.parse(
        window.atob(localStorage.getItem("authToken").split(".")[1])
      );

      userDetails.Email = decodeUserDetails.sub;
      userDetails.Nome = decodeUserDetails.nome;
      userDetails.isLoggedIn = true;
      userDetails.Role = decodeUserDetails.role;

      this.userData.next(userDetails);
      MenuUser.logado = false;
      MenuUser.usuario = this.userData.value;
    }
  }

  logout() {
    localStorage.removeItem("authToken");
    this.router.navigate(["/login"]);
    this.userData.next(new Usuario());
    MenuUser.logado = false;
  }
}
