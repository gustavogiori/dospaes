import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceBaseService } from "./serviceBase.service";
import { ApiUrl } from "../models/apiUrl";

@Injectable({
  providedIn: "root",
})
export class CategoriaService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, ApiUrl.baseUrl + "categorias");
  }
}
