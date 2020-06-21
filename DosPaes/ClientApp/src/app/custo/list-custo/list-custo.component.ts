import { Component, OnInit } from '@angular/core';
import { ListBase } from 'src/app/commun/ListBase';
import { CustoService } from 'src/app/service/custo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-custo',
  templateUrl: './list-custo.component.html',
  styleUrls: ['./list-custo.component.css'],
  providers:[CustoService]
})
export class ListCustoComponent extends ListBase {

  constructor(public router: Router,
    private custoService: CustoService) {
    super(router,custoService);
    this.text = "Despesas";
    this.redirectToCreate = "dashboard/addCusto";
    this.redirectToEdit = "dashboard/editCusto/";
    this.redirectToDelete = "dashboard/deleteCusto/";
    this.columnKey = "id";

  }

  ngOnInit() {
    super.ngOnInit();
    this.tableHead = new Array<String>("Código", "Data","Local","Valor");
  }

}
