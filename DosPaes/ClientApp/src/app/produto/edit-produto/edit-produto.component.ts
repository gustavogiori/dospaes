import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ProdutoService } from "../../service/produto.service";
import { Produto } from "../../models/produto";
let id = 0;

@Component({
  selector: "app-edit-produto",
  templateUrl: "./edit-produto.component.html",
  styleUrls: ["./edit-produto.component.css"],
})
export class EditProdutoComponent implements OnInit {
  public produto: Produto;
  constructor(
    private produtoService: ProdutoService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      id = params["id"];
     
     this.produtoService.get(id).subscribe( data => {
        this.produto=data;
      });
    });
  }
  redirectToList() {
    this.router.navigateByUrl("dashboard/produto");
  }

  submitted = false;
  hasError = false;
  msgError = "";
  newText="Novo";
  msgSucess="Produto editado com sucesso!";
  type="Produto";
  saveProduto() {
    const data = {
      Id: this.produto.id,
      Descricao: this.produto.descricao,
      Valor: this.produto.valor,
      IdCategoria: 0,
    };
    console.log(data);
    this.produtoService.update(id, data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        this.submitted = false;
        this.hasError = true;
        this.msgError = error;
        console.log(error);
      }
    );
  }
}
