import { Component, OnInit, Input, ViewChildren } from "@angular/core";
import { Creature } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { ActionButtonComponent } from "../action-button/action-button.component";

@Component({
  selector: "app-proficiency-stats",
  templateUrl: "./proficiency-stats.component.html",
  styleUrls: ["./proficiency-stats.component.scss"]
})
export class ProficiencyStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
  @Input() public creature: Creature;

  public savingThrow = 0;
  public proficiency = 0;

  public rollSavingThrow(abilityModifier: number): void {
    this.savingThrow = this.rollDice(abilityModifier);
  }

  public rollProficiency(abilityModifier: number): void {
    this.proficiency = this.rollDice(abilityModifier);
  }

  private rollDice(modifier: number): number {
    const dice = new Dice();
    dice.withAdvantage = this.creature.hasAdvantage;
    dice.withDisadvantage = this.creature.hasAdvantage;

    const equation =
      modifier >= 0
        ? `d20+${modifier}`
        : `d20-${-1 * modifier}`;
    const roll = dice.roll(equation);
    return roll.modifiedRollValue;
  }

  public refreshRolls(): void {
    this.actionButton.forEach(ab => ab.reset());
  }
}
