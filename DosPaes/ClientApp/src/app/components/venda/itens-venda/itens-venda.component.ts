import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProdutoService } from "../../../service/produto.service";
import { ItensVenda } from "../../../models/itensVenda";
import { Produto } from "../../../models/produto";

@Component({
  selector: "app-itens-venda",
  templateUrl: "./itens-venda.component.html",
  styleUrls: ["./itens-venda.component.css"],
})
export class ItensVendaComponent implements OnInit {
  public produtos: Produto[];
  produtoSelecionado: Produto;
  @Input() public valor: string;
  @Output() public myOutput = new EventEmitter();
  _itemVenda: ItensVenda;
  get itemVenda(): ItensVenda {
    return this._itemVenda;
  }
  @Input() set itemVenda(value: ItensVenda) {
    this._itemVenda = value;
    console.log(this._itemVenda);
  }

  onChangeProdutoSelecionado(idNewProduto) {
    if (this.itemVenda.Quantidade === 0) {
      this.itemVenda.Total = 0;
    } else {
      this.sumValorVenda(idNewProduto, this.itemVenda.Quantidade);
      this.produtoSelecionado = this.produtos.find((x) => x.Id == idNewProduto);
      this.itemVenda.PrecoProduto = this.produtoSelecionado.Valor;
      this.itemVenda.NomeProduto = this.produtoSelecionado.Descricao;
      console.log(this.itemVenda);
      console.log(this.produtoSelecionado);
    }
  }
  onChangeQntSelecionado(novaQuantidade) {
    if (novaQuantidade > 0) {
      this.sumValorVenda(this.itemVenda.IdProduto, novaQuantidade);
    } else {
      this.itemVenda.Total = 0;
    }
  }
  sumValorVenda(idProd, qnt) {
    let prod = this.produtos.find((x) => x.Id == idProd);
    if (prod) {
      this.itemVenda.Total = prod.Valor * qnt;
    } else {
      this.itemVenda.Total = 0;
    }
  }
  constructor(private produtoService: ProdutoService) {}
  closeModalDialog() {}
  ngOnInit() {
    this.itemVenda = new ItensVenda();
    this._itemVenda= new ItensVenda();
    this.atualizarProduto();
  }
  atualizarProduto() {
    this.produtoService.getAll().subscribe((data) => {
      this.produtos = data;
    });
  }
  public buttonClick(): void {
    var newItemVenda = { ...this.itemVenda };
    this.myOutput.emit(newItemVenda);
  }
}
