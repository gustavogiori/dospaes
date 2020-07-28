import { Component, OnInit } from "@angular/core";
import { AddBase } from "../../commun/AddBase";
import { Cliente } from "../../../models/cliente";
import { Router } from "@angular/router";
import { ClienteService } from "../../../service/cliente.service";

@Component({
  selector: "app-add-cliente",
  templateUrl: "./add-cliente.component.html",
  styleUrls: ["./add-cliente.component.css"],
  providers: [ClienteService],
})
export class AddClienteComponent extends AddBase {
  cliente: Cliente;
  constructor(
    protected router: Router,
    protected clienteService: ClienteService
  ) {
    super(router, clienteService);
    this.msgSucess = "Cliente cadastrado com sucesso!";
    this.newText = "Novo";
    this.type = "Cliente";
    this.redirectToListUrl = "dashboard/cliente";
  }
  public saveCusto() {
    this.save(this.cliente);
    this.clear();
  }
  clear() {
    this.cliente.Endereco = "";
    this.cliente.Nome = "";
    this.cliente.Telefone1 = "";
    this.cliente.Telefone2 = "";
    this.cliente.Id = 0;
  }
  ngOnInit() {
    this.cliente = new Cliente();
  }
}
