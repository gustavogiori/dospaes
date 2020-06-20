import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Produto } from "src/app/models/produto";
import { ProdutoService } from "../../service/produto.service";

@Component({
  selector: "app-delete-produto",
  templateUrl: "./delete-produto.component.html",
  styleUrls: ["./delete-produto.component.css"],
})
export class DeleteProdutoComponent implements OnInit {
  submitted = false;
  hasError = false;
  disabled=false;
  redirectToListUrl="dashboard/produto";
  id: 0;
  msgError = "";
  msgSucess = "Deletado cadastrado com sucesso!";
  newText = "Novo";
  type = "Produto";
  produto: Produto;
  redirectToList() {
    this.router.navigateByUrl(this.redirectToListUrl);
  }
  deleteProduto() {
    this.produtoService.delete(this.id).subscribe(
      () => {
        this.submitted=true;
        this.hasError=false;
        this.disabled=true;
        this.msgSucess='Deletado com Sucesso';
      }, error => {
        this.submitted=false;
        this.hasError=true;
        this.disabled=false;
        this.msgError='Erro ao tentar Deletar';
        console.log(error);
      }
    );
  }

  constructor(
    private produtoService: ProdutoService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      alert(this.id);
      this.id = params["id"];
      alert(this.id);
      this.produtoService.get(this.id).subscribe((data) => {
        this.produto = data;
      });
    });
  }
}
