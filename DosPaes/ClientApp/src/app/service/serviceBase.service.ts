import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServiceBaseService {
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  filter(campo,valor):Observable<any> { 
    if(valor){
    return this.http.get<any>(`${this.baseUrl}/${campo}/${valor}`);
    }
    else{
    return this.getAll();
    }
  }
  get(id):Observable<any> { 
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  create(data) {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl, body, { headers: headers });
  }

  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id) {
    let url = `${this.baseUrl}/${id}`;
    let retorno = this.http.delete(url);
    return retorno;
  }

  deleteAll() {
    return this.http.delete(this.baseUrl);
  }

  constructor(protected http: HttpClient, public baseUrl: string) {}
}
