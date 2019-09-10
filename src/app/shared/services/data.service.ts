import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { TicketList } from "../models/tickets.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<TicketList[]> {
    return this.http.get<TicketList[]>("assets/data.json");
  }
}
