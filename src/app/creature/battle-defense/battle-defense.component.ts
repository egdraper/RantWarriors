import { Component, Input } from "@angular/core";
import { Creature } from "../creature.model";
import { Dice } from "../dice.service";


@Component({
    selector: "battle-defense",
    templateUrl: "./battle-defense.component.html",
    styleUrls: ["./battle-defense.component.scss"]
  })
  export class BattleDefenseComponent {
    @Input() activeCreature: Creature;
    public shrink = false;

    public generateRandomHp(): void {
      const dice = new Dice();
      const roll = dice.roll(this.activeCreature.hitDice);
      this.activeCreature.maxHitPoints = roll.modifiedRollValue;
      this.activeCreature.currentHitPoints = roll.modifiedRollValue;
    }

    public takeDamage(): void {
      if (!this.activeCreature.lastDamageTaken || isNaN(Number(this.activeCreature.lastDamageTaken))) {
        return;
      }

      this.activeCreature.currentHitPoints -= Number(this.activeCreature.lastDamageTaken);

      if (this.activeCreature.currentHitPoints < 0) {
        this.activeCreature.currentHitPoints = 0;
      }
    }

    public doHeal(): void {
      if (!this.activeCreature.lastDamageTaken || isNaN(Number(this.activeCreature.lastDamageTaken))) {
        return;
      }

      this.activeCreature.currentHitPoints += Number(this.activeCreature.lastDamageTaken);

      if (this.activeCreature.currentHitPoints >= this.activeCreature.maxHitPoints) {
        this.activeCreature.currentHitPoints = this.activeCreature.maxHitPoints;
      }
    }
  }