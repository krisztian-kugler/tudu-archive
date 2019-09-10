import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "td-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
