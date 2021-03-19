import { Component, Output, EventEmitter, Input } from "@angular/core";
import { DbSessionService } from "../../dbSession";
import { Asset } from "../asset";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent {
  @Input() public globalAsset = false;
  @Output() public createNewSelected = new EventEmitter();
  @Output() public duplicateSelected = new EventEmitter();
  @Output() public editSelected = new EventEmitter();

  public editableAssets: Asset[] = []

  constructor(
    public dbSession: DbSessionService
  ) { }

  public ngOnInit(): void {
    this.dbSession.creatures$.subscribe(creatures => {
      if (creatures.length === 0) { return; }
      if ( this. globalAsset ) {
        this.editableAssets = this.dbSession.creatureList.filter(asset => asset.globalAsset);
      } else {
        this.editableAssets = this.dbSession.creatureList.filter(asset => !asset.globalAsset);
      }
    });
  }

  public onCreateNew(type: any): void {
    this.createNewSelected.emit(type.value);
  }

  public onAssetDuplicate(type: any): void {
    this.duplicateSelected.emit(type.value);
  }

  public onAssetEdit(asset: any): void {
    this.editSelected.emit(asset.value);
  }

}
