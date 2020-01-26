import { Creature, Action } from "../creature.model";

export class MinotaurSkeleton implements Creature {
  public name = "Minotaur Skeleton";
  public armorClass = 12;
  public speed = 40;
  public challenge = 1;
  public maxHitPoints = 67;
  public currentHitPoints = 67;
  public hitDice = "9d10+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=274";
  public page = 273;
  public passivePerception = 9;
  public experience = 450;
  public numberOfActions = 1;
  public size = "Large Undead";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/minotaurSkeleton.jpeg";

  public abilities = {
    strength: 4,
    dexterity: 0,
    constitution: 2,
    intelligence: -2,
    wisdom: -1,
    charisma: -3
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = [];

  public vulnerabilities = ["Bludgeoning"];

  public immunities = ["Poison" ];

  public conditionImmunities = ["Exhaustion", "Poisoned"];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    }
  ];

  public languages = ["Abyssal"];

  public traits = ["Charge"];

  public actions: Action[] = [
    {
      name: "Greataxe",
      attackBonus: 6,
      reachMax: 5,
      dice: "2d12+4",
      attackType: "Slashing",
    },
    {
      name: "Gore",
      attackBonus: 6,
      reachMax: 5,
      dice: "2d8+4",
      attackType: "Slashing",
    },
  ];

  public legendaryActions = [];
}
