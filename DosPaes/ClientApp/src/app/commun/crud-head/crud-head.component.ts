import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-crud-head",
  templateUrl: "./crud-head.component.html",
  styleUrls: ["./crud-head.component.css"],
})
export class CrudHeadComponent implements OnInit {
  @Input() submitted: boolean;
  @Input() hasError: boolean;
  @Input() msgError: string;
  @Input() type: string;
  @Input() msgSucesso: string;
  @Input() newText: string;
  @Input() redirectToListUrl: string;
  
  redirectToList() {
    this.router.navigateByUrl(this.redirectToListUrl);
  }
  newProduto() {
    this.submitted = false;
  }

  constructor(private router: Router) {}
  ngOnInit() {}
}
