import { Component, OnInit } from "@angular/core";
import { AddBase } from "../../commun/AddBase";
import { Router } from "@angular/router";
import { VendaService } from "src/app/service/venda.service";
import { ProdutoService } from "src/app/service/produto.service";
import { Produto } from "src/app/models/produto";
import { Venda } from "src/app/models/venda";

@Component({
  selector: "app-add-venda",
  templateUrl: "./add-venda.component.html",
  styleUrls: ["./add-venda.component.css"],
  providers: [VendaService, ProdutoService],
})
export class AddVendaComponent extends AddBase {
  venda: Venda;
  constructor(
    public vendaService: VendaService,
    public router: Router,
    private produtoService: ProdutoService
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
    };
  }
  onChangeQntSelecionado(novaQuantidade) {
    if (novaQuantidade > 0) {
      console.log("nova quant");
      console.log(novaQuantidade);
      this.sumValorVenda(this.venda.IdProduto, novaQuantidade);
    }
    else {
      this.venda.Valor=0;
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
  onChangeProdutoSelecionado(idNewProduto) {
    if (this.venda.Qnt === 0) {
      this.venda.Valor = 0;
    } else {
      this.sumValorVenda(idNewProduto, this.venda.Qnt);
    }
  }
  saveVenda() {
    this.save(this.venda);
    this.clear();
  }
  public produtos: Produto[];
  ngOnInit() {
    this.produtoService.getAll().subscribe((data) => {
      this.produtos = data;
    });
    console.log(this.produtos);
    this.clear();
  }
}
