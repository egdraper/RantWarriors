import { Component, Input } from "@angular/core";
import { Creature, Action } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";

@Component({
    selector: "battle-offense",
    templateUrl: "./battle-offense.component.html",
    styleUrls: ["./battle-offense.component.scss"]
  })
  export class BattleOffenseComponent {
    @Input() activeCreature: Creature;
    public shrink = false;
    public attack = 0;
    public damage = 0;
    public advantage = false;
    public disadvantage = false;

    public generateRandomHp(): void {
      const dice = new Dice();
      const roll = dice.roll(this.activeCreature.hitDice);
      this.activeCreature.maxHitPoints = roll.modifiedRollValue;
      this.activeCreature.currentHitPoints = roll.modifiedRollValue;
    }

    public rollAttack(action: Action): void {
      const dice = new Dice();
      dice.withAdvantage = this.advantage;
      dice.withDisadvantage = this.disadvantage;

      const roll = dice.roll(`d20+${action.attackBonus}`);
      action.attackRoll = roll.modifiedRollValue;
    }

    public rollDamage(action: Action): void {
      const dice = new Dice();
      const roll = dice.roll(action.dice);
      action.damageRoll = roll.modifiedRollValue;
    }
  }