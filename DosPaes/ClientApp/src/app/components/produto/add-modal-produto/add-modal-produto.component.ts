import { Component, OnInit } from "@angular/core";
import { AddProdutoComponent } from "../add-produto/add-produto.component";
import { ProdutoService } from "src/app/service/produto.service";
import { Router } from "@angular/router";
import { CategoriaService } from "src/app/service/categoria.service";

@Component({
  selector: "app-add-modal-produto",
  templateUrl: "./add-modal-produto.component.html",
  styleUrls: ["./add-modal-produto.component.css"],
})
export class AddModalProdutoComponent extends AddProdutoComponent {
  showButtonBack: boolean;
  constructor(
    public produtoService: ProdutoService,
    public router: Router,
    public categoriaService: CategoriaService
  ) {
    super(produtoService, router, categoriaService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.showButtonBack = false;

  }
}
