import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CreatureComponent } from "./creature.component";
import { DemoMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    CreatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class CreatureModule { }
