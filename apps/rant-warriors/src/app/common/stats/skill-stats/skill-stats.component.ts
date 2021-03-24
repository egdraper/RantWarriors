import { Component, Input, ViewChildren } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Dice } from "../../dice/dice.service";

import { ActionButtonComponent } from "../action-button/action-button.component";

@Component({
  selector: "app-skill-stats-score",
  templateUrl: "./skill-stats.component.html",
  styleUrls: ["./skill-stats.component.scss"]
})
export class SkillStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
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

  public refreshRolls(): void {
    this.actionButton.forEach(ab => ab.reset());
  }
}
