import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceBaseService } from "./serviceBase.service";
import { ApiUrl } from "../models/apiUrl";
@Injectable({
  providedIn: "root",
})
export class ProducaoService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, ApiUrl.baseUrl + "producao");
  }

  getProducao(typeFilter, dateFilter): Observable<any> {
    return this.http.get<any>(
      this.baseUrl +
        "/GetProducao?typeFilter=" +
        typeFilter +
        "&dateFilter=" +
        dateFilter
    );
  }
}
