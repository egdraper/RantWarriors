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

  public generateRandomHp(): void {
    const dice = new Dice();
    const roll = dice.roll(this.creature.hitDice);
    this.creature.maxHitPoints = roll.modifiedRollValue;
    this.creature.currentHitPoints = roll.modifiedRollValue;
  }

  public takeDamage(): void {
    this.damage.emit({creature: this.creature, value: this.damageTaken})
  }

  public doHeal(): void {
    this.damage.emit({creature: this.creature, value: this.damageTaken})
  }

  public resetHp(): void {
    this.creature.currentHitPoints = this.creature.maxHitPoints;
  }
}
