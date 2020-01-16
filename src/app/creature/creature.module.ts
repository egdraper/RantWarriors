import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CreatureComponent } from "./creature.component";
import { DemoMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { BattleDefenseComponent } from "./battle-defense/battle-defense.component";
import { BattleOffenseComponent } from "./battle-offense/battle-offense.component";

@NgModule({
  declarations: [
    CreatureComponent,
    BattleDefenseComponent,
    BattleOffenseComponent,
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
