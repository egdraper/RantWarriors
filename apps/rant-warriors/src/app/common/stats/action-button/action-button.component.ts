import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Roll } from "../../dice/dice.model";
import { Dice } from "../../dice/dice.service";

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
  @Input() public minimumForSuccess;
  @Input() public set asterisk(value) { this._asterisk = Array(value).fill(value); }
  
  public allRolls
  public get asterisk() { return this._asterisk; }

  @Output() public result = new EventEmitter();

  public rollResult: number;
  public hitMessage: string;
  public critical = "none";

  _asterisk = []

  public roll(): void {
    const dice = new Dice();
    dice.withAdvantage = this.advantage;
    dice.withDisadvantage = this.disadvantage;

    const roll = dice.roll(this.diceEquation);
    this.updateHitStatus(roll);
    this.rollResult = roll.modifiedRollValue;
    this.result.emit(this.rollResult);
    this.allRolls = `${roll.rollHistory.join(" + ")} + (${roll.modifier})`
    
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
