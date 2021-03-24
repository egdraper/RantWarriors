import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoMaterialModule } from "../utils/material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { DmScreenComponent } from "./dm-screen.component";
import { AdventuringComponent } from "./adventuring/adventuring.component";
import { CreatureComponent } from "./creature/creature.component";
import { NpcComponent } from "./npc/npc.component";

import { AdvantageToggleComponent } from "../common/advantage-toggle/advantage-toggle.component";
import { AddAssetModule } from "../dm-tools/assets-portal/add-asset.module";
import { StatsModule } from "../common/stats/stats.module";
import { DBModule } from "../utils/db.module";
import { PlayerComponent } from "./player/player.component";

@NgModule({
  declarations: [
    AdvantageToggleComponent,
    NpcComponent,
    PlayerComponent,
    AdventuringComponent,
    CreatureComponent,
    DmScreenComponent,
  ],
  imports: [
    DBModule,
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
