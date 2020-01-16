import { Component, Input } from "@angular/core";
import { Creature } from "../creature.model";
import { Dice } from "../dice.service";


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

    public rollAttack(attackBonus: number): void {
      const dice = new Dice();
      dice.withAdvantage = this.advantage;
      dice.withDisadvantage = this.disadvantage;

      const roll = dice.roll(`d20+${attackBonus}`);
      this.attack = roll.modifiedRollValue;
    }

    public rollDamage(diceEquation: string): void {
      const dice = new Dice();
      const roll = dice.roll(diceEquation);
      this.damage = roll.modifiedRollValue;
    }


  }