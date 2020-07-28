import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../service/cliente.service';
import { ListBase } from '../../commun/ListBase';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent extends ListBase {

  constructor(public router: Router,
    private clienteService: ClienteService) {
    super(router,clienteService);
    this.text = "Cliente";
    this.redirectToCreate = "dashboard/addCliente";
    this.redirectToEdit = "dashboard/editCliente/";
    this.redirectToDelete = "dashboard/deleteCliente/";
    this.columnKey = "Id";

  }

  ngOnInit() {
    super.ngOnInit();
    this.tableHead = new Array<String>("Código", "Nome","Endereço","Telefone 1","Telefone 2");
    this.tableHeadCode = new Array<String>("Id", "Nome","Endereco","Telefone1","Telefone2");
  }

}
