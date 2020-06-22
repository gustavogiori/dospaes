import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/models/categoria";
import { CategoriaService } from "src/app/service/categoria.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { EditBase } from "../../commun/EditBase";

let id=0;
@Component({
  selector: "app-edit-categoria",
  templateUrl: "./edit-categoria.component.html",
  styleUrls: ["./edit-categoria.component.css"],
  providers:[CategoriaService]
})

export class EditCategoriaComponent extends EditBase {
  public categoria: Categoria;

  constructor(protected categoriaService: CategoriaService,
    protected route: ActivatedRoute) 
    {
      super(categoriaService,route);
    }

  ngOnInit() {
    this.loading=true;
    this.newText = "Editar";
    this.redirectToListUrl = "dashboard/categoria";
    this.msgSucess = "Categoria editada com sucesso!";
    this.type = "Categoria";
    this.route.params.subscribe((params: Params) => {
      id = params["id"];
     
     this.categoriaService.get(id).subscribe( data => {
        this.categoria=data;
        this.loading=false;
      });
    });
  }
  saveCategoria() {

    const data = {
      Id: this.categoria.id,
      Descricao: this.categoria.descricao,
    };

  this.save(id,data);
  }
}
