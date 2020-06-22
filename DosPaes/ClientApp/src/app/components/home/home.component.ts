import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeBoard } from "src/app/models/homeBoard";
import { HomeService } from "src/app/service/home.service";

@Component({
  selector: "app-header-component",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  home: HomeBoard;
  loading=false;
  constructor(public router: Router, public homeService: HomeService) {}
  ngOnInit(): void {
   this.loading=true;
   this.homeService.getAll().subscribe( data => {
      this.home=data;
      console.log(data);
      this.loading=false;
    });
  }

  redirectToVendas() {
    this.router.navigateByUrl("dashboard/venda");
  }
  redirectToDespesas() {
    this.router.navigateByUrl("dashboard/custo");
  }
}
