import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreatureInfoComponent } from "./creature-info/creature-info.component";
import { BattleInfoComponent } from "./battle-info/battle-info.component";
import { TraitInfoComponent } from "./trait-info/trait-info.component";
import { ProficiencyInfoComponent } from "./proficiency-info/proficiency-info.component";
import { AbilityInfoComponent } from "./ability-info/ability-info.component";
import { AddAssetComponent } from "./add-asset.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DemoMaterialModule } from "../../utils/material.module";
import { ImmunityVulnerabilityComponent } from "./immunity-vulnerability/immunity-vulnerability.component";
import { StatsModule } from "../../common/stats/stats.module";
import { LegendaryActionsComponent } from "./legendary-actions/legendary-actions.component";
import { DBModule } from "../../utils/db.module";
import { AttributesComponent } from "./attributes/attributes.component";
import { SubmitComponent } from "./submit/submit.component";
import { CreateComponent } from "./create/create.component";
import { MultiAttackComponent } from "./multi-attack/multi-attack.component";

@NgModule({
  declarations: [
    CreatureInfoComponent,
    BattleInfoComponent,
    TraitInfoComponent,
    ProficiencyInfoComponent,
    AbilityInfoComponent,
    AddAssetComponent,
    ImmunityVulnerabilityComponent,
    LegendaryActionsComponent,
    AttributesComponent,
    SubmitComponent,
    CreateComponent,
    MultiAttackComponent,
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
