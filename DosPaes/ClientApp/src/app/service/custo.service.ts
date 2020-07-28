import { Injectable } from "@angular/core";
import { ServiceBaseService } from "./serviceBase.service";
import { HttpClient } from "@angular/common/http";

const baseUrl = "https://teste-253.apphb.com/api/custos";

@Injectable({
  providedIn: "root",
})
export class CustoService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, baseUrl);
  }
}
