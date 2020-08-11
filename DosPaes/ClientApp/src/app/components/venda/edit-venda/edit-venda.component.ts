import { Component, OnInit } from "@angular/core";
import { EditBase } from "../../commun/EditBase";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ItensVenda } from "../../../models/itensVenda";
import { Venda } from "../../../models/venda";
import { VendaService } from "../../../service/venda.service";
import { ProdutoService } from "../../../service/produto.service";
import { ClienteService } from "../../../service/cliente.service";
let id;
@Component({
  selector: "app-edit-venda",
  templateUrl: "./edit-venda.component.html",
  styleUrls: ["./edit-venda.component.css"],
})
export class EditVendaComponent extends EditBase {
  public venda: Venda;
  isEdit = false;
  currentItemVenda: ItensVenda;
  display;
  constructor(
    protected vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    public route: ActivatedRoute,
    protected router: Router
  ) {
    super(vendaService, route);
  }
  public myOutputEvent(data: ItensVenda): void {
    this.closeModalDialog();

    if (!this.isEdit) {
      if (
        this.venda.ItensVenda.find((x) => x.IdProduto === data.IdProduto) ===
        undefined
      )
      this.venda.ItensVenda.push(data);
    } else {
      this.isEdit = false;
    }
    this.atualizarQuantidade();
    this.atualizarTotal();
  }
  atualizarQuantidade() {
    let quantidadeTotal = 0;
    this.venda.ItensVenda.forEach(function (value) {
      quantidadeTotal += value.Quantidade;
    });
    this.venda.Qnt = quantidadeTotal;
  }
  edit(index) {
    this.currentItemVenda = this.venda.ItensVenda[index];
    this.isEdit = true;
    this.openModalDialog();
  }
  openModalDialog() {
    if (!this.isEdit) {
      this.currentItemVenda = new ItensVenda();
      this.currentItemVenda.Total = undefined;
      this.currentItemVenda.IdProduto = undefined;
      this.currentItemVenda.PrecoProduto = undefined;
    }
    this.display = "block";
    console.log('clicou');
  }
  delete(index) {
    this.venda.ItensVenda.splice(index, 1);
    this.atualizarQuantidade();
    this.atualizarTotal();
  }
  atualizarTotal() {
    let total = 0;
    this.venda.ItensVenda.forEach(function (value) {
      total += value.Total;
    });
    this.venda.Valor = total;
  }
  closeModalDialog() {
    this.display = "none";
  }
  ngOnInit() {
    this.venda= new Venda();
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
       
        console.log(this.venda);
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
  novo() {
    this.isEdit = false;
    this.openModalDialog();
  }
  public produtos: any[];
  public clientes: any[];
  saveVenda() {
    this.save(id, this.venda);
  }
}
