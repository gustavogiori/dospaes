import { Component, OnInit } from "@angular/core";
import { AddClienteComponent } from "../add-cliente/add-cliente.component";
import { Router } from "@angular/router";
import { ClienteService } from "../../../service/cliente.service";
import { Cliente } from "../../../models/cliente";

@Component({
  selector: "app-form-cliente",
  templateUrl: "./form-cliente.component.html",
  styleUrls: ["./form-cliente.component.css"],
})
export class FormClienteComponent implements OnInit {
  cliente: Cliente;
  constructor(
    protected router: Router,
    protected clienteService: ClienteService
  ) {}
  ngOnInit() {
    this.cliente = new Cliente();
  }
  saveCusto() {
    var save = new AddClienteComponent(this.router, this.clienteService);
    save.save(this.cliente);
  }
}
