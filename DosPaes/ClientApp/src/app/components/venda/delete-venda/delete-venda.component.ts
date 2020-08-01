import { Component, OnInit } from '@angular/core';
import { DeleteBase } from '../../commun/DeleteBase';
import { Venda } from 'src/app/models/venda';
import { VendaService } from 'src/app/service/venda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-venda',
  templateUrl: './delete-venda.component.html',
  styleUrls: ['./delete-venda.component.css']
})
export class DeleteVendaComponent extends DeleteBase {
  venda: Venda;
  descricao = "";
  id: 0;
  redirectToList() {
    this.router.navigateByUrl(this.redirectToListUrl);
  }
  deleteProduto() {
    this.delete(this.id);
  }

  constructor(
    protected vendaService: VendaService,
    public route: ActivatedRoute,
    protected router: Router
  ) {
    super(vendaService, route);
    this.redirectToListUrl = "dashboard/venda";
    this.msgSucess = "Venda deletada com sucesso!";
    this.newText = "Deletar";
    this.type = "Venda";
  }

  ngOnInit() {
    super.ngOnInit();
  }
}