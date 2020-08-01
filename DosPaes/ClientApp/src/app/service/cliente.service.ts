import { Injectable } from '@angular/core';
import { ServiceBaseService } from './serviceBase.service';
import { HttpClient } from '@angular/common/http';

const baseUrl = "https://teste-253.apphb.com/api/Clientes";

@Injectable({
  providedIn: "root",
})
export class ClienteService extends ServiceBaseService{
    constructor(protected http: HttpClient) {
      super(http, baseUrl);
    }

}
