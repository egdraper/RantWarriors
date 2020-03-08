import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreatureInfoComponent } from "./creature-info/creature-info.component";
import { BattleInfoComponent } from "./battle-info/battle-info.component";
import { TraitInfoComponent } from "./trait-info/trait-info.component";
import { ProficiencyInfoComponent } from "./proficiency-info/proficiency-info.component";
import { AbilityInfoComponent } from "./ability-info/ability-info.component";
import { AddAssetComponent } from "./add-asset.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../../material.module";
import { MatNativeDateModule } from "@angular/material/core";
import { ImmunityVulnerabilityComponent } from "./immunity-vulnerability/immunity-vulnerability.component";
import { AssetNavComponent } from "./asset-nav/asset-nav.component";
import { StatsModule } from "../../stats/stats.module";
import { LegendaryActionsComponent } from './legendary-actions/legendary-actions.component';
import { DBModule } from "../db.module";

@NgModule({
  declarations: [
    CreatureInfoComponent,
    BattleInfoComponent,
    TraitInfoComponent,
    ProficiencyInfoComponent,
    AbilityInfoComponent,
    AddAssetComponent,
    ImmunityVulnerabilityComponent,
    AssetNavComponent,
    LegendaryActionsComponent,
  ],
  exports: [
    AddAssetComponent,
  ],
  imports: [
    DBModule,
    StatsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ]
})
export class AddAssetModule {}
