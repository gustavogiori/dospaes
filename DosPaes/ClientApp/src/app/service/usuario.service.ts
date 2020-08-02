import { Injectable } from '@angular/core';
import { ServiceBaseService } from './serviceBase.service';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = "https://localhost:44379/api/usuarios";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService extends ServiceBaseService {
  constructor(protected http: HttpClient) {
    super(http, baseUrl);
  }

}
