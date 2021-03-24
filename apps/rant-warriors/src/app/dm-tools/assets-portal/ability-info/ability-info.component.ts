import { Component, Input } from "@angular/core";
import { Asset } from "../../../utils/asset";

@Component({
  selector: "app-ability-info",
  templateUrl: "./ability-info.component.html",
  styleUrls: ["./ability-info.component.scss"]
})
export class AbilityInfoComponent {
  @Input() public asset: Asset;

  public onAbilityChange(value: number, ability: string): void {
    this.asset.updateAbility(ability);
  }
}
