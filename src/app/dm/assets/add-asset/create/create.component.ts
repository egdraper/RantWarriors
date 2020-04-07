import { Component, Output, EventEmitter } from "@angular/core";
import { DbSessionService } from "../../dbSession";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent {
  @Output() public selected = new EventEmitter();
  @Output() public assetSelected = new EventEmitter();
  constructor(
    public dbSession: DbSessionService
  ) { }

  public onTypeSelected(type: any): void {
    this.selected.emit(type.value);
  }

  public onAssetChange(asset: any): void {
    this.assetSelected.emit(asset.value);
  }
}
