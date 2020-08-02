import { Component, OnInit } from "@angular/core";
import { AddBase } from "../../commun/AddBase";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/service/usuario.service";
import { Usuario } from "src/app/models/usuario";

@Component({
  selector: "app-add-usuario",
  templateUrl: "./add-usuario.component.html",
  styleUrls: ["./add-usuario.component.css"],
  providers: [UsuarioService],
})
export class AddUsuarioComponent extends AddBase {
  redirectToList() {
    this.router.navigateByUrl("dashboard/usuario");
  }
  usuario: Usuario;

  constructor(
    protected router: Router,
    protected usuarioService: UsuarioService
  ) {
    super(router, usuarioService);
    this.msgSucess = "Usuário cadastrado com sucesso!";
    this.newText = "Novo";
    this.type = "Usuário";
    this.redirectToListUrl = "dashboard/usuario";
  }
  public usuarios: any[];
  ngOnInit() {
    this.usuario= new Usuario();
  }
  saveUsuario() {
    this.save(this.usuario);
    this.clear();
  }
  clear() {
    this.usuario = {
      Email: "",
      Senha: "",
      Nome: "",
      MantemLogado: true,
      ChaveCadastro: "",
    };
  }
}
