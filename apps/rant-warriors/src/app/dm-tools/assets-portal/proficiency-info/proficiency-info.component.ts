import { Component, Input } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Constants } from "../../../utils/constants";


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
  public newExpertise = "";

  public addNewSavingThrow(): void {
    this.asset.addSavingThrows(this.newSavingThrow);
    this.newSavingThrow = "";
  }

  public addNewProficiency(): void {
    this.asset.addSkillProficiency(this.newProficiency);
    this.newProficiency = "";
  }

  public addNewExpertise(): void {
    this.asset.addSkillExpertise(this.newExpertise);
    this.newProficiency = "";
  }
}
