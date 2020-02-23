import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { RouteConfigLoadEnd } from "@angular/router";

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
  public critical = "none";

  public roll(): void {
    const dice = new Dice();
    dice.withAdvantage = this.advantage;
    dice.withDisadvantage = this.disadvantage;

    const roll = dice.roll(this.diceEquation);
    this.critical = roll.criticalFail ? "fail" : roll.criticalHit ? "hit" : "none";
    this.rollResult = roll.modifiedRollValue;
    this.result.emit(this.rollResult);

    if (this.minimumForSuccess && roll.modifiedRollValue < this.minimumForSuccess && this.critical !== "fail") {
      this.critical = "miss";
    }
  }

  public reset(): void {
    this.rollResult = undefined;
    this.critical = "none";
  }
}
