import { Component, Input } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";

@Component({
    selector: "battle-defense-npc",
    templateUrl: "./battle-defense.component.html",
    styleUrls: ["./battle-defense.component.scss"]
  })
  export class BattleDefenseNpcComponent {
    @Input() activeNpc: Npc;
    public shrink = false;

    public generateRandomHp(): void {
      const dice = new Dice();
      const roll = dice.roll(this.activeNpc.hitDice);
      this.activeNpc.maxHitPoints = roll.modifiedRollValue;
      this.activeNpc.currentHitPoints = roll.modifiedRollValue;
    }

    public takeDamage(): void {
      if (!this.activeNpc.lastDamageTaken || isNaN(Number(this.activeNpc.lastDamageTaken))) {
        return;
      }

      this.activeNpc.currentHitPoints -= Number(this.activeNpc.lastDamageTaken);

      if (this.activeNpc.currentHitPoints < 0) {
        this.activeNpc.currentHitPoints = 0;
      }
    }

    public doHeal(): void {
      if (!this.activeNpc.lastDamageTaken || isNaN(Number(this.activeNpc.lastDamageTaken))) {
        return;
      }

      this.activeNpc.currentHitPoints += Number(this.activeNpc.lastDamageTaken);

      if (this.activeNpc.currentHitPoints >= this.activeNpc.maxHitPoints) {
        this.activeNpc.currentHitPoints = this.activeNpc.maxHitPoints;
      }
    }
  }