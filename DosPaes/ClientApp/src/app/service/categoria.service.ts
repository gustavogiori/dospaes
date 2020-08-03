import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceBaseService } from "./serviceBase.service";

const baseUrl = "https://localhost:44379/api/Categorias";

@Injectable({
  providedIn: "root",
})
export class CategoriaService extends ServiceBaseService{
  constructor(protected http: HttpClient) {
    super(http, baseUrl);
  }
}
