import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../assets/creature.model";
import { DbSessionService } from "../assets/dbSession";
import { Asset } from "../assets/add-asset/asset";

@Component({
  selector: "stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Output() public remove = new EventEmitter<number>();
  @Input() public activeAssets: Asset[] = [];
  @Input() public activeEnemies: Asset[] = [];

  public selectedEnemy;
  public damageNumbers = [];
  public dead = "X";
  public assetSelectedIndex = 0;

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

  public giveAdvantage(asset: Asset): void {
    asset.hasAdvantage = true;
    asset.hasDisadvantage = false;
  }

  public giveDisadvantage(asset): void {
    asset.hasAdvantage = false;
    asset.hasDisadvantage = true;
  }

  public resetAdvantage(asset): void {
    asset.hasAdvantage = false;
    asset.hasDisadvantage = false;
  }

  public onEnemySelect(enemy: Creature): void {
    if (this.selectedEnemy === enemy) {
      this.selectedEnemy = undefined;
      return;
    }

    this.selectedEnemy = enemy;
  }

  public onSelect(index: number): void {
    this.assetSelectedIndex = index;
  }

  public heal(activeAsset: Asset, value: number): void {
    activeAsset.currentHitPoints += value;

    if (activeAsset.currentHitPoints > activeAsset.maxHitPoints) {
      activeAsset.currentHitPoints = activeAsset.maxHitPoints;
    }

    this.dbSessionService.updateSession();
  }

  public takeDamage(activeAsset: Creature, value: number): void {
    activeAsset.currentHitPoints -= value;

    if (activeAsset.currentHitPoints < 0) {
      activeAsset.currentHitPoints = 0;
    }

    this.dbSessionService.updateSession();
  }
}
