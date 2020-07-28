import { Injectable } from "@angular/core";
import { ServiceBaseService } from "./serviceBase.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Venda } from "../models/venda";

const baseUrl = "https://localhost:44379/api/vendas";

@Injectable({
  providedIn: "root",
})
export class VendaService extends ServiceBaseService {
  getFromFilter(typeFilter, dateFilter): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + "?typeFilter=" + typeFilter + "&dateFilter=" + dateFilter
    );
  }
  atualizarDadosEntrega(id, data) {
    return this.http
      .put(`${this.baseUrl}/SetEntrega/${id}`, data)
      .toPromise()
      .then((res) => {
        // Success
        console.log(res.toString());
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }
  getBoardVendas(typeFilter, dateFilter): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        "/BoardVendas?typeFilter=" +
        typeFilter +
        "&dateFilter=" +
        dateFilter
    );
  }
  constructor(protected http: HttpClient) {
    super(http, baseUrl);
  }
}
