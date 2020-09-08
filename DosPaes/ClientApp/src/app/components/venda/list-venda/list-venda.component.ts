import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Venda } from "src/app/models/venda";
import { VendaService } from "../../../service/venda.service";
import { ListBase } from "../../commun/ListBase";

@Component({
  selector: "app-list-venda",
  templateUrl: "./list-venda.component.html",
  styleUrls: ["./list-venda.component.css"],
  providers: [VendaService],
})
export class ListVendaComponent extends ListBase {
  fazNada(){
    
  }
  loading = true;
  isCustomFilterOn = false;
  filter;
  dataFilter;
  typeFilter;
  onChangeSelectedFilter(idNewFilter) {
    if (idNewFilter === "P") {
      this.isCustomFilterOn = true;
    } else {
      this.isCustomFilterOn = false;
    }
  }
  filterData() {
    
    this.vendaService
      .getFromFilter(this.typeFilter, this.dataFilter)
      .subscribe((data) => {
        this.records = data;
        console.log(data);
      });
  }
  constructor(public router: Router, private vendaService: VendaService) {
    super(router, vendaService);
    this.text = "Vendas";
    this.redirectToCreate = "dashboard/addVenda";
    this.redirectToEdit = "dashboard/editVenda/";
    this.redirectToDelete = "dashboard/deleteVenda/";
    this.columnKey = "Id";
  }

  ngOnInit() {
    this.records= new Array<Venda>();
    super.ngOnInit();
    this.typeFilter="H";
    this.tableHead = new Array<String>(
      "Código",
      "Data",
      "Valor",
      "Entregue",
      "Qntd",
      "Cliente",
      "Tel"
    );
    this.tableHeadCode = new Array<String>(
      "Id",
      "Data",
      "Valor",
      "Entregue",
      "Qnt",
      "ClienteNome",
      "ClienteTelefone"
    );
  }
}
