import { Component, Input, ViewChildren } from "@angular/core";
import { Creature } from "src/app/dm/assets/creature.model";
import { Dice } from "src/app/dm/assets/dice/dice.service";
import { ActionButtonComponent } from "../action-button/action-button.component";

@Component({
  selector: "app-skill-stats-score",
  templateUrl: "./skill-stats.component.html",
  styleUrls: ["./skill-stats.component.scss"]
})
export class SkillStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
  @Input() public creature: Creature;

  public rollAbility(abilityModifier: number, creature: Creature): void {
    const dice = new Dice();

    dice.withAdvantage = this.creature.hasAdvantage;
    dice.withDisadvantage = this.creature.hasDisadvantage;
    const equation =
      abilityModifier >= 0
        ? `d20+${abilityModifier}`
        : `d20-${-1 * abilityModifier}`;
    const roll = dice.roll(equation);
    creature.abilityRoll = roll.modifiedRollValue;
  }

  public refreshRolls(): void {
    this.actionButton.forEach(ab => ab.reset());
  }
}
