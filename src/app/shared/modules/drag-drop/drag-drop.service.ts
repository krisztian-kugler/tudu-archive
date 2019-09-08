import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DragDropService {
  public elementFromPoint = new Subject<HTMLElement>();
}
