import { Component, Input } from "@angular/core";
import {  Action } from "../../assets/creature.model";
import { Dice } from "../../assets/dice/dice.service";
import { Npc } from "../../assets/npc.model";

@Component({
    selector: "battle-offense-npc",
    templateUrl: "./battle-offense.component.html",
    styleUrls: ["./battle-offense.component.scss"]  })
  export class BattleOffenseNpcComponent {
    @Input() activeNpc: Npc;
    public shrink = false;
    public attack = 0;
    public damage = 0;
    public advantage = false;
    public disadvantage = false;

    public generateRandomHp(): void {
      const dice = new Dice();
      const roll = dice.roll(this.activeNpc.hitDice);
      this.activeNpc.maxHitPoints = roll.modifiedRollValue;
      this.activeNpc.currentHitPoints = roll.modifiedRollValue;
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