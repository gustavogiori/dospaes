import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { first } from "rxjs/operators";
import { Usuario } from "src/app/models/usuario";
import { AppComponent } from "src/app/app.component";
import { UserMenuComponent } from "../user-menu/user-menu.component";
import { MenuUser } from "src/app/models/menuUser";
@Component({
  selector: "my-app",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.resetUser();
    MenuUser.logado = false;
    console.log(this.usuario);
  }
  resetUser() {
    this.usuario = {
      Email: "",
      isLoggedIn: false,
      Nome: "",
      Role: "",
      ChaveCadastro: "",
      Senha: "",
    };
  }
  usuario: Usuario;
  hasError = false;
  msgError = "";
  onSubmit() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    if (returnUrl == "/") returnUrl = "dashboard/home";
    this.authService
      .login(this.usuario)
      .pipe(first())
      .subscribe(
        () => {
          this.hasError = false;
          this.msgError = "";
          this.router.navigate([returnUrl]);
        },
        (error) => {
          this.hasError = true;
          this.msgError = "Login ou senha inváilidos!";
        }
      );
  }

  redirectToCreateUser() {
    this.router.navigateByUrl("/addUsuario");
  }
}
