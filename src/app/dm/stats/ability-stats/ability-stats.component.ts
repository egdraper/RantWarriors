import { Component, OnInit, Input } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-ability-stats",
  templateUrl: "./ability-stats.component.html",
  styleUrls: ["./ability-stats.component.scss"]
})
export class AbilityStatsComponent {
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

}
