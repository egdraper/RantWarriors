import { Component, Input } from "@angular/core";
import { Constants } from "../constants";
import { Asset } from "../asset";

@Component({
  selector: "app-proficiency-info",
  templateUrl: "./proficiency-info.component.html",
  styleUrls: ["./proficiency-info.component.scss"]
})
export class ProficiencyInfoComponent  {
  @Input() public asset: Asset;
  public skills = Constants.skills;
  public newSavingThrow = "";
  public newProficiency = "";

  public addNewSavingThrow(): void {
    this.asset.addSavingThrows(this.newSavingThrow);
    this.newSavingThrow = "";
  }
  public addNewProficiency(): void {
    this.asset.addSkillProficiency(this.newProficiency);
    this.newProficiency = "";
  }
}
