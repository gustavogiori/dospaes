import { Component, OnInit } from '@angular/core';
import { DeleteBase } from '../../commun/DeleteBase';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.css']
})
export class DeleteClienteComponent extends DeleteBase {
  id = 0;
  descricao = "";
  cliente:Cliente;
  constructor(
    protected clienteService: ClienteService,
    public route: ActivatedRoute
  ) {
    super(clienteService, route);
    this.msgSucess="Cliente deletado com sucesso!";
    this.redirectToListUrl="dashboard/cliente";
    this.type="Cliente";
    
  }
  deleteCliente() {
    this.delete(this.id);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}