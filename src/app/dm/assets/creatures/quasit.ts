import { Creature, Action } from "../creature.model";

export class Quasit implements Creature {
  public name = "Quasit";
  public armorClass = 13;
  public speed = 40;
  public challenge = 1;
  public maxHitPoints = 7;
  public currentHitPoints = 7;
  public hitDice = "3d4";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=64";
  public page = 64;
  public passivePerception = 10;
  public experience = 200;
  public numberOfActions = 1;
  public size = "Tiny";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/quasit.jpeg";

  public abilities = {
    strength: -3,
    dexterity: 3,
    constitution: 0,
    intelligence: -2,
    wisdom: 0,
    charisma: 0
  };

  public savingThrows = [];

  public skillProficiencies = [
    {
      ability: "Stealth",
      value: 5
    }
  ];

  public resistances = [
    "Cold",
    "Fire",
    "Lightning",
    "Bludgeoning, piercing, and slashing from non magical weapons"
  ];

  public immunities = ["Poison"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Dark Vision",
      value: 120
    }
  ];

  public languages = ["Abysmal", "Common"];

  public traits = ["Shape Changer", "Magic Resistance"];

  public actions: Action[] = [
    {
      name: "Claws",
      attackType: "Piercing",
      attackBonus: 4,
      reachMax: 5,
      dice: "1d4+3",
      actionBonus: ["Target must succeed DC 10 Const saving throw or take 2d4 damage and be poisoned for 1 minute. See Book"]
    },
    {
      name: "Scare",
      actionBonus: ["Target must succeed DC 10 Wis saving throw or be scared for 1 minute. See Book"]
    },
    {
      name: "Invisibility",
    },
  ];

  public legendaryActions = [];
}
