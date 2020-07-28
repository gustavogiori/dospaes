import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { VendaService } from "../../service/venda.service";
import { BoardVendas } from "../../models/boardVendas";
@Component({
  selector: "app-board-vendas",
  templateUrl: "./board-vendas.component.html",
  styleUrls: ["./board-vendas.component.css"],
})
export class BoardVendasComponent implements OnInit {
  boards: BoardVendas[];
  loading = false;
  isCustomFilterOn = false;
  dataFilter;
  typeFilter;
  taChecado = false;
  constructor(public router: Router, public vendaService: VendaService) {}
  onChangeSelectedFilter(idNewFilter) {
    if (idNewFilter === "P") {
      this.isCustomFilterOn = true;
    } else {
      this.isCustomFilterOn = false;
    }
  }
  
  public onSaveUsernameChanged(value: boolean, idBoard: number,idVenda: number) {

    let bordId:BoardVendas = this.boards.find((board) => {
      return board.Id === idBoard;
    })
    let vendaId = bordId.Vendas.find((venda) => {
      return venda.Id === idVenda;
    })
    vendaId.Entregue=value;
    this.vendaService.atualizarDadosEntrega(idVenda, vendaId) .then((res) => {
      // Success
      this.filterData();
    })
  }
  
  filterData() {
    this.loading = true;
    this.vendaService
      .getBoardVendas(this.typeFilter, this.dataFilter)
      .subscribe((data) => {
        this.boards = data;
        console.log(data);
        this.loading = false;
      });
  }
  ngOnInit() {
    this.typeFilter = "H";
    this.filterData();
  }
}
