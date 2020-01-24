import { Component, Input, Output, EventEmitter } from "@angular/core";
import { creatures } from "../../assets/creature.db";
import { Creature } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { cloneDeep } from "lodash";

@Component({
    selector: "creature-stats",
    templateUrl: "./creature-stats.component.html",
    styleUrls: ["./creature-stats.component.scss"]
  })
  export class CreatureStatsComponent {
    public activeCreatures: Creature[] = [];
    public creatures: Creature[] = [];
    public creatureList: string[] = [];
    public dead = "X";

    private selectedCreature: string;

    constructor() {
        this.creatures = creatures;
        this.creatureList = this.creatures.map(creature => creature.name);
    }

    public onCreatureChange(creature: any): void {
        this.selectedCreature = creature.value;
      }

    public addCreature(creature: Creature): void {
        const chosenCreature = cloneDeep(this.creatures.find(npc => npc.name === this.selectedCreature))
        chosenCreature.name = `${chosenCreature.name} ${this.activeCreatures.length + 1}`;
        this.activeCreatures.push(chosenCreature);
      }

    public rollAbility(abilityModifier: number, creature: Creature): void {
        const dice = new Dice();
        const equation = abilityModifier >= 0 ? `d20+${abilityModifier}` : `d20-${-1 * abilityModifier}`
        const roll = dice.roll(equation);
        creature.abilityRoll = roll.modifiedRollValue;
      }

      public remove(index: number): void {
          this.activeCreatures = this.activeCreatures.filter((a, i) => i !== index);

          if (!this.activeCreatures) {
              this.activeCreatures = []
          }
      }
  }
