import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Npc } from "../../assets/npc.model";
import { Dice } from "../../assets/dice/dice.service";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-creature-stats",
  templateUrl: "./creature-stats.component.html",
  styleUrls: ["./creature-stats.component.scss"]
})
export class CreatureStatsComponent {
  @Output() damage = new EventEmitter<{creature, value: number}>();
  @Output() heal = new EventEmitter<{creature, value: number}>();
  @Input() creature: Creature;
  public shrink = false;
  public damageTaken = 0;

  private originalMaxHp;

  public generateRandomHp(): void {
    const dice = new Dice();
    const roll = dice.roll(this.creature.hitDice);
    this.creature.maxHitPoints = roll.modifiedRollValue;
    this.creature.currentHitPoints = roll.modifiedRollValue;
  }

  public takeDamage(): void {
    this.damage.emit({creature: this.creature, value: this.damageTaken});
  }

  public doHeal(): void {
    this.damage.emit({creature: this.creature, value: this.damageTaken});
  }

  public resetHp(): void {
    this.creature.currentHitPoints = this.creature.maxHitPoints;
  }

  public onMaxHitPointsIncrease(value: any): void {
    if (!this.originalMaxHp) {
      this.originalMaxHp = this.creature.maxHitPoints;
    }

    this.creature.hitDice = `${this.creature.hitDice}`;
    const numberOfRolls = this.creature.hitDice.match(/\d+(?=d)/g);
    const operator = this.creature.hitDice.match(/\+|-/g);
    const dice = this.creature.hitDice.match(/(?<=d)(\?*\d+)/g);
    const modifier = this.creature.hitDice.match(/(?<=\+|-)(\?*\d+)/g);

    let newModifier: number;
    if (operator && operator[0] === "+") {
      newModifier = Number(modifier) + value.amount;
    } else if (operator && operator[0] === "-" && value.amount === -1) {
      newModifier = (Number(modifier) + 1) * -1;
    } else if (operator && operator[0] === "-" && value.amount === 1) {
        newModifier = (Number(modifier) - 1) * -1;
    } else {
      newModifier = value.newValue - this.creature.maxHitPoints;
    }

    let newHitDice: string;
    if (newModifier < 0) {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}-${Math.abs(newModifier)}`;
    } else if ( newModifier === 0) {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}`;
    } else {
      newHitDice = `${numberOfRolls[0]}d${dice[0]}+${newModifier}`;
    }

    if (this.creature.currentHitPoints > this.creature.maxHitPoints) {
      this.creature.currentHitPoints = this.creature.maxHitPoints;
    }

    this.creature.maxHitPoints = value.newValue;
    this.creature.hitDice = newHitDice;
  }
}
