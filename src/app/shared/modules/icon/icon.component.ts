import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
  Input,
  HostBinding
} from "@angular/core";
import { IconService } from "./icon.service";

@Component({
  selector: "td-icon, div[td-icon]",
  template: "",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  constructor(
    private element: ElementRef,
    private changeDetector: ChangeDetectorRef,
    private renderer: Renderer2,
    private iconService: IconService
  ) {}

  @Input() src: string;

  @Input("size") _size: string;

  @HostBinding("style.width") @HostBinding("style.height") get size(): string {
    return `${this._size}px`;
  }

  private createSvgElement(svgText: string): SVGElement {
    const div: HTMLDivElement = this.renderer.createElement("div");
    div.innerHTML = svgText;
    return div.querySelector("svg") as SVGElement;
  }

  private render(svgText: string): void {
    const svgElement = this.createSvgElement(svgText);
    svgElement.style.width = svgElement.style.height = "100%";
    this.renderer.appendChild(this.element.nativeElement, svgElement);
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.iconService.loadIcon(this.src).subscribe((svgText: string) => {
      this.render(svgText);
    });
  }
}
