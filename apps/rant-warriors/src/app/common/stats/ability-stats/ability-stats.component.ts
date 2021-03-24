import { Component, Input } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Dice } from "../../dice/dice.service";

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
