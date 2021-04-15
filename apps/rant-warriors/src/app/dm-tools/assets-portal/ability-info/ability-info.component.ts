import { Component, Input } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Constants } from "../../../utils/constants";

@Component({
  selector: "app-ability-info",
  templateUrl: "./ability-info.component.html",
  styleUrls: ["./ability-info.component.scss"]
})
export class AbilityInfoComponent {
  @Input() public asset: Asset;
  public proficiencyDisabled = true

  public onAbilityChange(value: number, ability: string): void {
    this.asset.updateAbility(ability);
  }

  public onProficiencyEditClicked(): void {
    this.proficiencyDisabled = !this.proficiencyDisabled

    if(this.proficiencyDisabled) {
      this.asset.proficiency = Constants.getProficiency(this.asset.challenge);
    }
  }
}
