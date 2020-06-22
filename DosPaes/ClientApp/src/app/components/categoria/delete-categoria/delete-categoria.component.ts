import { Component, OnInit } from "@angular/core";
import { CategoriaService } from "src/app/service/categoria.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Categoria } from "src/app/models/categoria";
import { DeleteBase } from "../../commun/DeleteBase";

@Component({
  selector: "app-delete-categoria",
  templateUrl: "./delete-categoria.component.html",
  styleUrls: ["./delete-categoria.component.css"],
  providers:[CategoriaService]
})
export class DeleteCategoriaComponent extends DeleteBase {
  id = 0;
  descricao = "";
  categoria:Categoria;
  constructor(
    protected categoriaService: CategoriaService,
    public route: ActivatedRoute
  ) {
    super(categoriaService, route);
    this.msgSucess="Categoria deletada com sucesso!";
    this.redirectToListUrl="dashboard/categoria";
    this.type="Categoria";
    
  }
  deleteCategoria() {
    this.delete(this.id);
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
