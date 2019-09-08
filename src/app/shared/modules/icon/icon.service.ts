import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class IconService {
  constructor(private http: HttpClient) {}

  private cache: { [key: string]: Observable<string> } = {};
  private loadIcon$: Observable<string>;

  private getIcon(src: string): Observable<string> {
    return this.http.get(src, { responseType: "text" });
  }

  public loadIcon(src: string): Observable<string> {
    if (!this.cache[src]) {
      this.loadIcon$ = this.getIcon(src).pipe(shareReplay(1));
      this.cache[src] = this.loadIcon$;
    }

    return this.cache[src];
  }
}
