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
import { AddAssetComponent } from "./assets/add-asset/add-asset.component";
import { AddNpcComponent } from "./add-npc/add-npc.component";
import { AdvantageToggleComponent } from "./stats/npc-stats/advantage-toggle/advantage-toggle.component";
import { AbilityScoreComponent } from "./stats/npc-stats/ability-score/ability-score.component";
import { SavingThrowComponent } from './stats/npc-stats/saving-throw/saving-throw.component';

@NgModule({
  declarations: [
    AdvantageToggleComponent,
    AddAssetComponent,
    AddNpcComponent,
    NpcComponent,
    AdventuringComponent,
    CreatureComponent,
    StatsComponent,
    DmScreenComponent,
    BattleOffenseComponent,
    BattleDefenseComponent,
    AbilityScoreComponent,
    SavingThrowComponent,
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
