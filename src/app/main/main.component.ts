import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "td-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
