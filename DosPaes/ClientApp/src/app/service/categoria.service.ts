import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../models/categoria";

const baseUrl = "https://localhost:44379/api/Categorias";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl);
  }

  get(id): Observable<Categoria> {
    return this.http.get<Categoria>(`${baseUrl}/${id}`);
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
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
