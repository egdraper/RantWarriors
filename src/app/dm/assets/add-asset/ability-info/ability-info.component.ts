import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { Utilities } from "../utilities";
import { AssetService } from "../asset.service";

@Component({
  selector: "app-ability-info",
  templateUrl: "./ability-info.component.html",
  styleUrls: ["./ability-info.component.scss"]
})
export class AbilityInfoComponent {
  @Input() public creature: Creature;

  public onAbilityChange(value: number, ability: string): void {
    AssetService.updateAbility(this.creature, ability, value);
  }
}
