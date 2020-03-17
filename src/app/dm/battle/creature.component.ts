import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { Rating } from "../assets/creature.db";
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
}
