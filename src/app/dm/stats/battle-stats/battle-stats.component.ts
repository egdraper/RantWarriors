import { Component, Input, ContentChildren, ViewChildren } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { ActionButtonComponent } from "../action-button/action-button.component";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-battle-stats",
  templateUrl: "./battle-stats.component.html",
  styleUrls: ["./battle-stats.component.scss"]
})
export class BattleStatsComponent {
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
