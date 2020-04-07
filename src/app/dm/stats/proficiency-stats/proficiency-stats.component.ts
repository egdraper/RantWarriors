import { Component, Input, ViewChildren } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { ActionButtonComponent } from "../action-button/action-button.component";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-proficiency-stats",
  templateUrl: "./proficiency-stats.component.html",
  styleUrls: ["./proficiency-stats.component.scss"]
})
export class ProficiencyStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
  @Input() public asset: Asset;

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
    dice.withAdvantage = this.asset.hasAdvantage;
    dice.withDisadvantage = this.asset.hasAdvantage;

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
