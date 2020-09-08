import { Component, OnInit } from "@angular/core";
import { AddBase } from "../../commun/AddBase";
import { Router } from "@angular/router";
import { ClienteService } from "../../../service/cliente.service";
import { VendaService } from "../../../service/venda.service";
import { ProdutoService } from "../../../service/produto.service";
import { Venda } from "../../../models/venda";
import { ItensVenda } from "../../../models/itensVenda";
@Component({
  selector: "app-add-venda",
  templateUrl: "./add-venda.component.html",
  styleUrls: ["./add-venda.component.css"],
  providers: [VendaService, ProdutoService, ClienteService],
})
export class AddVendaComponent extends AddBase {
  venda: Venda = new Venda();
  isEdit = false;
  currentItemVenda: ItensVenda;
  itensVenda: Array<ItensVenda> = new Array<ItensVenda>();
  constructor(
    public vendaService: VendaService,
    public router: Router,
    private clienteService: ClienteService
  ) {
    super(router, vendaService);
    this.msgSucess = "Venda cadastrado com sucesso!";
    this.newText = "Nova";
    this.type = "Venda";
    this.redirectToListUrl = "dashboard/venda";
  }
  clear() {
    this.itensVenda = new Array<ItensVenda>();
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
      Qnt: 0,
      ProdutoDescricao: "",
      IdCliente: 0,
      ClienteNome: "",
      Entregue: false,
      ClienteEndereco: "",
      ClienteTelefone: "",
      ItensVenda: null,
      Observacao:""
    };
  }

  edit(index) {
    this.currentItemVenda = this.itensVenda[index];
    this.isEdit = true;
    this.openModalDialog();
  }

  delete(index) {
    this.itensVenda.splice(index, 1);
    this.atualizarQuantidade();
    this.atualizarTotal();
  }
  atualizarClientes() {
    console.log("atualizando clientes");
    this.clienteService.getAll().subscribe((data) => {
      this.clientes = data;
      console.log("voltou clientes");
      console.log(this.clientes);
    });
  }

  saveVenda() {
    this.venda.ItensVenda = this.itensVenda;
    this.save(this.venda);
    this.clear();
  }
  novo() {
    this.isEdit = false;
    this.openModalDialog();
  }
  openModalDialog() {
    if (!this.isEdit) {
      this.currentItemVenda = new ItensVenda();
      this.currentItemVenda.Total = 0;
      this.currentItemVenda.IdProduto = 0;
      this.currentItemVenda.PrecoProduto = 0;
    }
    this.display = "block";
  }
  public myOutputEvent(data: ItensVenda): void {
    this.closeModalDialog();

    if (!this.isEdit) {
      if (
        this.itensVenda.find((x) => x.IdProduto === data.IdProduto) ===
        undefined
      )
        this.itensVenda.push(data);
    } else {
      this.isEdit = false;
    }
    this.atualizarQuantidade();
    this.atualizarTotal();
  }
  atualizarQuantidade() {
    let quantidadeTotal = 0;
    this.itensVenda.forEach(function (value) {
      quantidadeTotal += value.Quantidade;
    });
    this.venda.Qnt = quantidadeTotal;
  }
  atualizarTotal() {
    let total = 0;
    this.itensVenda.forEach(function (value) {
      total += value.Total;
    });
    this.venda.Valor = total;
  }
  closeModalDialog() {
    this.display = "none";
  }
  public produtos: any[];
  public clientes: any[];
  display;
  ngOnInit() {
    this.venda = new Venda();
    console.log("on init");
    this.atualizarClientes();
    this.clear();
  }
}
