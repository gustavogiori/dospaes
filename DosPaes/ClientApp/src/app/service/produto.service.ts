import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceBaseService } from "./serviceBase.service";
import { ApiUrl } from "../models/apiUrl";

const baseUrl: string = "https://localhost:44379/api/produtos";
@Injectable({
  providedIn: "root",
})
export class ProdutoService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, ApiUrl.baseUrl + "produtos");
  }
}
