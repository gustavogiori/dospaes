import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ProdutoService } from "../../service/produto.service";
import { Produto } from "../../models/produto";
import { EditBase } from "src/app/commun/EditBase";
let id = 0;

@Component({
  selector: "app-edit-produto",
  templateUrl: "./edit-produto.component.html",
  styleUrls: ["./edit-produto.component.css"],
  providers:[ProdutoService]
})
export class EditProdutoComponent extends EditBase {
  public produto: Produto;
  constructor(
    protected produtoService: ProdutoService,
    public route: ActivatedRoute,
    protected router: Router
  ) {
    super(produtoService, route);
  }

  ngOnInit() {
    this.newText = "Editar";
    this.redirectToListUrl = "dashboard/produto";
    this.msgSucess = "Produto editado com sucesso!";
    this.type = "Produto";
    this.route.params.subscribe((params: Params) => {
      id = params["id"];

      this.produtoService.get(id).subscribe((data) => {
        this.produto = data;
      });
    });
  }

  saveProduto() {
    const data = {
      Id: this.produto.id,
      Descricao: this.produto.descricao,
      Valor: this.produto.valor,
      IdCategoria: 0,
    };
   this.save(id,data);
  }
}
