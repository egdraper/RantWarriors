import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../assets/creature.model";
import { DbService } from "../assets/dbService";
import { DbSessionService } from "../assets/dbSession";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Output() public remove = new EventEmitter<number>();
  @Input() public activeCreatures: Creature[] = [];
  @Input() public activeEnemies: Creature[] = [];

  public selectedEnemy;
  public damageNumbers = [];
  public dead = "X";
  public creatureSelectedIndex = 0;

  constructor(private dbSessionService: DbSessionService) {
    this.setDamageNumbers();
  }

  public removeCreature(index: number): void {
    return this.remove.emit(index);
  }

  private setDamageNumbers(): void {
    for (let index = 1; index <= 50; index++) {
      this.damageNumbers.push(index);
    }
  }

  public giveAdvantage(creature): void {
    creature.hasAdvantage = true;
    creature.hasDisadvantage = false;
  }

  public giveDisadvantage(creature): void {
    creature.hasAdvantage = false;
    creature.hasDisadvantage = true;
  }

  public resetAdvantage(creature): void {
    creature.hasAdvantage = false;
    creature.hasDisadvantage = false;
  }

  public onEnemySelect(enemy: Creature): void {
    if (this.selectedEnemy === enemy) {
      this.selectedEnemy = undefined;
      return;
    }

    this.selectedEnemy = enemy;
  }

  public onSelect(index: number): void {
    this.creatureSelectedIndex = index;
  }

  public takeDamage(activeCreature: Creature, value: number): void {
    activeCreature.currentHitPoints -= value;

    if (activeCreature.currentHitPoints < 0) {
      activeCreature.currentHitPoints = 0;
    }

    this.dbSessionService.updateSession();
  }
}
