import { Component, OnInit, Input } from "@angular/core";
import { Usuario } from "src/app/models/usuario";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { MenuUser } from "src/app/models/menuUser";
import { MergeScanSubscriber } from "rxjs/internal/operators/mergeScan";

@Component({
  selector: "app-user-menu",
  templateUrl: "./user-menu.component.html",
  styleUrls: ["./user-menu.component.css"],
})
export class UserMenuComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  editar() {
    this.router.navigateByUrl("dashboard/usuario/" + this.usuario.Email);
  }
  get usuario() {
    return MenuUser.usuario;
  }
  get logado() {
    return MenuUser.logado;
  }
  sair() {
    this.authService.logout();
  }
  ngOnInit() {
    if (this.usuario.Nome !== undefined) MenuUser.logado = true;
  }
}
