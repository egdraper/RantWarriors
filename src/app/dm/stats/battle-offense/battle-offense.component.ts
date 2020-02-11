import { Component, Input } from "@angular/core";
import {  Action } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";

@Component({
    selector: "battle-offense",
    templateUrl: "./battle-offense.component.html",
    styleUrls: ["./battle-offense.component.scss"]  })
  export class BattleOffenseComponent {
    @Input() activeCreature: Npc;
    public shrink = false;
    public attack = 0;
    public damage = 0;
    public advantage = false;
    public disadvantage = false;

    public generateRandomHp(): void {
      const dice = new Dice();
      dice.withAdvantage = this.advantage;
      dice.withDisadvantage = this.disadvantage;
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

    public refreshAttack(): void {
      this.activeCreature.actions.forEach(action => {
        if (action.attackRoll) {
          action.attackRoll = 0;
        }

        if (action.damageRoll) {
          action.damageRoll = 0;
        }
      });
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
  }