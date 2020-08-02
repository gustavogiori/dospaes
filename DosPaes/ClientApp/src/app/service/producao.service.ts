import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProducaoService {
  baseUrl: string = "https://localhost:44379/api/producao";

  constructor(protected http: HttpClient) {}

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