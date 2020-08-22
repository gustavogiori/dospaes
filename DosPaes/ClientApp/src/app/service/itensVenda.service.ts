import { Injectable } from "@angular/core";
import { ServiceBaseService } from "./serviceBase.service";
import { HttpClient } from "@angular/common/http";
import { ApiUrl } from "../models/apiUrl";

@Injectable()
export class ItensVendaService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, ApiUrl.baseUrl + "itensVenda");
  }
}
