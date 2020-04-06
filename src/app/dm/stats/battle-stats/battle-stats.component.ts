import { Component, Input, ContentChildren, ViewChildren } from "@angular/core";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";
import { Action, Creature } from "../../assets/creature.model";
import { ActionButtonComponent } from "../action-button/action-button.component";

@Component({
  selector: "app-battle-stats",
  templateUrl: "./battle-stats.component.html",
  styleUrls: ["./battle-stats.component.scss"]
})
export class BattleStatsComponent {
  @ViewChildren(ActionButtonComponent) actionButton: ActionButtonComponent[];
  @Input() creature: Creature;
  @Input() selectedCreature: Creature;

  public tools = ["edit", "delete"]
  public shrink = false;
  public attack = 0;
  public damage = 0;

  public generateRandomHp(): void {
    const dice = new Dice();
    dice.withAdvantage = this.creature.hasAdvantage;
    dice.withDisadvantage = this.creature.hasDisadvantage;
    const roll = dice.roll(this.creature.hitDice);
    this.creature.maxHitPoints = roll.modifiedRollValue;
    this.creature.currentHitPoints = roll.modifiedRollValue;
  }

  public refreshAttack(): void {
    this.actionButton.forEach(ab => ab.reset());
  }
}
