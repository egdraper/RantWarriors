import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameCanvasComponent } from "./game-canvas/game-canvas.component";
import { DemoMaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [GameCanvasComponent],
  imports: [
    FormsModule,
    DemoMaterialModule,
    CommonModule
  ]
})
export class GamePadModule { }
