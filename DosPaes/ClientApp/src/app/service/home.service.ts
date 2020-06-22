import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HomeBoard } from "../models/homeBoard";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  baseUrl: string = "https://localhost:44379/api/Dashboard";

  constructor(protected http: HttpClient) {}

  getAll(): Observable<HomeBoard> {
    return this.http.get<HomeBoard>(this.baseUrl + "/GetAllSum");
  }
}
