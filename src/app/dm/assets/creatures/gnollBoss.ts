import { Creature, Action } from "../creature.model";

export class GnollBoss implements Creature {
  public name = "Gnoll Boss";
  public armorClass = 14;
  public speed = "30ft.";
  public challenge = 2;
  public maxHitPoints = 65;
  public currentHitPoints = 65;
  public hitDice = "10d8+20";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=164";
  public page = 163;
  public passivePerception = 10;
  public experience = 100;
  public numberOfActions = 3;
  public size = "Medium";
  public alignment = "Chaotic Evil";
  public imgUrl = "../../assets/img/gnollBoss.jpg";

  public abilities = {
    strength: 3,
    dexterity: 2,
    constitution: 2,
    intelligence: 0,
    wisdom: 0,
    charisma: 1
  };

  public savingThrows = [
    {
      ability: "CON",
      value: 4
    },
    {
      ability: "WIS",
      value: 2
    },
    {
      ability: "CHA",
      value: 3
    }
  ];

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

  public languages = [];

  public traits = [
    {
      name: "Rampage",
      info: `When the gnoll reduces a creature to 0 Hit Points with a melee Attack on its turn,
      the gnoll can take a Bonus Action to move up to half its speed and make a bite Attack.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Bite",
      attackBonus: 4,
      range: "5",
      dice: "1d6+3",
      attackType: "Piercing",
      allowedInMultipleAttacks: true,
      actionBonus: ["Wis DC Saving Throw or suffer 2d6 Poison"]
    },
    {
      name: "Claw",
      attackBonus: 5,
      range: "5",
      dice: "1d8+3",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Claw",
      attackBonus: 5,
      range: "5",
      dice: "1d8+3",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    }
  ];

  public legendaryActions = [];
}
