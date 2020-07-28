import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
    this.columnKey = "id";
  }

  ngOnInit() {
    super.ngOnInit();
    this.typeFilter="H";
    this.tableHead = new Array<String>(
      "Data",
      "Valor",
      "Qntd",
      "Produto",
      "Cliente",
      "Endereço",
      "Tel",
      "Entregue"
    );
    this.tableHeadCode = new Array<String>(
      "Data",
      "Valor",
      "Qnt",
      "ProdutoDescricao",
      "ClienteNome",
      "ClienteEndereco",
      "ClienteTelefone",
      "Entregue"
    );
  }
}
