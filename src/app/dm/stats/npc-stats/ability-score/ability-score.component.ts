import { Component, Input } from "@angular/core";
import { Creature } from "src/app/dm/assets/creature.model";
import { Dice } from "src/app/dm/assets/dice/dice.service";

@Component({
  selector: "app-ability-score",
  templateUrl: "./ability-score.component.html",
  styleUrls: ["./ability-score.component.scss"]
})
export class AbilityScoreComponent {
  @Input() public activeCreature: Creature;
  @Input() public advantage = false;
  @Input() public disadvantage = false;

  public rollAbility(abilityModifier: number, creature: Creature): void {
    const dice = new Dice();
    debugger
    dice.withAdvantage = this.advantage;
    dice.withDisadvantage = this.disadvantage;
    const equation =
      abilityModifier >= 0
        ? `d20+${abilityModifier}`
        : `d20-${-1 * abilityModifier}`;
    const roll = dice.roll(equation);
    creature.abilityRoll = roll.modifiedRollValue;
  }
}
