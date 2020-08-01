import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-crud-head",
  templateUrl: "./crud-head.component.html",
  styleUrls: ["./crud-head.component.css"],
})
export class CrudHeadComponent implements OnInit {
  @Input() submitted: boolean;
  @Input() showButtonBack: boolean = true;
  @Input() hasError: boolean;
  @Input() msgError: string;
  @Input() type: string;
  @Input() msgSucesso: string;
  @Input() newText: string;
  @Input() redirectToListUrl: string;
  @Input() iconHead: string;

  redirectToHome() {
    this.router.navigateByUrl("dashboard/home");
  }

  redirectToList() {
    this.router.navigateByUrl(this.redirectToListUrl);
  }
  newProduto() {
    this.submitted = false;
  }

  constructor(private router: Router) {}
  ngOnInit() {}
}
