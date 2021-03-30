import { DiceEquation, Roll } from "./dice.model";
import { ReadPropExpr } from "@angular/compiler";

export class Dice {
  public savedRoll: Array<DiceEquation> = [];
  public withAdvantage = false;
  public withDisadvantage = false;

  public roll(diceEquation: string): Roll {
    if(this.isStaticRoll(diceEquation)) {
      return this.getStaticValue(diceEquation)
    }

    this.parseEquation(diceEquation);

    if (diceEquation.startsWith("d20")) {
      const roll1 = this.performRoll();
      const roll2 = this.performRoll();
      if (this.withAdvantage) {
        const advantageRoll = roll1.modifiedRollValue >= roll2.modifiedRollValue
        ? roll1
        : roll2;
        this.setCrit(advantageRoll);
        return advantageRoll;
      }

      if (this.withDisadvantage) {
        const disadvantageRoll = roll1.modifiedRollValue <= roll2.modifiedRollValue
          ? roll1
          : roll2;
        this.setCrit(disadvantageRoll);
        return disadvantageRoll;
      }

      const regularRoll = this.performRoll();
      this.setCrit(regularRoll);
      return regularRoll;
    } else {
      return this.performRoll();
    }
  }

  private performRoll(): Roll {
    const roll = new Roll();
    this.savedRoll.forEach(sr => {
      for (let i = 0; i < sr.numberOfRolls; i++) {
        roll.actualRollValue = this.getRandomInt(sr.numberOfSides);
        roll.modifiedRollValue += roll.actualRollValue;
      }
      roll.modifiedRollValue += sr.rollModifier;
    });

    return roll;
  }

  private getStaticValue(diceEquation: string): Roll {
    const roll = new Roll();
    
    if(diceEquation.includes("+")){
      const split = diceEquation.split("+")
      roll.actualRollValue = Number(split[0])
      roll.modifiedRollValue = Number(split[0]) + Number(split[1])
    } else if(diceEquation.includes("-")){
      const split = diceEquation.split("-")
      roll.actualRollValue = Number(split[0])
      roll.modifiedRollValue = Number(split[0]) - Number(split[1])
    } else {
      roll.actualRollValue = Number(diceEquation)
      roll.modifiedRollValue = Number(diceEquation)
    }

    return roll
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }

  public parseEquation(diceEquation: string): any {
    const rolls = diceEquation.match(
      /(\d+d|d)([4,6,8]|\d+[10,12,20,100])((\-|\+)\d+|)/g
    );
    rolls.forEach(r => {
      const numberOfRolls = r.match(/\d+(?=d)/g);
      const dice = r.match(/(?<=d)(\?*\d+)/g);
      const modifier = r.match(/(?<=\+|-)(\?*\d+)/g);

      let operator = 1;
      if (modifier) {
        operator = r.match(/\+/g) ? 1 : -1;
      }
      this.savedRoll.push(
        new DiceEquation(
          dice ? Number.parseInt(dice[0]) : 0,
          numberOfRolls ? Number.parseInt(numberOfRolls[0]) : 1,
          modifier ? operator * Number.parseInt(modifier[0]) : 0,
          r
        )
      );
    });
  }

  public setCrit(roll: Roll): void {
    if (roll.actualRollValue === 20) {
      roll.criticalHit = true;
    }

    if (roll.actualRollValue === 1) {
      roll.criticalFail = true;
    }
  }

  private isStaticRoll(diceEquation): boolean {
    return !diceEquation.includes("d")
  }
}
