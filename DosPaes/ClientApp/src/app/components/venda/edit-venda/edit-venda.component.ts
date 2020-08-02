import { Component, OnInit } from "@angular/core";
import { EditBase } from "../../commun/EditBase";
import { Venda } from "src/app/models/venda";
import { VendaService } from "src/app/service/venda.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ProducaoService } from "src/app/service/producao.service";
import { ClienteService } from "src/app/service/cliente.service";
import { ProdutoService } from "src/app/service/produto.service";
let id;
@Component({
  selector: "app-edit-venda",
  templateUrl: "./edit-venda.component.html",
  styleUrls: ["./edit-venda.component.css"],
})
export class EditVendaComponent extends EditBase {
  public venda: Venda;
  constructor(
    protected vendaService: VendaService,
    private produtoService:ProdutoService,
    private clienteService:ClienteService,
    public route: ActivatedRoute,
    protected router: Router
  ) {
    super(vendaService, route);
  }

  ngOnInit() {
    this.atualizarClientes();
    this.atualizarProduto();
    this.newText = "Editar";
    this.redirectToListUrl = "dashboard/venda";
    this.msgSucess = "Venda editada com sucesso!";
    this.type = "Venda";
    this.route.params.subscribe((params: Params) => {
      id = params["id"];

      this.vendaService.get(id).subscribe((data) => {
        this.venda = data;
      });
    });
  }
  sumValorVenda(idProd, qnt) {
    let prod = this.produtos.find((x) => x.Id == idProd);
    if (prod) {
      this.venda.Valor = prod.Valor * qnt;
    } else {
      this.venda.Valor = 0;
    }
  }
  onChangeProdutoSelecionado(idNewProduto) {
    if (this.venda.Qnt === 0) {
      this.venda.Valor = 0;
    } else {
      this.sumValorVenda(idNewProduto, this.venda.Qnt);
    }
  }
  onChangeQntSelecionado(novaQuantidade) {
    if (novaQuantidade > 0) {
      this.sumValorVenda(this.venda.IdProduto, novaQuantidade);
    } else {
      this.venda.Valor = 0;
    }
  }
  atualizarProduto() {
    this.produtoService.getAll().subscribe((data) => {
      this.produtos = data;
    });
  }
  atualizarClientes() {
    this.clienteService.getAll().subscribe((data) => {
      this.clientes = data;
    });
  }
  public produtos: any[];
  public clientes: any[];
  saveVenda() {
    this.save(id, this.venda);
  }
}
