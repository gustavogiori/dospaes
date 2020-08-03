import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HomeBoard } from "../models/homeBoard";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  baseUrl: string = "https://localhost:44379/api/Dashboard";

  constructor(protected http: HttpClient) {}

  getAll(): Observable<HomeBoard> {
    return this.http.get<HomeBoard>(this.baseUrl + "/GetAllSum").pipe(map(result => result));
  }
  getFilter(tipo): Observable<HomeBoard> {
    return this.http.get<HomeBoard>(this.baseUrl + "/GetAllSum?tipo=" + tipo).pipe(map(result => result));
  }
  getFilterCustom(tipo, dataInicio, dataFim): Observable<HomeBoard> {
    return this.http.get<HomeBoard>(
      this.baseUrl +
        "/GetAllSum?tipo=" +
        tipo +
        "&dataInicio=" +
        dataInicio +
        "&dataFim=" +
        dataFim
    ).pipe(map(result => result));
  }
}
