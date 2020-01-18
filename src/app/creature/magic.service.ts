import { DiceEquation, Roll } from "./dice.model";

export class Dice {
  public getMagic(name: string): void {
     
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }
}


