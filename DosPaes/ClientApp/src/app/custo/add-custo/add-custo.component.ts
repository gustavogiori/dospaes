import { Component, OnInit } from "@angular/core";
import { AddBase } from "src/app/commun/AddBase";
import { Router } from "@angular/router";
import { CustoService } from "../../service/custo.service";
import { Custo } from "src/app/models/custo";

@Component({
  selector: "app-add-custo",
  templateUrl: "./add-custo.component.html",
  styleUrls: ["./add-custo.component.css"],
  providers: [CustoService],
})
export class AddCustoComponent extends AddBase {
  custo: Custo;
  constructor(protected router: Router, protected custoService: CustoService) {
    super(router, custoService);
    console.log("alert");
    console.log(custoService);
    this.msgSucess = "Despesa cadastrada com sucesso!";
    this.newText = "Nova";
    this.type = "Despesa";
    this.redirectToListUrl = "dashboard/custo";
  }
  saveCusto() {
    this.save(this.custo);
    this.clear();
  }
  clear() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    let final = anoF + "-" + mesF + "-" + diaF;
    this.custo = { Id: 0, Data: final, Local: "", Valor: 0 };
  }
  ngOnInit() {
    this.clear();
  }
}
