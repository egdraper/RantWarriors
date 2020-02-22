import { Component, EventEmitter, Output } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash";
import { creatures } from "../creature.db";
import { DbService } from "../dbService";
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

      // constructor(
    //   public firebase: AngularFireDatabase,
    //   private firestore: AngularFirestore
    // ) {
    //   this.firestore.collection("assets").add({what: "hohoho"});
    // }
  constructor(
    private dbService: DbService,
    private firestore: AngularFirestore
  ) {
    this.newCreature = new Creature();
  }

  public addCreature(): void {
    // add to db and clear creature info
    this.newCreature = new Creature();
  }

  public onSelect(selection: string): void {
    this.activeView = selection;
  }

  onCreatureAdded(): void {
    creatures.push(this.newCreature);
    const cleanCreature = Object.assign({}, this.newCreature);
    cleanCreature.abilities = Object.assign({}, this.newCreature.abilities);
    this.firestore.collection("creatures").doc(this.newCreature.name).set(this.newCreature);
    this.dbService.creatures.next(creatures);
    this.newAction = new Action();
    this.newCreature = new Creature();
  }
}
