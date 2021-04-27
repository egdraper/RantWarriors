import { Component, Input, ViewChildren } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Dice } from "../../dice/dice.service";
import { ActionButtonComponent } from "../action-button/action-button.component";

@Component({
  selector: "app-action-stats",
  templateUrl: "./action-stats.component.html",
  styleUrls: ["./action-stats.component.scss"]
})
export class ActionStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
  @Input() asset: Asset;
  @Input() selectedAsset: Asset;

  public tools = ["edit", "delete", "file_copy"];
  public shrink = false;
  public attack = 0;
  public damage = 0;

  public generateRandomHp(): void {
    const dice = new Dice();
    dice.withAdvantage = this.asset.hasAdvantage;
    dice.withDisadvantage = this.asset.hasDisadvantage;
    const roll = dice.roll(this.asset.hitDice);
    this.asset.maxHitPoints = roll.modifiedRollValue;
    this.asset.currentHitPoints = roll.modifiedRollValue;
  }

  public refreshAttack(): void {
    this.actionButton.forEach(ab => ab.reset());
  }
}
