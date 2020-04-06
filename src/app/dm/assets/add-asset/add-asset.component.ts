import { Component, EventEmitter, Output, Input } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash";
import { DbService } from "../dbService";
import { DbSessionService } from "../dbSession";
import { AngularFirestore } from "@angular/fire/firestore";

export enum View {
  Info,
  Abilities,
  Attributes,
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
  public activeView = 0;
  public nextText = "Next";

  constructor(
    private dbSessionService: DbSessionService,
    private dbService: DbService) {
    this.newCreature = new Creature();
  }

  public onSelect(selection: string): void {
    this.newCreature = new Creature();
    this.newCreature.editing = true;
    this.newCreature.assetType = selection;
    this.activeView = 1;
  }

  public onCreatureAdded(type: string): void {
    delete this.newCreature.editing;
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
    this.newCreature.editing = true;
    this.newCreature.name = this.newCreature.name + " (Mod)";
    this.activeView = 1;
  }

  public onUpdate(type: string): void {
    this.admin ? this.dbService.updateAdminCreature(this.newCreature, type) : this.dbService.updateCreature(this.newCreature, type);
  }

  public onPrevious(): void {
    this.activeView--;
    this.setNextText();
  }

  public onNext(): void {
    this.activeView++;
    this.setNextText();
  }

  public onSubmit(type: string): void {
    if (this.admin) {
      this.dbService.addAdminCreature(this.newCreature, type);
    } else {
      this.dbService.addCreature(this.newCreature, type);
    }
  }

  public setNextText(): void {
    if (this.activeView === 4 && !this.newCreature.multiAttack) {
      this.nextText = "Skip";
      return;
    }

    this.nextText = "Next"

  }
}
