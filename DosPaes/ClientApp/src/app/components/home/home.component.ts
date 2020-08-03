import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeBoard } from "../../models/homeBoard";
import { HomeService } from "../../service/home.service";

@Component({
  selector: "app-header-component",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  home: HomeBoard;
  loading = true;
  isCustomFilterOn = false;
  filter;
  dataInicio;
  dataFim;
  constructor(public router: Router, public homeService: HomeService) {}
  ngOnInit(): void {
    this.home= new HomeBoard();
    this.loading = true;
    this.filter = "S";
    this.homeService.getAll().subscribe((data) => {
      this.home = data;
      console.log(data);
      this.loading = false;
    }, err => {
      this.loading = false;
      //...
  });
  }
  onChangeSelectedFilter(idNewFilter) {
    if (idNewFilter === "P") {
      this.isCustomFilterOn = true;
    } else {
      this.isCustomFilterOn = false;
    }
  }
  filterData() {
    this.loading = true;
    if (this.isCustomFilterOn) {
      this.homeService
        .getFilterCustom(this.filter, this.dataInicio, this.dataFim)
        .subscribe((data) => {
          this.home = data;
          console.log(data);
        });
    } else {
      this.homeService.getFilter(this.filter).subscribe((data) => {
        this.home = data;
        console.log(data);
      });
    }
    this.loading = false;
  }
  redirectToVendas() {
    this.router.navigateByUrl("dashboard/venda");
  }
  redirectToDespesas() {
    this.router.navigateByUrl("dashboard/custo");
  }
}
