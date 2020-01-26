import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Creature } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";
import { npcs } from "../../assets/npc.db";

import { cloneDeep } from "lodash";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Input() public activeCreatures: Creature[] = [];
  @Output() public remove = new EventEmitter<Creature[]>();

  public dead = "X";

  public rollAbility(abilityModifier: number, creature: Creature): void {
    const dice = new Dice();
    const equation =
      abilityModifier >= 0
        ? `d20+${abilityModifier}`
        : `d20-${-1 * abilityModifier}`;
    const roll = dice.roll(equation);
    creature.abilityRoll = roll.modifiedRollValue;
  }

  public removeCreature(index: number): void {
    this.activeCreatures = this.activeCreatures.filter((a, i) => i !== index);

    if (!this.activeCreatures) {
      this.activeCreatures = [];
    }

    return this.remove.emit(this.activeCreatures);
  }
}
