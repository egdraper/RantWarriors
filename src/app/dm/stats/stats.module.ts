import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatsComponent } from "./stats.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../material.module";
import { CreatureStatsComponent } from "./creature-stats/creature-stats.component";
import { AbilityStatsComponent } from "./ability-stats/ability-stats.component";
import { BattleStatsComponent } from "./battle-stats/battle-stats.component";
import { ImmunityVulnerabilityStatsComponent } from "./immunity-vulnerability-stats/immunity-vulnerability-stats.component";
import { ProficiencyStatsComponent } from "./proficiency-stats/proficiency-stats.component";
import { TraitStatsComponent } from "./trait-stats/trait-stats.component";
import { SkillStatsComponent } from "./skill-stats/skill-stats.component";
import { ActionButtonComponent } from "./action-button/action-button.component";
import { StatsPanelComponent } from "./stats-panel/stats-panel.component";

@NgModule({
  declarations: [
    SkillStatsComponent,
    StatsComponent,
    CreatureStatsComponent,
    AbilityStatsComponent,
    BattleStatsComponent,
    ImmunityVulnerabilityStatsComponent,
    ProficiencyStatsComponent,
    TraitStatsComponent,
    ActionButtonComponent,
    StatsPanelComponent,
  ],
  exports: [
    StatsComponent,
    SkillStatsComponent,
    StatsComponent,
    CreatureStatsComponent,
    AbilityStatsComponent,
    BattleStatsComponent,
    ImmunityVulnerabilityStatsComponent,
    ProficiencyStatsComponent,
    TraitStatsComponent,
    ActionButtonComponent,
    StatsPanelComponent
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