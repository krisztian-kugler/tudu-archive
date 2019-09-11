import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

import { DataService } from "../shared/services/data.service";

import { TicketList } from "../shared/models/ticket.model";

@Component({
  selector: "td-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef, private dataService: DataService) {}

  public ticketLists: TicketList[] = [];

  public getBoardColumns(): string {
    return `repeat(${this.ticketLists.length}, 15rem)`;
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data: TicketList[]) => {
      this.ticketLists = data;
      this.changeDetector.markForCheck();
    });
  }
}
