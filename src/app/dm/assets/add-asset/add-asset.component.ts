import { Component } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash";

@Component({
  selector: "add-asset",
  styleUrls: ["./add-asset.component.scss"],
  templateUrl: "./add-asset.component.html"
})
export class AddAssetComponent {
  public newCreature = new Creature();
  public newAction = new Action();
  public activeView = "Creature";

  public newDebuff = "";


  constructor() {
    this.newCreature = new Creature();
  }

  public addCreature(): void {
    // add to db and clear creature info
    this.newCreature = new Creature();
  }

  public onSelect(selection: string): void {
    this.activeView = selection;
  }



}
