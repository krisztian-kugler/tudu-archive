import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'td-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
