import { Component, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { AssetService } from "../asset.service";

@Component({
  selector: "app-proficiency-info",
  templateUrl: "./proficiency-info.component.html",
  styleUrls: ["./proficiency-info.component.scss"]
})
export class ProficiencyInfoComponent  {
  @Input() public creature: Creature;
  public skills = Constants.skills;
  public newSavingThrow = "";
  public newProficiency = "";

  public addNewSavingThrow(): void {
    AssetService.addSavingThrows(this.creature, this.newSavingThrow)
    this.newSavingThrow = "";
  }
  public addNewProficiency(): void {

  }
}
