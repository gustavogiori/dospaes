import { Component, OnInit } from "@angular/core";
import { AddBase } from "../../commun/AddBase";
import { Router } from "@angular/router";
import { ClienteService } from "../../../service/cliente.service";
import { VendaService } from "../../../service/venda.service";
import { ProdutoService } from "../../../service/produto.service";
import { Venda } from "../../../models/venda";
@Component({
  selector: "app-add-venda",
  templateUrl: "./add-venda.component.html",
  styleUrls: ["./add-venda.component.css"],
  providers: [VendaService, ProdutoService, ClienteService],
})
export class AddVendaComponent extends AddBase {
  venda: Venda;
  constructor(
    public vendaService: VendaService,
    public router: Router,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) {
    super(router, vendaService);
    this.msgSucess = "Venda cadastrado com sucesso!";
    this.newText = "Nova";
    this.type = "Venda";
    this.redirectToListUrl = "dashboard/venda";
  }
  clear() {
    var date = new Date(),
      dia = date.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (date.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = date.getFullYear();
    let final = anoF + "-" + mesF + "-" + diaF;
    this.venda = {
      Id: 0,
      Data: final,
      Valor: 0,
      Qnt: 1,
      IdProduto: 0,
      ProdutoDescricao: "",
      IdCliente: 0,
      ClienteNome: "",
      Entregue: false,
      ClienteEndereco: "",
      ClienteTelefone: "",
    };
  }
  onChangeQntSelecionado(novaQuantidade) {
    if (novaQuantidade > 0) {
      this.sumValorVenda(this.venda.IdProduto, novaQuantidade);
    } else {
      this.venda.Valor = 0;
    }
  }

  sumValorVenda(idProd, qnt) {
    let prod = this.produtos.find((x) => x.Id == idProd);
    if (prod) {
      this.venda.Valor = prod.Valor * qnt;
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
  onChangeProdutoSelecionado(idNewProduto) {
    if (this.venda.Qnt === 0) {
      this.venda.Valor = 0;
    } else {
      this.sumValorVenda(idNewProduto, this.venda.Qnt);
    }
  }
  novoCliente() {

  }

  saveVenda() {
    this.save(this.venda);
    this.clear();
  }
  public produtos: any[];
  public clientes: any[];
  ngOnInit() {
    this.atualizarProduto();
    this.atualizarClientes();
    this.clear();
  }
}
