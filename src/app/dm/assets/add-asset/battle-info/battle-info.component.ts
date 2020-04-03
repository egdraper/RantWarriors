import { Component, OnInit, Input } from "@angular/core";
import { Creature, Action } from "../../creature.model";
import { cloneDeep } from "lodash";
import { Constants } from "../constants";
import { AssetService } from "../asset.service";
import { AssertNotNull } from "@angular/compiler";

@Component({
  selector: "app-battle-info",
  templateUrl: "./battle-info.component.html",
  styleUrls: ["./battle-info.component.scss"]
})
export class BattleInfoComponent {
  @Input() public creature: Creature;
  public action = new Action();
  public hasBonusDamage = false;

  public dice = Constants.dice;
  public damageTypes = Constants.damageTypes;
  public abilities = Constants.abilities;

  public addAttackAction(): void {
    if (!this.creature.actions) {
      this.creature.actions = [];
    }

    this.creature.actions.push(cloneDeep(this.action));
    this.action = new Action();
    this.hasBonusDamage = false;
  }

  public attackUses(abilityShorthand: string): void {
    this.action.attackUses = Constants.getAbilityByShorthand(abilityShorthand);
    this.action.attackModifier = this.creature.proficiency + Constants.getAbilityModifier(this.action.attackUses);
    AssetService.updateDamageDice(this.creature, this.action),
    AssetService.updateAttackDice(this.creature, this.action)
  }

  public onDamageDiceChange(): void {
    AssetService.updateDamageDice(this.creature, this.action)
    // const ability = this.action.attackUses;
    // const modifier = Constants.getAbilityModifier(this.creature.abilities[ability.toLowerCase()]);
    // const attackModifier = modifier ? `+${modifier}` : "";
    // this.action.dice = `${this.action.numberOfRoll}${this.action.numberOfDiceSides}${attackModifier}`;
  }
}
