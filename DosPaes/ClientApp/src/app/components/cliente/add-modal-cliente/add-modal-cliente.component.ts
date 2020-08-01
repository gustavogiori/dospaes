import { Component, OnInit } from "@angular/core";
import { AddClienteComponent } from "../add-cliente/add-cliente.component";
import { ClienteService } from "src/app/service/cliente.service";
import { Router } from "@angular/router";
import { baseDirectiveCreate } from "@angular/core/src/render3/instructions";

@Component({
  selector: "app-add-modal-cliente",
  templateUrl: "./add-modal-cliente.component.html",
  styleUrls: ["./add-modal-cliente.component.css"],
})
export class AddModalClienteComponent extends AddClienteComponent {
  showButtonBack: boolean;
  constructor(
    protected router: Router,
    protected clienteService: ClienteService
  ) {
    super(router, clienteService);
  }
  close() {
    this.submitted = false;
  }
  ngOnInit() {
    super.ngOnInit();
    this.showButtonBack = false;
  }
}
