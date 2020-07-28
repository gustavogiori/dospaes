import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceBaseService } from "src/app/service/serviceBase.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() tableHeads: Array<String> = new Array<String>();
  @Input() tableHeadsCode: Array<String> = new Array<String>();
  @Input() tableDatas;
  @Input() tableColName: Array<String> = new Array<String>();
  tableColNameGenerated: Array<String> = new Array<String>();
  isTableColNameSet: Boolean = false;
  @Input() columnKey;
  @Input() text;
  @Input() urlRedirectToCreate = "";
  @Input() urlRedirectToEdit = "";
  @Input() urlRedirectToDelete = "";
  @Input() produtos;
  @Input() service;
  @Input() Filter;
  server: ServiceBaseService;
  campo = "";
  valor = "";
  
  redirectToCreate() {
    this.router.navigateByUrl(this.urlRedirectToCreate);
  }
  redirectToEdit(id) {
    this.router.navigateByUrl(this.urlRedirectToEdit + id);
  }
  redirectToDelete(id) {
    this.router.navigateByUrl(this.urlRedirectToDelete + id);
  }

  filter() {
    this.server.filter(this.campo, this.valor).subscribe(
      (record: any[]) => {
        console.log(record);
        this.tableDatas = record;
      },
      (error) => {
        this.tableDatas = [];
        console.log(`Erro ao tentar Carregar eventos: ${error}`);
      }
    );
  }
  private getKeys(value: any): Array<String> {
    let keys = new Array<String>();
    let teste = Object.keys(value);
    console.log("teste");
    console.log(this.tableHeadsCode);
    console.log(this.tableHeads);
    teste.forEach((element) => {
      if (this.tableHeadsCode.indexOf(element) !== -1) {
        keys.push(element);
      } else {
      }
    });
    console.log(keys);
    return keys;
  }
  private isHeadAndColLengthSame(
    head: Array<String>,
    col: Array<String>
  ): Boolean {
    console.log("head.length"+head.length);
    console.log("head.length"+col.length);
    return head.length === col.length;
  }

  constructor(public router: Router, protected http: HttpClient) {}

  ngOnInit() {
    this.server = new ServiceBaseService(this.http, this.service);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes["tableHeads"]) {
      if (this.tableHeads.length > 0) {
        // console.log('tableHeads');
      }
    }

    if (changes["tableDatas"]) {
      if (!this.isTableColNameSet) {
        if (this.tableDatas.length > 0) {
          this.tableColNameGenerated = this.getKeys(this.tableDatas[0]);
          if (
            !this.isHeadAndColLengthSame(
              this.tableHeads,
              this.tableColNameGenerated
            )
          ) {
            console.error(
              "Table column row is not same as with property name in self generated"
            );
          }
        }
      }
    }
  }
}
