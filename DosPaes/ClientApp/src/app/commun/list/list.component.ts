import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  @Input() tableHeads: Array<String> = new Array<String>();
  @Input() tableDatas: Array<any> = new Array<any>();
  @Input() tableColName: Array<String> = new Array<String>();
  tableColNameGenerated: Array<String> = new Array<String>();
  isTableColNameSet: Boolean = false;
  @Input() columnKey;
  @Input() text;
  @Input() urlRedirectToCreate = "";
  @Input() urlRedirectToEdit = "";
  @Input() urlRedirectToDelete = "";
  @Input() produtos;

  redirectToCreate() {
    this.router.navigateByUrl(this.urlRedirectToCreate);
  }
  redirectToEdit(id) {
    this.router.navigateByUrl(this.urlRedirectToEdit + id);
  }
  redirectToDelete(id) {
    this.router.navigateByUrl(this.urlRedirectToDelete + id);
  }

  private getKeys(value: any): Array<String> {
    return Object.keys(value);
  }
  private isHeadAndColLengthSame(
    head: Array<String>,
    col: Array<String>
  ): Boolean {
    return head.length === col.length;
  }

  constructor(public router: Router) {}

  ngOnInit() {}
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
