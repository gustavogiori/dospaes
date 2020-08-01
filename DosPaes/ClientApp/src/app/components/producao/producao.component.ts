import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProducaoService } from "src/app/service/producao.service";
import { Producao } from "src/app/models/producao";

@Component({
  selector: "app-producao",
  templateUrl: "./producao.component.html",
  styleUrls: ["./producao.component.css"],
})
export class ProducaoComponent implements OnInit {
  loading = false;
  isCustomFilterOn = false;
  dataFilter;
  typeFilter;
  hasData = false;
  constructor(public router: Router, public producaoService: ProducaoService) {}
  producoes: Producao[];

  onChangeSelectedFilter(idNewFilter) {
    if (idNewFilter === "P") {
      this.isCustomFilterOn = true;
    } else {
      this.isCustomFilterOn = false;
    }
  }

  filterData() {
    this.loading = true;

    this.producaoService
      .getProducao(this.typeFilter, this.dataFilter)
      .subscribe((data) => {
        this.producoes = data;
        this.hasData = this.producoes.length > 0;
        console.log(data);
        this.loading = false;
      });
  }
  ngOnInit() {
    this.typeFilter = "H";
    this.filterData();
  }
}
