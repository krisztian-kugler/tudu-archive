import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from "@angular/core";
import { TicketList } from "src/app/shared/models/ticket.model";

@Component({
  selector: "td-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent implements OnInit {
  constructor(private changeDetector: ChangeDetectorRef) {}

  @Input() ticketList: TicketList;

  ngOnInit() {}
}
