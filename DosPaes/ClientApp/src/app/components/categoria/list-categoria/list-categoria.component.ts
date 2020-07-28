import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/models/categoria";
import { Router } from "@angular/router";
import { CategoriaService } from "../../../service/categoria.service";
import { ListBase } from "../../commun/ListBase";


@Component({
  selector: "app-list-categoria",
  templateUrl: "./list-categoria.component.html",
  styleUrls: ["./list-categoria.component.css"],
  providers:[CategoriaService]
})
export class ListCategoriaComponent extends ListBase {
  categorias: Array<Categoria>;
  loading: boolean = false;
  // required to provide the table header, you can call an api or hard code the column name.
  tableHead: Array<String>;
  // optional, you can hard code the property name or just send the data of an object and dynamic-table component will figure out.
  tableColName: Array<String>;

  constructor(
    
    public router: Router,
    private categoriaService: CategoriaService
  ) {
    super(router,categoriaService);
    this.text = "Categoria";
    this.redirectToCreate = "dashboard/addCategoria";
    this.redirectToEdit = "dashboard/editCategoria/";
    this.redirectToDelete = "dashboard/deleteCategoria/";
    this.columnKey = "id";
    this.tableHead = new Array<String>("Código", "Descrição");
    this.tableHeadCode = new Array<String>("id", "descricao");
    this.categorias = new Array<Categoria>();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
