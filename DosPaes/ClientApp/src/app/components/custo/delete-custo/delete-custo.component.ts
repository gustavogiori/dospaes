import { Component, OnInit } from '@angular/core';
import { CustoService } from 'src/app/service/custo.service';
import { ActivatedRoute } from '@angular/router';
import { DeleteBase } from '../../commun/DeleteBase';

@Component({
  selector: 'app-delete-custo',
  templateUrl: './delete-custo.component.html',
  styleUrls: ['./delete-custo.component.css'],
  providers:[CustoService]
})
export class DeleteCustoComponent extends DeleteBase {

  constructor( protected custoService: CustoService,
    public route: ActivatedRoute) {
    super(custoService,route);
    this.msgSucess="Despesa deletada com sucesso!";
    this.redirectToListUrl="dashboard/custo";
    this.type="Despesas";
  }

  deleteCusto() {
    this.delete(this.id);
  }
  ngOnInit() {
    super.ngOnInit();
  }

}
