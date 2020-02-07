import { Creature, Action } from "../creature.model";

export class Troll implements Creature {
  public name = "Troll";
  public armorClass = 15;
  public speed = 30;
  public challenge = 5;
  public maxHitPoints = 84;
  public currentHitPoints = 84;
  public hitDice = "8d10+40";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=292";
  public page = 291;
  public passivePerception = 12;
  public experience = 1800;
  public numberOfActions = 3;
  public size = "Large Giant";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/troll.jpeg";

  public abilities = {
    strength: 4,
    dexterity: 1,
    constitution: 5,
    intelligence: -2,
    wisdom: -1,
    charisma: -2
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    }
  ];

  public languages = ["Giant"];

  public traits = ["Keen Smell", "Regeneration"];

  public actions: Action[] = [
    {
      name: "Bite",
      attackBonus: 7,
      range: "5",
      dice: "1d6+4",
      attackType: "Piercing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Claw",
      attackBonus: 7,
      range: "5",
      dice: "2d6+4",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Claw",
      attackBonus: 7,
      range: "5",
      dice: "2d6+4",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    }
  ];

  public legendaryActions = [];
}
