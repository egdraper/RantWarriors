import { Component } from "@angular/core";
import { Dice } from "../../common/dice/dice.service";
import { MagicService } from "../../common/magic/magic.service";
import { Constants } from "../../utils/constants";
import { names } from "./names.db";

@Component({
  selector: "player-adventuring",
  styleUrls: ["./adventuring.component.scss"],
  templateUrl: "./adventuring.component.html"
})
export class AdventuringComponent {
  public spell: string;
  public name: string;
  public lastName: string;
  public domicile: string;
  public numberOfRolls = Array.from(Array(10).keys())
  public additions = Array.from(Array(11).keys())
  public dices = Constants.dice.filter(a => a !== "None")
  
  public rollCount = 1;
  public selectedDice = "d4";
  public selectedAddition = 0;
  public result = 0;
  public finalDice = "1d4+0"

  public getSpell(): void {
    this.spell = new MagicService().getMagic();
  }

  public getRandomName(race: string): void {
    this.name = names[race][Math.floor(Math.random() * (names[race].length))];
    this.lastName = names["otherLastName"][Math.floor(Math.random() * (names["otherLastName"].length))];
  }

  public getDomicileName(): void {
    this.domicile = names["innShipTavern"][Math.floor(Math.random() * (names["innShipTavern"].length))];
  }

  public onNumberOfRollClick(number: number): void {
    this.rollCount = number 
  }

  public onDiceClick(dice: string): void {
    this.selectedDice = dice

  }

  public onAdditionClick(addition: number): void {
    this.selectedAddition = addition
  }

  public onRoll(): void {
    const die = new Dice()
    this.finalDice = `${this.rollCount}${this.selectedDice}+${this.selectedAddition}`
    const roll =  die.roll(this.finalDice)
    this.result = roll.modifiedRollValue
  }
}
