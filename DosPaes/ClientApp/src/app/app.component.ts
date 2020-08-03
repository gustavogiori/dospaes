import { Component } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from "@angular/router";
import { AuthService } from "./service/auth.service";
import { Usuario } from "./models/usuario";
import { UserMenuComponent } from "./components/user-menu/user-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public routeLoading: boolean = false;
  title = "app";
  logado: boolean = false;
  usuario: Usuario;

  constructor(private router: Router, private authService: AuthService) {
    if (localStorage.getItem("authToken")) {
      this.authService.setUserDetails();
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.routeLoading = false;
      }
    });
    console.log(this.usuario);
    this.router.navigateByUrl("dashboard/home");
  }
}
