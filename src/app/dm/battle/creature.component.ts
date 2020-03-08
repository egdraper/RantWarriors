import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { Creature } from "../assets/creature.model";
import { Rating, RatingModel } from "../assets/creature.db";
import { Dice } from "../assets/dice/dice.service";
import { DbService } from "../assets/dbService";
import { DbSessionService } from "../assets/dbSession";

@Component({
  selector: "creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.scss"]
})
export class CreatureComponent {
  public creatureSelectionList: string[] = [];
  public challengeRatings = new Rating().getRatings(10);

  private selectedCreature: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) {

    dbSessionService.initCreatureList();

    dbSessionService.creatures$.subscribe(creatureCollection => {
      this.creatureSelectionList = creatureCollection.map(
        creature => creature.name
      );
    });
  }

  public onCreatureChange(creature: any): void {
    this.selectedCreature = creature.value;
  }

  public addCreature(): void {
    const chosenCreature = cloneDeep(
      this.dbSessionService.creatureList.find(
        npc => npc.name === this.selectedCreature
      )
    );
    chosenCreature.name = `${chosenCreature.name} ${this.dbSessionService
      .activeCreatureList.length + 1}`;
    this.dbSessionService.add(chosenCreature, "creatures");
  }

  public onRemove(index: number): void {
    this.dbSessionService.remove(index, "creatures");
  }

  // public rollAbility(abilityModifier: number, creature: Creature): void {
  //   const dice = new Dice();
  //   const equation =
  //     abilityModifier >= 0
  //       ? `d20+${abilityModifier}`
  //       : `d20-${-1 * abilityModifier}`;
  //   const roll = dice.roll(equation);
  //   creature.abilityRoll = roll.modifiedRollValue;
  // }

  // public onRatingChange(rating: RatingModel): void {
  //   const selectedChallengeRatings = this.challengeRatings.filter(
  //     cr => cr.selected
  //   );
  //   if (!selectedChallengeRatings || selectedChallengeRatings.length === 0) {
  //     this.creatureList = this.creatures.map(creature => creature.name);
  //     return;
  //   }

  //   const newCreatureList = this.creatures.filter(creature => {
  //     return !!selectedChallengeRatings.find(
  //       scr => scr.value === creature.challenge
  //     );
  //   });
  //   this.creatureList = newCreatureList.map(creature => creature.name);
  // }
}
