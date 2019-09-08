import { Directive, Inject, ElementRef, Renderer2, HostBinding, HostListener } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { DragDropService } from "./drag-drop.service";

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: "[tdDraggable]"
})
export class DraggableDirective {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private dragDropService: DragDropService
  ) {}

  private position: Position = { x: 0, y: 0 };
  private startPosition: Position = { x: 0, y: 0 };
  private isDragging: boolean = false;

  @HostBinding("style.transform") public get transform(): string {
    return `translate(${this.position.x}px, ${this.position.y}px)`;
  }

  @HostListener("pointerdown", ["$event"]) dragStart(event: PointerEvent): void {
    this.isDragging = true;
    this.startPosition.x = event.clientX - this.position.x;
    this.startPosition.y = event.clientY - this.position.y;
  }

  @HostListener("document:pointermove", ["$event"]) dragMove(event: PointerEvent): void {
    if (this.isDragging) {
      this.position.x = event.clientX - this.startPosition.x;
      this.position.y = event.clientY - this.startPosition.y;
      this.elementFromPoint(event);
    }
  }

  @HostListener("document:pointerup") dragEnd(): void {
    if (this.isDragging) {
      this.isDragging = false;
    }
  }

  private elementFromPoint(event: PointerEvent): void {
    this.renderer.setStyle(this.element.nativeElement, "display", "none");
    this.dragDropService.elementFromPoint.next(this.document.elementFromPoint(
      event.clientX,
      event.clientY
    ) as HTMLElement);
    this.renderer.setStyle(this.element.nativeElement, "display", "block");
  }
}
