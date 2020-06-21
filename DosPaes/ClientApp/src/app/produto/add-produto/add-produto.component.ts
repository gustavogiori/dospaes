import { Component, OnInit, Input } from "@angular/core";
import { ProdutoService } from "../../service/produto.service";
import { CategoriaService } from "../../service/categoria.service";
import { Router } from "@angular/router";
import { AddBase } from "src/app/commun/AddBase";

@Component({
  selector: "app-add-produto",
  templateUrl: "./add-produto.component.html",
  styleUrls: ["./add-produto.component.css"],
  providers:[ProdutoService]
})
export class AddProdutoComponent extends AddBase {
  redirectToList() {
    this.router.navigateByUrl("dashboard/produto");
  }
  produto = {
    descricao: "",
    valor: "",
    categoria: 0,
  };


  constructor(public produtoService: ProdutoService, public router: Router,private categoriaService: CategoriaService) {
    super(router,produtoService);
    this.msgSucess="Produto cadastrado com sucesso!";
    this.newText="Novo";
    this.type="Produto";
    this.redirectToListUrl="dashboard/produto";
  }
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
    this.save(data);
    this.clear();
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
   this.clear();
  }
}
