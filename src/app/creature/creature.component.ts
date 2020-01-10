import { Component } from "@angular/core";
import { cloneDeep, remove } from "lodash";
import { CreatureDB, Creature } from "./creature.db";

@Component({
    selector: 'creature',
    templateUrl: "./creature.component.html",
    styleUrls: ["./creature.component.scss"]
  })
  export class CreatureComponent {
    public creatures: Creature[] = [];
    public creatureList: string[] = [];
    public activeCreatures: Creature[] = [];

    private selectedCreature: string;

    constructor() {
        this.creatures = CreatureDB.creatures;
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

    public takeDamage(creature: Creature): void {
      if (!creature.lastDamageTaken || isNaN(Number(creature.lastDamageTaken))) {
        return;
      }

      creature.currentHitPoints -= Number(creature.lastDamageTaken);

      if (creature.currentHitPoints < 0) {
        creature.currentHitPoints = 0;
      }
    }
  }
