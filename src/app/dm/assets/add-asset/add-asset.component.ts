import { Component, EventEmitter, Output } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash";
import { DbService } from "../dbService";
import { DbSessionService } from "../dbSession";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "add-asset",
  styleUrls: ["./add-asset.component.scss"],
  templateUrl: "./add-asset.component.html"
})
export class AddAssetComponent {
  public newCreature = new Creature();
  public newAction = new Action();
  public activeView = "Creature";

  constructor(
    private dbSessionService: DbSessionService,
    private dbService: DbService) {
    this.newCreature = new Creature();
  }

  public addCreature(): void {
    // add to db and clear creature info
    this.newCreature = new Creature();
  }

  public onSelect(selection: string): void {
    this.activeView = selection;
  }

  public onCreatureAdded(type: string): void {
    this.dbService.addCreature(this.newCreature, type);
    this.newAction = new Action();
    this.newCreature = new Creature();
  }

  public onCreatureLoad(creatureName: string): void {
    this.newCreature = cloneDeep(
      this.dbSessionService.creatureList.find(
        creature => creature.name === creatureName
      )
    );

    this.newCreature.name = this.newCreature.name + " (Mod)";
  }
}
