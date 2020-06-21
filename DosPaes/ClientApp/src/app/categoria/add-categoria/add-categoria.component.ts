import { Component, OnInit, Input } from "@angular/core";
import { CategoriaService } from "../../service/categoria.service";
import { Router } from "@angular/router";
import { AddBase } from "../../commun/AddBase";

@Component({
  selector: "app-add-categoria",
  templateUrl: "./add-categoria.component.html",
  styleUrls: ["./add-categoria.component.css"],
  providers: [CategoriaService],
})
export class AddCategoriaComponent extends AddBase {
  redirectToList() {
    this.router.navigateByUrl("dashboard/categoria");
  }
  categoria = {
    descricao: "",
  };

  constructor(
    protected router: Router,
    protected categoriaService: CategoriaService
  ) {
    super(router, categoriaService);
    this.msgSucess = "Categoria cadastrada com sucesso!";
    this.newText = "Nova";
    this.type = "Categoria";
    this.redirectToListUrl = "dashboard/categoria";
  }
  public categorias: any[];
  ngOnInit() {}
  saveProduto() {
    this.save(this.categoria);
    this.clear();
  }
  clear() {
    this.categoria = {
      descricao: "",
    };
  }
}
