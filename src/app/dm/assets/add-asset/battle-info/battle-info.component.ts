import { Component, OnInit, Input } from "@angular/core";
import { Creature, Action } from "../../creature.model";
import { cloneDeep } from "lodash";
import { Constants } from "../constants";

@Component({
  selector: "app-battle-info",
  templateUrl: "./battle-info.component.html",
  styleUrls: ["./battle-info.component.scss"]
})
export class BattleInfoComponent {
  @Input() public creature: Creature;
  public action = new Action();
  public damageTypes = Constants.damageTypes;

  public addAttackAction(): void {
    if (!this.creature.actions) {
      this.creature.actions = [];
    }

    this.creature.actions.push(cloneDeep(this.action));
    this.action = new Action();
  }
}
