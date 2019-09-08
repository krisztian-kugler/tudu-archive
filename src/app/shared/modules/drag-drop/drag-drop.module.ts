import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DraggableDirective } from "./draggable.directive";
import { DropzoneDirective } from "./dropzone.directive";

import { DragDropService } from "./drag-drop.service";

@NgModule({
  declarations: [DraggableDirective, DropzoneDirective],
  imports: [CommonModule],
  exports: [DraggableDirective, DropzoneDirective],
  providers: [DragDropService]
})
export class DragDropModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: DragDropModule,
      providers: [DragDropService]
    };
  }
}
