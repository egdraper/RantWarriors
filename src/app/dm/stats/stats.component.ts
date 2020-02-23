import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../assets/creature.model";
import { players } from "../assets/players.db";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Input() public activeCreatures: Creature[] = [];
  @Output() public remove = new EventEmitter<Creature[]>();
  public activePlayers = players;
  public selectedPlayer;
  public damageNumbers = [];
  public dead = "X";

  constructor() {
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

  public onPlayerSelect(player: Creature): void {
    if (this.selectedPlayer === player) {
      this.selectedPlayer = undefined;
      return;
    }

    this.selectedPlayer = player;
  }
}
