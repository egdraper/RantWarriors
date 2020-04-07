import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { DbService } from "../assets/dbService";
import { DbSessionService } from "../assets/dbSession";
import { Constants } from "../assets/add-asset/constants";

@Component({
  selector: "creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.scss"]
})
export class CreatureComponent {
  public challengeRatings = Constants.getRatings(10);

  private selectedCreature: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) {
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
