import { Component, OnInit } from '@angular/core';
import { CustoService } from 'src/app/service/custo.service';
import { Router } from '@angular/router';
import { ListBase } from '../../commun/ListBase';

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
    this.columnKey = "Id";

  }

  ngOnInit() {
    super.ngOnInit();
    this.tableHead = new Array<String>("Código", "Data","Local","Valor");
    this.tableHeadCode = new Array<String>("Id", "Data","Local","Valor");
  }

}
