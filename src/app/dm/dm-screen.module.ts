import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { DmScreenComponent } from "./dm-screen.component";
import { AdventuringComponent } from "./adventuring/adventuring.component";
import { CreatureComponent } from "./battle/creature.component";
import { NpcComponent } from "./npc/npc.component";

import { AdvantageToggleComponent } from "./assets/advantage-toggle/advantage-toggle.component";
import { AddAssetModule } from "./assets/add-asset/add-asset.module";
import { StatsModule } from "./stats/stats.module";

@NgModule({
  declarations: [
    AdvantageToggleComponent,
    NpcComponent,
    AdventuringComponent,
    CreatureComponent,
    DmScreenComponent,
  ],
  imports: [
    StatsModule,
    AddAssetModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
})
export class CreatureModule { }
