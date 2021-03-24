import { Component, Input } from "@angular/core";
import { cloneDeep } from "lodash";
import { Subscription } from "rxjs";
import { Asset } from "../../utils/asset";
import { Action } from "../../utils/creature.model";
import { DbService } from "../../utils/dbService";
import { DbSessionService } from "../../utils/dbSession";

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
  @Input() public globalAsset: boolean;
  public newAsset = new Asset();
  public newAction = new Action();
  public actionType: "duplicate" | "edit" | "create";
  public activeView = 0;
  public nextText = "Next";

  private subscription: Subscription[] = [];

  constructor(
    private dbSessionService: DbSessionService,
    private dbService: DbService) {
    this.loadPendingAsset();
  }

  public async loadPendingAsset(): Promise<void> {
    this.newAsset = await this.dbService.getPendingCreatures();
  }

  public onCreateNew(selection: string, action: any): void {
    this.actionType = action;
    this.unsubscribeFromAll();
    this.newAsset = new Asset();
    this.newAsset.editing = true;
    this.newAsset.assetType = selection;
    this.activeView = 1;
    this.dbService.updatePendingCreature(this.newAsset);
    this.subscribeToEditablePages();
  }

  public onCreatureLoad(creatureName: string, action: any): void {
    this.actionType = action;
    this.unsubscribeFromAll();
    this.newAsset = new Asset(cloneDeep(
      this.dbSessionService.creatureList.find(
        asset => asset.name === creatureName
      )
    ));
    this.newAsset.editing = true;
    this.newAsset.name = action === "duplicate" ? this.newAsset.name + " (Mod)" : this.newAsset.name;
    this.activeView = 1;
    this.dbService.updatePendingCreature(this.newAsset);
    this.subscribeToEditablePages();
  }

  public onUpdate(type: string): void {
    this.globalAsset ? this.dbService.updateGlobalAsset(this.newAsset, type) : this.dbService.updateAsset(this.newAsset, type);
  }

  public onPrevious(): void {
    this.activeView--;
    this.setNextText();
    this.dbService.updatePendingCreature(this.newAsset);
  }

  public onNext(): void {
    this.activeView++;
    this.setNextText();
    this.dbService.updatePendingCreature(this.newAsset);
  }

  public onSubmit(type: string): void {
    if (this.globalAsset) {
      this.dbService.addGlobalCreature(this.newAsset, type);
    } else {
      this.dbService.addCreature(this.newAsset, type);
    }
    this.newAsset = new Asset();
    this.dbService.updatePendingCreature(this.newAsset);
    this.activeView = 0;
  }

  public setNextText(): void {
    if (this.activeView === 4 && !this.newAsset.multiAttack) {
      this.nextText = "Skip";
      return;
    }

    this.nextText = "Next";
  }

  private subscribeToEditablePages(): void {
    this.subscription.push(this.newAsset.traitChange.subscribe(t => {
      if (t) { this.activeView = 8; }
    }));

    this.subscription.push(this.newAsset.legendaryActionChange.subscribe(l => {
      if (l) { this.activeView = 9; }
    }));

    this.subscription.push(this.newAsset.actionChange.subscribe(a => {
      if (a) { this.activeView = 5; }
    }));
  }

  private unsubscribeFromAll(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
