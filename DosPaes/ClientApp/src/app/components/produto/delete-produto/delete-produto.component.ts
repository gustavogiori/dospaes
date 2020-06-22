import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Produto } from "src/app/models/produto";
import { ProdutoService } from "../../../service/produto.service";
import { DeleteBase } from "../../commun/DeleteBase";

@Component({
  selector: "app-delete-produto",
  templateUrl: "./delete-produto.component.html",
  styleUrls: ["./delete-produto.component.css"],
  providers: [ProdutoService],
})
export class DeleteProdutoComponent extends DeleteBase {
  produto: Produto;
  descricao = "";
  id: 0;
  redirectToList() {
    this.router.navigateByUrl(this.redirectToListUrl);
  }
  deleteProduto() {
    this.delete(this.id);
  }

  constructor(
    protected produtoService: ProdutoService,
    public route: ActivatedRoute,
    protected router: Router
  ) {
    super(produtoService, route);
    this.redirectToListUrl = "dashboard/produto";
    this.msgSucess = "Produto deletado com sucesso!";
    this.newText = "Deletar";
    this.type = "Produto";
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
