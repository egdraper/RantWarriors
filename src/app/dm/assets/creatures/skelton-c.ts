import { Creature, Action } from "../creature.model";

export class SkeletonC implements Creature {
  public name = "Skeleton-C";
  public armorClass = 15;
  public speed = 30;
  public challenge = .5;
  public maxHitPoints = 22;
  public currentHitPoints = 22;
  public hitDice = "4d8+4";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=272";
  public page = 272;
  public passivePerception = 10;
  public experience = 100;
  public numberOfActions = 2;
  public size = "Medium";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/skeleton3.png";

  public abilities = {
    strength: 0,
    dexterity: 2,
    constitution: 2,
    intelligence: -2,
    wisdom: -1,
    charisma: -3
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = ["Poison"];

  public conditionImmunities = ["Exhaustion", "Poisoned"];

  public vulnerabilities = ["Bludgeoning"];

  public senses = [
    {
      sense: "Darkvision",
      value: 60,
    },
  ];

  public languages = ["Common, Cant speak"];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Claw",
      attackBonus: 4,
      range: "5",
      dice: "1d4+3",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Claw",
      attackBonus: 4,
      range: "5",
      dice: "1d4+3",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
  ];

  public legendaryActions = [];
}
