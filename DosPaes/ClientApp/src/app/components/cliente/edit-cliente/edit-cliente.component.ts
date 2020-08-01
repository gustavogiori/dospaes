import { Component, OnInit } from "@angular/core";
import { EditBase } from "../../commun/EditBase";
import { Cliente } from "src/app/models/cliente";
import { ClienteService } from "src/app/service/cliente.service";
import { ActivatedRoute, Params } from "@angular/router";
let id;
@Component({
  selector: "app-edit-cliente",
  templateUrl: "./edit-cliente.component.html",
  styleUrls: ["./edit-cliente.component.css"],
})
export class EditClienteComponent extends EditBase {
  public cliente: Cliente;
  constructor(
    protected clienteService: ClienteService,
    protected route: ActivatedRoute
  ) {
    super(clienteService, route);
  }

  ngOnInit() {
    this.loading = true;
    this.newText = "Editar";
    this.redirectToListUrl = "dashboard/cliente";
    this.msgSucess = "Cliente editado com sucesso!";
    this.type = "Cliente";
    this.route.params.subscribe((params: Params) => {
      id = params["id"];
      this.clienteService.get(id).subscribe((data) => {
        this.cliente = data;
        console.log(data);
        this.loading = false;
      });
    });
  }
  saveCliente() {
    this.save(id, this.cliente);
  }
}
