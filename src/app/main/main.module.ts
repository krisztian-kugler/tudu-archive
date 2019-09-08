import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconModule } from "../shared/modules/icon/icon.module";
import { DragDropModule } from "../shared/modules/drag-drop/drag-drop.module";

import { MainComponent } from "./main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { TicketCardComponent } from "./ticket-list/ticket-card/ticket-card.component";

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent, TicketListComponent, TicketCardComponent],
  imports: [CommonModule, IconModule, DragDropModule],
  exports: [MainComponent]
})
export class MainModule {}
