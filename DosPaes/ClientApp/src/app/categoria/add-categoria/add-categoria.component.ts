import { Component, OnInit, Input } from "@angular/core";
import { CategoriaService } from "../../service/categoria.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-categoria",
  templateUrl: "./add-categoria.component.html",
  styleUrls: ["./add-categoria.component.css"],
})
export class AddCategoriaComponent implements OnInit {
  redirectToList() {
    this.router.navigateByUrl("dashboard/categoria");
  }
  categoria = {
    descricao: ""
  };
  submitted = false;
  hasError = false;
  msgError = "";
  constructor(private router: Router,private categoriaService: CategoriaService) {}
  public categorias: any[];
  ngOnInit() {
  }

  saveProduto() {
    const data = {
      Id: 0,
      Descricao: this.categoria.descricao
    };
    this.categoriaService.create(data).subscribe(
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

  newProduto() {
    this.submitted = false;
    this.categoria = {
      descricao: ""
    };
  }
}
