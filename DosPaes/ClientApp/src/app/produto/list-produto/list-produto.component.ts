import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProdutoService} from '../../service/produto.service';
import { ListBase } from 'src/app/commun/ListBase';
import {ServiceBaseService} from "../../service/serviceBase.service";


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
}


    ngOnInit() {  
      super.ngOnInit();  
      this.tableHead = new Array<String>('Código', 'Descrição', 'Preço','Categoria');   
    }
  }
