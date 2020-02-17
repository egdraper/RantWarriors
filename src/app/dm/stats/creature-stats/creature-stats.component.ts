import { Component, OnInit, Input } from "@angular/core";
import { Npc } from "../../assets/npc.model";
import { Dice } from "../../assets/dice/dice.service";

@Component({
  selector: "app-creature-stats",
  templateUrl: "./creature-stats.component.html",
  styleUrls: ["./creature-stats.component.scss"]
})
export class CreatureStatsComponent {
  @Input() activeCreature: Npc;
  public shrink = false;

  public generateRandomHp(): void {
    const dice = new Dice();
    const roll = dice.roll(this.activeCreature.hitDice);
    this.activeCreature.maxHitPoints = roll.modifiedRollValue;
    this.activeCreature.currentHitPoints = roll.modifiedRollValue;
  }

  public takeDamage(): void {
    if (
      !this.activeCreature.lastDamageTaken ||
      isNaN(Number(this.activeCreature.lastDamageTaken))
    ) {
      return;
    }

    this.activeCreature.currentHitPoints -= Number(
      this.activeCreature.lastDamageTaken
    );

    if (this.activeCreature.currentHitPoints < 0) {
      this.activeCreature.currentHitPoints = 0;
    }
  }

  public doHeal(): void {
    if (
      !this.activeCreature.lastDamageTaken ||
      isNaN(Number(this.activeCreature.lastDamageTaken))
    ) {
      return;
    }

    this.activeCreature.currentHitPoints += Number(
      this.activeCreature.lastDamageTaken
    );

    if (
      this.activeCreature.currentHitPoints >= this.activeCreature.maxHitPoints
    ) {
      this.activeCreature.currentHitPoints = this.activeCreature.maxHitPoints;
    }
  }
}
