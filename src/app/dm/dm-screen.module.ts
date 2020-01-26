import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { DmScreenComponent } from "./dm-screen.component";
import { BattleOffenseComponent } from "./stats/battle-offense/battle-offense.component";
import { BattleDefenseComponent } from "./stats/battle-defense/battle-defense.component";
import { StatsComponent } from "./stats/npc-stats/stats.component";
import { AdventuringComponent } from "./adventuring/adventuring.component";
import { CreatureComponent } from "./battle/creature.component";
import { NpcComponent } from "./npc/npc.component";

@NgModule({
  declarations: [
    NpcComponent,
    AdventuringComponent,
    CreatureComponent,
    StatsComponent,
    DmScreenComponent,
    BattleOffenseComponent,
    BattleDefenseComponent,
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
