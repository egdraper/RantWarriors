import { Creature, Action } from "../creature.model";

export class Cockatrice implements Creature {
  public challenge = .5;
  public name = "Cockatrice";
  public maxHitPoints = 27;
  public currentHitPoints = 27;
  public hitDice = "6d6+6";
  public armorClass = 11;
  public speed = 20;
  public flySpeed = 40;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=42";
  public page = 42;
  public passivePerception = 11;
  public experience = 100;
  public numberOfActions = 1;
  public size = "Small";
  public alignment = "Unaligned";
  public imgUrl = "../../../assets/img/cockatrice.jpeg";

  public abilities = {
    strength: -2,
    dexterity: 1,
    constitution: 1,
    intelligence: -4,
    wisdom: 1,
    charisma: -3
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = [];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Bite",
      range: "5",
      dice: "1d4+1",
      attackType: "Piercing",
      actionBonus: ["The attacked must succeed DC 11 Con saving throw or be petrified. See Book"],
    }
   ];

  public legendaryActions = [];
}
