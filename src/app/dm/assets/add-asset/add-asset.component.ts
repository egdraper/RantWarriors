import { Component, Input } from "@angular/core";
import { Action } from "../creature.model";
import { cloneDeep } from "lodash";
import { DbService } from "../dbService";
import { DbSessionService } from "../dbSession";
import { Asset } from "./asset";

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
  public newAsset = new Asset();
  public newAction = new Action();
  public activeView = 0;
  public nextText = "Next";

  constructor(
    private dbSessionService: DbSessionService,
    private dbService: DbService) {
    this.newAsset = new Asset();
  }

  public onSelect(selection: string): void {
    this.newAsset = new Asset();
    this.newAsset.editing = true;
    this.newAsset.assetType = selection;
    this.activeView = 1;
  }

  public onCreatureAdded(type: string): void {
    delete this.newAsset.editing;
    this.admin ? this.dbService.addAdminCreature(this.newAsset, type) : this.dbService.addCreature(this.newAsset, type);
    this.newAction = new Action();
    this.newAsset = new Asset();
  }

  public onCreatureLoad(creatureName: string): void {
    this.newAsset = cloneDeep(
      this.dbSessionService.creatureList.find(
        asset => asset.name === creatureName
      )
    );
    this.newAsset.editing = true;
    this.newAsset.name = this.newAsset.name + " (Mod)";
    this.activeView = 1;
  }

  public onUpdate(type: string): void {
    this.admin ? this.dbService.updateAdminCreature(this.newAsset, type) : this.dbService.updateCreature(this.newAsset, type);
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
      this.dbService.addAdminCreature(this.newAsset, type);
    } else {
      this.dbService.addCreature(this.newAsset, type);
    }
  }

  public setNextText(): void {
    if (this.activeView === 4 && !this.newAsset.multiAttack) {
      this.nextText = "Skip";
      return;
    }

    this.nextText = "Next";

  }
}
