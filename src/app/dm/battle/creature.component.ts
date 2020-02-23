import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { Creature } from "../assets/creature.model";
import { Rating, RatingModel } from "../assets/creature.db";
import { Dice } from "../assets/dice/dice.service";
import { DbService } from "../assets/dbService";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.scss"]
})
export class CreatureComponent {
  public activeCreatures: Creature[] = [];
  public creatures: Creature[] = [];
  public creatureList: string[] = [];
  public challengeRatings = new Rating().getRatings(10);

  private selectedCreature: string;

  constructor(
    public dbService: DbService,
  ) {
    dbService.creatures.subscribe(creatureCollection => {
      this.creatures = creatureCollection;
      this.creatureList = creatureCollection.map(creature => creature.name);
    });
  }

  public onCreatureChange(creature: any): void {
    this.selectedCreature = creature.value;
  }

  public addCreature(creature: Creature): void {
    const chosenCreature = cloneDeep(
      this.creatures.find(npc => npc.name === this.selectedCreature)
    );
    chosenCreature.name = `${chosenCreature.name} ${this.activeCreatures
      .length + 1}`;
    this.activeCreatures.push(chosenCreature);
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
    this.activeCreatures = this.activeCreatures.filter((a, i) => i !== index);

    if (!this.activeCreatures) {
      this.activeCreatures = [];
    }
  }

  public onRatingChange(rating: RatingModel): void {
    const selectedChallengeRatings = this.challengeRatings.filter(
      cr => cr.selected
    );
    if (!selectedChallengeRatings || selectedChallengeRatings.length === 0) {
      this.creatureList = this.creatures.map(creature => creature.name);
      return;
    }

    const newCreatureList = this.creatures.filter(creature => {
      return !!selectedChallengeRatings.find(
        scr => scr.value === creature.challenge
      );
    });
    this.creatureList = newCreatureList.map(creature => creature.name);
  }

  public onRemove(newActiveCreatures: Creature[]): void {
    this.activeCreatures = newActiveCreatures;
  }
}
