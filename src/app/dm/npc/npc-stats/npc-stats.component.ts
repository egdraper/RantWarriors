import { Component } from "@angular/core";
import { Creature } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";
import { npcs } from "../../assets/npc.db";

import { cloneDeep } from "lodash";

@Component({
  selector: "npc-stats",
  templateUrl: "./npc-stats.component.html",
  styleUrls: ["./npc-stats.component.scss"]
})
export class NpmStatsComponent {
  public activeNpcs: Npc[] = [];
  public npcs: Npc[] = [];
  public npcList: string[] = [];
  public dead = "X";

  private selectedNpc: string;

  constructor() {
    this.npcs = npcs;
    this.npcList = this.npcs.map(creature => creature.name);
  }

  public onNpcChange(creature: any): void {
    this.selectedNpc = creature.value;
  }

  public rollAbility(abilityModifier: number, creature: Creature): void {
    const dice = new Dice();
    const equation =
      abilityModifier >= 0
        ? `d20+${abilityModifier}`
        : `d20-${-1 * abilityModifier}`;
    const roll = dice.roll(equation);
    creature.abilityRoll = roll.modifiedRollValue;
  }

  public remove(index: number): void {
    this.activeNpcs = this.activeNpcs.filter((a, i) => i !== index);

    if (!this.activeNpcs) {
      this.activeNpcs = [];
    }
  }

  public addNpc(): void {
    this.activeNpcs.push(
      cloneDeep(this.npcs.find(npc => npc.name === this.selectedNpc))
    );
  }
}
