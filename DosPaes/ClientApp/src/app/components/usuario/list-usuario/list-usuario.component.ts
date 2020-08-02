import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ListBase } from '../../commun/ListBase';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent extends ListBase {
  usuarios: Array<Usuario>;
  loading: boolean = false;
  // required to provide the table header, you can call an api or hard code the column name.
  tableHead: Array<String>;
  // optional, you can hard code the property name or just send the data of an object and dynamic-table component will figure out.
  tableColName: Array<String>;

  constructor(
    
    public router: Router,
    private usuarioService: UsuarioService
  ) {
    super(router,usuarioService);
    this.text = "Usuário";
    this.redirectToCreate = "dashboard/addUsuario";
    this.redirectToEdit = "dashboard/editUsuario/";
    this.redirectToDelete = "dashboard/deleteUsuario/";
    this.columnKey = "Email";
    this.tableHead = new Array<String>("Nome", "E-mail");
    this.tableHeadCode = new Array<String>("Nome", "Email");
    this.usuarios = new Array<Usuario>();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
