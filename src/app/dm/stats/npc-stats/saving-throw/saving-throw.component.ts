import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "src/app/dm/assets/creature.model";
import { Dice } from "src/app/dm/assets/dice/dice.service";

@Component({
  selector: "app-saving-throw",
  templateUrl: "./saving-throw.component.html",
  styleUrls: ["./saving-throw.component.scss"]
})
export class SavingThrowComponent {
  @Input() public creature: Creature;
  @Input() public advantage = false;
  @Input() public disadvantage = false;

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
    dice.withAdvantage = this.advantage;
    dice.withDisadvantage = this.disadvantage;

    const equation =
      modifier >= 0
        ? `d20+${modifier}`
        : `d20-${-1 * modifier}`;
    const roll = dice.roll(equation);
    return roll.modifiedRollValue;
  }
}
