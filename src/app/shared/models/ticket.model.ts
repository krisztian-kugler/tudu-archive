export class Ticket {
  constructor(public id: number, public title: string, public description?: string) {}
}

export class TicketList {
  constructor(public id: number, public title: string, public tickets: Ticket[] = []) {}
}
