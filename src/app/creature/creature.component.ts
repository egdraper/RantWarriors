import { Component } from "@angular/core";
import { cloneDeep, remove } from "lodash";
import { Creature } from "./creature.model";
import { creatures } from "./creature.db";
import { Dice } from "./dice.service";

@Component({
    selector: "creature",
    templateUrl: "./creature.component.html",
    styleUrls: ["./creature.component.scss"]
  })
  export class CreatureComponent {
    public creatures: Creature[] = [];
    public creatureList: string[] = [];
    public activeCreatures: Creature[] = [];

    private selectedCreature: string;

    constructor() {
        this.creatures = creatures;
        this.creatureList = this.creatures.map(creature => creature.name);
    }

    public onCreatureChange(creature: any): void {
      this.selectedCreature = creature.value;
    }

    public addCreature(): void {
      this.activeCreatures.push(cloneDeep(this.creatures.find(creature => creature.name === this.selectedCreature)));
    }

    public removeCreature(creature: Creature): void {
      remove(this.activeCreatures, activeCreature => activeCreature.name === creature.name);
    }




    public rollAbility(abilityModifier: number, creature: Creature): void {
      const dice = new Dice();
      const equation = abilityModifier >= 0 ? `d20+${abilityModifier}` : `d20-${-1 * abilityModifier}`
      const roll = dice.roll(equation);
      creature.abilityRoll = roll.modifiedRollValue;
    }
  }
