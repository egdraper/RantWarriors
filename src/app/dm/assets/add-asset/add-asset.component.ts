import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash";
import { DbService } from "../dbService";
import { DbSessionService } from "../dbSession";
import { AngularFirestore } from "@angular/fire/firestore";

export enum View {
  Abilities = "Abilities",
  Attributes = "Attributes",
  Info = "Info",
}

@Component({
  selector: "add-asset",
  styleUrls: ["./add-asset.component.scss"],
  templateUrl: "./add-asset.component.html"
})
export class AddAssetComponent {
  @Input() public admin = false;
  public newCreature = new Creature();
  public newAction = new Action();
  public activeView = View.Attributes;

  constructor(
    private dbSessionService: DbSessionService,
    private dbService: DbService) {
    this.newCreature = new Creature();
  }

  public addCreature(): void {
    // add to db and clear creature info
    this.newCreature = new Creature();
  }

  public onSelect(selection: View): void {
    this.activeView = selection;
  }

  public onCreatureAdded(type: string): void {
    this.admin ? this.dbService.addAdminCreature(this.newCreature, type) : this.dbService.addCreature(this.newCreature, type);
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

  public onUpdate(type: string): void {
    this.admin ? this.dbService.updateAdminCreature(this.newCreature, type) : this.dbService.updateCreature(this.newCreature, type);
  }
}
