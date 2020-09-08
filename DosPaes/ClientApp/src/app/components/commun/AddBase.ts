import { OnInit, EventEmitter, Directive } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceBaseService } from "../../service/serviceBase.service";

@Directive()
export class AddBase implements OnInit {
  loading = false;
  submitted = false;
  hasError = false;
  msgError = "";
  iconHead = "fa fa-plus";
  msgSucess = "";
  newText = "Novo";
  type = "";
  redirectToListUrl = "";

  save(data: any) {
    console.log(this.Service);
    this.loading = true;
    this.submitted = false;
    this.hasError = false;
    console.log(data);
    this.Service.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted=true;
        this.loading = false;

      },
      (erro) => {
        this.submitted = false;
        this.hasError = true;
        this.loading = false;
        this.msgError=erro.error;
        console.log(erro.error);
        console.log(erro.status);
        console.log(erro);
        console.log("erro ao realizar cadastro!")
      }
    );
  }
  constructor(
    protected router: Router,
    protected Service: ServiceBaseService
  ) {}
  ngOnInit(): void {}
}
