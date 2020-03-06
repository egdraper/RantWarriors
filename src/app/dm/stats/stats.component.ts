import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../assets/creature.model";
import { DbService } from "../assets/dbService";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Output() public remove = new EventEmitter<Creature[]>();
  @Input() public activeCreatures: Creature[] = [];
  @Input() public activeEnemies: Creature[] = [];

  public selectedEnemy;
  public damageNumbers = [];
  public dead = "X";
  public creatureSelectedIndex = 0;

  constructor(private dbService: DbService) {
    this.setDamageNumbers();
  }

  public removeCreature(index: number): void {
    this.activeCreatures = this.activeCreatures.filter((a, i) => i !== index);

    if (!this.activeCreatures) {
      this.activeCreatures = [];
    }

    return this.remove.emit(this.activeCreatures);
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
}
