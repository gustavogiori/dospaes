import { OnInit, Directive } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceBaseService } from "../../service/serviceBase.service";


@Directive()
export class ListBase implements OnInit {
  constructor(public router: Router, protected service: ServiceBaseService) {}
  text = "";
  redirectToCreate = "";
  redirectToEdit = "";
  redirectToDelete = "";
  columnKey = "";
  baseUrl;
  loading = false;
  records = [];
  tableHead: Array<String>;
  tableHeadCode: Array<String>;
  tableColName: Array<String>;
  Filter;
  ngOnInit(): void {
    this.loading = true;
    console.log(this.service);
    this.service.getAll().subscribe(
      (record: any[]) => {
        this.records = record;
        console.log(this.records);
        this.loading = false;
      },
      (error) => {
        if(error.status===401){
          this.router.navigateByUrl("dashboard/login");
        }
        this.records = [];
        console.log(`Erro ao tentar Carregar eventos: ${error}`);
        console.log(error);
        this.loading = false;
      }
    );
  }
}
