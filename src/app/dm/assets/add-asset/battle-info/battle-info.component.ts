import { Component, Input } from "@angular/core";
import { cloneDeep } from "lodash";
import { Constants } from "../constants";
import { Asset } from "../asset";
import { Action } from "../../creature.model";

@Component({
  selector: "app-battle-info",
  templateUrl: "./battle-info.component.html",
  styleUrls: ["./battle-info.component.scss"]
})
export class BattleInfoComponent {
  @Input() public asset: Asset;
  public action = new Action();
  public hasBonusDamage = false;

  public dice = Constants.dice;
  public damageTypes = Constants.damageTypes;
  public abilities = Constants.abilities;

  public addAttackAction(): void {
    if (!this.asset.actions) {
      this.asset.actions = [];
    }

    this.asset.actions.push(cloneDeep(this.action));
    this.action = new Action();
    this.hasBonusDamage = false;
  }

  public attackUses(ability: string): void {
    this.action.attackUses = ability;
    this.action.attackModifier = this.asset.proficiency + Constants.getAbilityModifier(this.action.attackUses);
    this.asset.updateDamageDice(this.action);
    this.asset.updateAttackDice(this.action);
  }

  public onDamageDiceChange(): void {
    this.asset.updateDamageDice(this.action);
  }
}
