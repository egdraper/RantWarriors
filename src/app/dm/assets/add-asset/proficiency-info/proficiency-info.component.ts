import { Component, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";

@Component({
  selector: "app-proficiency-info",
  templateUrl: "./proficiency-info.component.html",
  styleUrls: ["./proficiency-info.component.scss"]
})
export class ProficiencyInfoComponent  {
  @Input() public creature: Creature;
  public skills = Constants.skills;
  public newSavingThrow = "";
  public newSavingThrowValue = 0;
  public newProficiency = "";
  public newProficiencyValue = 0;

  public addNewSavingThrow(): void {
    this.creature.savingThrows.push({
      value: this.newSavingThrowValue,
      ability: this.newSavingThrow
    });
  }
  public addNewProficiency(): void {
    this.creature.skillProficiencies.push({
      value: this.newProficiencyValue,
      ability: this.newProficiency
    });
  }
}
