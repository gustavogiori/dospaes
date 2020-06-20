import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProdutoService} from '../../service/produto.service';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
 // fetch or create an Object of UserDetails type and pass it to dynamic-table
  produtoDetails: Array<ProdutoDetails> ;
 // required to provide the table header, you can call an api or hard code the column name.
  tableHead: Array<String>;  
  public loading = false;
 // optional, you can hard code the property name or just send the data of an object and dynamic-table component will figure out.
  tableColName: Array<String>;  
  text='Produto';
  redirectToCreate='dashboard/addProduto';
  redirectToEdit='dashboard/editProduto/';
  redirectToDelete='dashboard/deleteProduto/';
  columnKey='Id';

constructor(public router: Router, private produtoService: ProdutoService) {
  this.tableHead = new Array<String>('Código', 'Descrição', 'Preço','Categoria');
  // this.tableColName = new Array<String>('name', 'age', 'gender');
  this.produtoDetails = new Array<ProdutoDetails>();
}

 getEventos() {
   this.loading=true;
  this.produtoService.getAll().subscribe(
      (_eventos: ProdutoDetails[]) => {
          this.produtoDetails = _eventos;
          console.log(this.produtoDetails);
          this.loading=false;
      }, error => {
          alert(`Erro ao tentar Carregar eventos: ${error}`);
          console.log(`Erro ao tentar Carregar eventos: ${error}`);
          this.loading=false;
      });
}
    ngOnInit() {
        this.getEventos();
       
    }
  }
export class ProdutoDetails{
  constructor(public Id: number, public Descricao: string, public Valor: number, public IdCategoria:number) { }
}
