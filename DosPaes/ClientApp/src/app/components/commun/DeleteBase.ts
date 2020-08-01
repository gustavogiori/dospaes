import { OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

export class DeleteBase implements OnInit {
  submitted = false;
  hasError = false;
  disabled = false;
  redirectToListUrl = "";
  msgError = "";
  msgSucess = "";
  newText = "";
  iconHead = "fa fa-trash";
  type = "";
  loading=false;
  id=0;
  record:any;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.id = params["id"];
        this.service.get(this.id).subscribe((data) => {
          this.record = data;
          console.log(this.record);
        });
      });
  }
  constructor(protected service: any, public route: ActivatedRoute) {
      
  }
  delete(id:number){
      this.loading=true;
    this.service.delete(id).subscribe(
        () => {
          this.submitted=true;
          this.hasError=false;
          this.disabled=true;
          this.loading=false;
        }, error => {
          this.submitted=false;
          this.hasError=true;
          this.disabled=false;
          this.loading=false;
          this.msgError="Erro ao deletar: "+error.error;
          ;
          console.log(error);
        }
      );
  }
}
