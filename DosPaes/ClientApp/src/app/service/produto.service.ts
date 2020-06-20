import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProdutoDetails } from "../produto/list-produto/list-produto.component";
import { Observable } from "rxjs";
import { Produto } from "../models/produto";

const baseUrl = "https://localhost:44379/api/produtos";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ProdutoDetails[]> {
    return this.http.get<ProdutoDetails[]>(baseUrl);
  }

  get(id):Observable<Produto> { 
    return this.http.get<Produto>(`${baseUrl}/${id}`);
  }

  create(data) {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(baseUrl, body, { headers: headers });
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    alert('service');
    alert(id);
    let url=`${baseUrl}/${id}`;
    alert(url);
    let retorno=this.http.delete(url);
    alert(retorno);
    console.log(retorno);
    
    return retorno;
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
