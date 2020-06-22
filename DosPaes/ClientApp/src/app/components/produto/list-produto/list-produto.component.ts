import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProdutoService} from '../../../service/produto.service';
import { ListBase } from '../../commun/ListBase';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css'],
  providers:[ProdutoService]
})

export class ListProdutoComponent extends ListBase {
  
constructor(public router: Router, protected produtoService: ProdutoService) {
  super(router,produtoService);
  this.text = "Produto";
  this.redirectToCreate = "dashboard/addProduto";
  this.redirectToEdit = "dashboard/editProduto/";
  this.redirectToDelete = "dashboard/deleteProduto/";
  this.columnKey = "Id";
  this.Filter=[{campo:"Código",valor:"Id"},{campo:"Descrição",valor:"Descricao"},{campo:"Valor",valor:"Valor"}]
  this.baseUrl= produtoService.baseUrl;
}


    ngOnInit() {  
      super.ngOnInit();  
      this.tableHead = new Array<String>('Código', 'Descrição', 'Preço','Categoria');   
    }
  }
