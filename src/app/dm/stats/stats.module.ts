import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatsComponent } from "./stats.component";
import { BattleDefenseComponent } from "./battle-defense/battle-defense.component";
import { BattleOffenseComponent } from "./battle-offense/battle-offense.component";
import { SavingThrowComponent } from "./npc-stats/saving-throw/saving-throw.component";
import { AbilityScoreComponent } from "./npc-stats/ability-score/ability-score.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../material.module";
import { CreatureStatsComponent } from "./creature-stats/creature-stats.component";
import { AbilityStatsComponent } from "./ability-stats/ability-stats.component";
import { BattleStatsComponent } from "./battle-stats/battle-stats.component";
import { ImmunityVulnerabilityStatsComponent } from "./immunity-vulnerability-stats/immunity-vulnerability-stats.component";
import { ProficiencyStatsComponent } from "./proficiency-stats/proficiency-stats.component";
import { TraitStatsComponent } from './trait-stats/trait-stats.component';

@NgModule({
  declarations: [
    StatsComponent,
    BattleDefenseComponent,
    BattleOffenseComponent,
    SavingThrowComponent,
    AbilityScoreComponent,
    CreatureStatsComponent,
    AbilityStatsComponent,
    BattleStatsComponent,
    ImmunityVulnerabilityStatsComponent,
    ProficiencyStatsComponent,
    TraitStatsComponent,
  ],
  exports: [
    StatsComponent,
    BattleDefenseComponent,
    BattleOffenseComponent,
    SavingThrowComponent,
    AbilityScoreComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ]
})
export class StatsModule { }
