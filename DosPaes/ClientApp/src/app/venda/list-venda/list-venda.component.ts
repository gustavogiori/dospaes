import { Component, OnInit } from "@angular/core";
import { ListBase } from "src/app/commun/ListBase";
import { Router } from "@angular/router";
import { VendaService } from "src/app/service/venda.service";

@Component({
  selector: "app-list-venda",
  templateUrl: "./list-venda.component.html",
  styleUrls: ["./list-venda.component.css"],
  providers: [VendaService],
})
export class ListVendaComponent extends ListBase {
  constructor(public router: Router, private vendaService: VendaService) {
    super(router, vendaService);
    this.text = "Vendas";
    this.redirectToCreate = "dashboard/addVenda";
    this.redirectToEdit = "dashboard/editVenda/";
    this.redirectToDelete = "dashboard/deleteVenda/";
    this.columnKey = "id";
  }

  ngOnInit() {
    super.ngOnInit();
    this.tableHead = new Array<String>("Código", "Data", "Valor", "Produto");
  }
}
