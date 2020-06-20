import { Component, OnInit, Input } from "@angular/core";
import { ProdutoService } from "../../service/produto.service";
import { CategoriaService } from "../../service/categoria.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-produto",
  templateUrl: "./add-produto.component.html",
  styleUrls: ["./add-produto.component.css"],
})
export class AddProdutoComponent implements OnInit {
  redirectToList() {
    this.router.navigateByUrl("dashboard/produto");
  }
  produto = {
    descricao: "",
    valor: "",
    categoria: 0,
  };
  submitted = false;
  hasError = false;
  msgError = "";
  msgSucess="Produto cadastrado com sucesso!";
  newText="Novo";
  type="Produto";
  constructor(private produtoService: ProdutoService, public router: Router,private categoriaService: CategoriaService) {}
  public categorias: any[];
  ngOnInit() {
    this.categoriaService.getAll().subscribe( data => {
      this.categorias=data;
    });
  }

  saveProduto() {
    const data = {
      Id: 0,
      Descricao: this.produto.descricao,
      Valor: this.produto.valor,
      IdCategoria: this.produto.categoria,
    };
    console.log(data);
    this.produtoService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.clear();
        window.setTimeout(function() {
         this.submitted=false; 
      }, 3000);
      },
      (error) => {
        this.submitted = false;
        this.hasError = true;
        this.msgError ="Erro ao cadastrar produto: "+ error.error;
        console.log(error);
      }
    );
  }
  async clearScreen(){
    this.submitted=false;
  }
  clear() {
    this.produto = {
      descricao: "",
      valor: "",
      categoria: 0,
    };
  }
  newProduto() {
    this.submitted = false;
    this.produto = {
      descricao: "",
      valor: "",
      categoria: 0,
    };
  }
}
