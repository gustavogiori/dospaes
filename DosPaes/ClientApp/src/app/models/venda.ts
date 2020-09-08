import { ItensVenda } from "./itensVenda";

export class Venda {
  Id: number;
  Data;
  Qnt: number;
  Valor: number;
  ProdutoDescricao: string;
  IdCliente: number;
  ClienteNome: string;
  Entregue: boolean;
  ClienteEndereco: string;
  ClienteTelefone: string;
  ItensVenda: ItensVenda[];
  Observacao:string;
}
