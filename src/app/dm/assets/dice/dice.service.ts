import { DiceEquation, Roll } from "./dice.model";

export class Dice {
  public savedRoll: Array<DiceEquation> = [];
  public withAdvantage = false;
  public withDisadvantage = false;

  public roll(diceEquation: string): Roll {
    this.parseEquation(diceEquation);

    if (
      diceEquation.startsWith("d20") &&
      (this.withAdvantage || this.withDisadvantage)
    ) {
      const roll1 = this.performRoll();
      const roll2 = this.performRoll();
      if (this.withAdvantage) {
        return roll1.modifiedRollValue >= roll2.modifiedRollValue
          ? roll1
          : roll2;
      }

      if (this.withDisadvantage) {
        return roll1.modifiedRollValue <= roll2.modifiedRollValue
          ? roll1
          : roll2;
      }
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
}
