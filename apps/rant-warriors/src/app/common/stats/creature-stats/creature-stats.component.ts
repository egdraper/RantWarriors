import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Asset } from "../../../utils/asset";
import { Dice } from "../../dice/dice.service";

@Component({
  selector: "app-creature-stats",
  templateUrl: "./creature-stats.component.html",
  styleUrls: ["./creature-stats.component.scss"]
})
export class CreatureStatsComponent {
  @Output() damage = new EventEmitter<{creature, value: number}>();
  @Output() heal = new EventEmitter<{creature, value: number}>();
  @Input() asset: Asset;

  public tools = ["delete"];
  public shrink = false;
  public damageTaken = 0;

  private originalMaxHp;

  public generateRandomHp(): void {
    const dice = new Dice();
    const roll = dice.roll(this.asset.hitDice);
    this.asset.maxHitPoints = roll.modifiedRollValue;
    this.asset.currentHitPoints = roll.modifiedRollValue;
  }

  public takeDamage(): void {
    this.damage.emit({creature: this.asset, value: this.damageTaken});
  }

  public doHeal(): void {
    this.damage.emit({creature: this.asset, value: this.damageTaken});
  }

  public resetHp(): void {
    this.asset.currentHitPoints = this.asset.maxHitPoints;
  }

  public onMaxHitPointsIncrease(value: any): void {
    if (!this.originalMaxHp) {
      this.originalMaxHp = this.asset.maxHitPoints;
    }

    this.asset.hitDice = `${this.asset.hitDice}`;
    const numberOfRolls = this.asset.hitDice.match(/\d+(?=d)/g);
    const operator = this.asset.hitDice.match(/\+|-/g);
    const dice = this.asset.hitDice.match(/(?<=d)(\?*\d+)/g);
    const modifier = this.asset.hitDice.match(/(?<=\+|-)(\?*\d+)/g);

    let newModifier: number;
    if (operator && operator[0] === "+") {
      newModifier = Number(modifier) + value.amount;
    } else if (operator && operator[0] === "-" && value.amount === -1) {
      newModifier = (Number(modifier) + 1) * -1;
    } else if (operator && operator[0] === "-" && value.amount === 1) {
        newModifier = (Number(modifier) - 1) * -1;
    } else {
      newModifier = value.newValue - this.asset.maxHitPoints;
    }

    let newHitDice: string;
    if (newModifier < 0) {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}-${Math.abs(newModifier)}`;
    } else if ( newModifier === 0) {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}`;
    } else {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}+${newModifier}`;
    }

    if (this.asset.currentHitPoints > this.asset.maxHitPoints) {
      this.asset.currentHitPoints = this.asset.maxHitPoints;
    }

    this.asset.maxHitPoints = value.newValue;
    this.asset.hitDice = newHitDice;
  }
}
