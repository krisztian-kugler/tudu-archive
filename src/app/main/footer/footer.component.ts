import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "td-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
