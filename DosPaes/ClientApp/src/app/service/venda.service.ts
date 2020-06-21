import { Injectable } from "@angular/core";
import { ServiceBaseService } from "./serviceBase.service";
import { HttpClient } from "@angular/common/http";

const baseUrl = "https://localhost:44379/api/vendas";

@Injectable({
  providedIn: "root",
})
export class VendaService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, baseUrl);
  }
}
