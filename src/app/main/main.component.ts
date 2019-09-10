import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

import { Observable } from "rxjs";

import { DataService } from "../shared/services/data.service";

import { TicketList } from "../shared/models/tickets.model";

@Component({
  selector: "td-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef, private dataService: DataService) {}

  public ticketLists$: Observable<TicketList[]>;

  ngOnInit() {
    this.ticketLists$ = this.dataService.getData();
    this.changeDetector.markForCheck();
  }
}
