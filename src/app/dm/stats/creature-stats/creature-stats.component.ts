import { Component, OnInit, Input } from "@angular/core";
import { Npc } from "../../assets/npc.model";
import { Dice } from "../../assets/dice/dice.service";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-creature-stats",
  templateUrl: "./creature-stats.component.html",
  styleUrls: ["./creature-stats.component.scss"]
})
export class CreatureStatsComponent {
  @Input() creature: Creature;
  public shrink = false;

  public generateRandomHp(): void {
    const dice = new Dice();
    const roll = dice.roll(this.creature.hitDice);
    this.creature.maxHitPoints = roll.modifiedRollValue;
    this.creature.currentHitPoints = roll.modifiedRollValue;
  }

  public takeDamage(): void {
    if (
      !this.creature.lastDamageTaken ||
      isNaN(Number(this.creature.lastDamageTaken))
    ) {
      return;
    }

    this.creature.currentHitPoints -= Number(
      this.creature.lastDamageTaken
    );

    if (this.creature.currentHitPoints < 0) {
      this.creature.currentHitPoints = 0;
    }
  }

  public doHeal(): void {
    if (
      !this.creature.lastDamageTaken ||
      isNaN(Number(this.creature.lastDamageTaken))
    ) {
      return;
    }

    this.creature.currentHitPoints += Number(
      this.creature.lastDamageTaken
    );

    if (
      this.creature.currentHitPoints >= this.creature.maxHitPoints
    ) {
      this.creature.currentHitPoints = this.creature.maxHitPoints;
    }
  }
}
