import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";
import { MainModule } from "./main/main.module";
import { IconModule } from "./shared/modules/icon/icon.module";
import { DragDropModule } from "./shared/modules/drag-drop/drag-drop.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    MainModule,
    IconModule.forRoot(),
    DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
