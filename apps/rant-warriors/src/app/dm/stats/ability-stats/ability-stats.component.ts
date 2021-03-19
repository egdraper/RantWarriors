import { Component, OnInit, Input } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-ability-stats",
  templateUrl: "./ability-stats.component.html",
  styleUrls: ["./ability-stats.component.scss"]
})
export class AbilityStatsComponent {
  @Input() public asset: Asset;

  public rollAbility(abilityModifier: number, asset: Asset): void {
    const dice = new Dice();
    dice.withAdvantage = this.asset.hasAdvantage;
    dice.withDisadvantage = this.asset.hasDisadvantage;
    const equation =
      abilityModifier >= 0
        ? `d20+${abilityModifier}`
        : `d20-${-1 * abilityModifier}`;
    const roll = dice.roll(equation);
    asset.abilityRoll = roll.modifiedRollValue;
  }

}
