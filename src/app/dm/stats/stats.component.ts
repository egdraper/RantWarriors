import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../assets/creature.model";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Input() public activeCreatures: Creature[] = [];
  @Output() public remove = new EventEmitter<Creature[]>();
  public numbers = this.getNumbers();
  public dead = "X";

  public advantage = false;
  public disadvantage = false;

  public removeCreature(index: number): void {
    this.activeCreatures = this.activeCreatures.filter((a, i) => i !== index);

    if (!this.activeCreatures) {
      this.activeCreatures = [];
    }

    return this.remove.emit(this.activeCreatures);
  }

  public giveAdvantage(): void {
    this.advantage = true;
    this.disadvantage = false;
  }

  public giveDisadvantage(): void {
    this.advantage = false;
    this.disadvantage = true;
  }

  public resetAdvantage(): void {
    this.advantage = false;
    this.disadvantage = false;
  }

  private getNumbers(): number[] {
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,31,32,33,34,35,36,37,38,39,40,
      41,42,43,44,45,46,47,48,49,50,
    ];
  }
}
