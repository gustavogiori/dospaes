import { Component, OnInit } from "@angular/core";
import { EditBase } from "../../commun/EditBase";
import { ActivatedRoute, Params } from "@angular/router";
import { CustoService } from "src/app/service/custo.service";
import { Custo } from "src/app/models/custo";
let id = 0;
@Component({
  selector: "app-edit-custo",
  templateUrl: "./edit-custo.component.html",
  styleUrls: ["./edit-custo.component.css"],
  providers: [CustoService],
})
export class EditCustoComponent extends EditBase {
  custo: Custo;
  constructor(
    protected custoService: CustoService,
    protected route: ActivatedRoute
  ) {
    super(custoService, route);
  }
  saveCusto() {
    this.save(id, this.custo);
  }
  ngOnInit() {
    super.ngOnInit();
    this.loading = true;
    this.newText = "Editar";
    this.redirectToListUrl = "dashboard/custo";
    this.msgSucess = "Despesa editada com sucesso!";
    this.type = "Despesas";
    this.route.params.subscribe((params: Params) => {
      id = params["id"];
      this.custoService.get(id).subscribe((datastring) => {
        this.custo = datastring;
        console.log(datastring);
        console.log(this.custo);  
        this.loading = false;
      });
    });
  }
}
