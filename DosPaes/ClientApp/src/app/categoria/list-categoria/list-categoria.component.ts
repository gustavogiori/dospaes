import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Router } from '@angular/router';
import {CategoriaService} from '../../service/categoria.service'

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
  categorias: Array<Categoria>;
 // required to provide the table header, you can call an api or hard code the column name.
  tableHead: Array<String>;  
 // optional, you can hard code the property name or just send the data of an object and dynamic-table component will figure out.
  tableColName: Array<String>;  
  text='Categoria';
  redirectToCreate='dashboard/addCategoria';
  redirectToEdit='dashboard/editCategoria/';
  redirectToDelete='dashboard/deleteCategoria/';
  columnKey='Id';

constructor(public router: Router, private categoriaService: CategoriaService) {
  this.tableHead = new Array<String>('Código', 'Descrição');
  this.categorias = new Array<Categoria>();
}
getCategoria() {
  this.categoriaService.getAll().subscribe(
      (categoria: Categoria[]) => {
          this.categorias = categoria;
      }, error => {
          alert(`Erro ao tentar Carregar categorias: ${error}`);
          console.log(`Erro ao tentar Carregar categorias: ${error}`);
      });
}
  ngOnInit() {
    this.getCategoria();
  }
  
}
