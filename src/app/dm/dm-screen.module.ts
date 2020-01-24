import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { CreatureStatsComponent } from "./battle/creature-stats/creature-stats.component";
import { DmScreenComponent } from "./dm-screen.component";
import { BattleDefenseComponent } from "./battle/battle-defense/battle-defense.component";
import { BattleOffenseComponent } from "./battle/battle-offense/battle-offense.component";
import { NpmStatsComponent } from "./npc/npc-stats/npc-stats.component";
import { BattleDefenseNpcComponent } from "./npc/battle-defense/battle-defense.component";
import { BattleOffenseNpcComponent } from "./npc/battle-offense/battle-offense.component";
import { AdventuringComponent } from "./adventuring/adventuring.component";

@NgModule({
  declarations: [
    AdventuringComponent,
    NpmStatsComponent,
    CreatureStatsComponent,
    DmScreenComponent,
    BattleDefenseComponent,
    BattleOffenseComponent,
    BattleDefenseNpcComponent,
    BattleOffenseNpcComponent,
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
