import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";
import { Ticket } from "src/app/shared/models/ticket.model";

@Component({
  selector: "td-ticket-card",
  templateUrl: "./ticket-card.component.html",
  styleUrls: ["./ticket-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent implements OnInit {
  constructor() {}

  @Input() ticket: Ticket;

  ngOnInit() {}
}
