import { OnInit } from "@angular/core";
import { CategoriaService } from "../service/categoria.service";
import { ActivatedRoute } from "@angular/router";

export class EditBase implements OnInit {
  ngOnInit(): void {}
  submitted = false;
  hasError = false;
  loading=false;
  msgError = "";
  newText = "";
  redirectToListUrl = "";
  msgSucess = "";
  iconHead = "fa fa-pencil";
  type = "";
  constructor(
    protected service: any,
    protected route: ActivatedRoute
  ) {}

  save(id:number,data){
      this.loading=true;
    this.service.update(id, data).subscribe(
        (response) => {
          console.log(response);
          this.submitted = true;
          this.loading=false;
        },
        (error) => {
          this.submitted = false;
          this.hasError = true;
          this.msgError = error;
          this.loading=false;
          console.log(error);
        }
      );
  }
}
