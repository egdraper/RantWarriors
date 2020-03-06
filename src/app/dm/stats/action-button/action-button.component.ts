import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { RouteConfigLoadEnd } from "@angular/router";
import { Roll } from "../../assets/dice/dice.model";

@Component({
  selector: "app-action-button",
  templateUrl: "./action-button.component.html",
  styleUrls: ["./action-button.component.scss"]
})
export class ActionButtonComponent {
  @Input() public label = "Hit";
  @Input() public diceEquation = "d20";
  @Input() public advantage = false;
  @Input() public disadvantage = false;
  @Input() public asterisk = false;
  @Input() public minimumForSuccess;
  @Output() public result = new EventEmitter();

  public rollResult: number;
  public hitMessage: string;
  public critical = "none";

  public roll(): void {
    const dice = new Dice();
    dice.withAdvantage = this.advantage;
    dice.withDisadvantage = this.disadvantage;

    const roll = dice.roll(this.diceEquation);
    this.updateHitStatus(roll);
    this.rollResult = roll.modifiedRollValue;
    this.result.emit(this.rollResult);

  }

  public updateHitStatus(roll: Roll): void {
    this.critical = roll.criticalFail ? "fail" : roll.criticalHit ? "hit" : "none";

    if (!this.minimumForSuccess) {
      return;
    }

    if (this.minimumForSuccess && roll.modifiedRollValue < this.minimumForSuccess && this.critical !== "fail") {
      this.critical = "miss";
    }

    if (roll.criticalFail) {
      this.hitMessage = "Crit Fail";
      return;
    }

    if (roll.criticalHit) {
      this.hitMessage = "Crit Hit";
      return;
    }

    if (roll.modifiedRollValue >= this.minimumForSuccess) {
      this.hitMessage = "Hit";
      return;
    }

    this.hitMessage = "Miss";

  }

  public reset(): void {
    this.rollResult = undefined;
    this.critical = "none";
    this.hitMessage = "";
  }
}
