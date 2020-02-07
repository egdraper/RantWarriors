import { Creature, Action } from "../creature.model";

export class Dretch implements Creature {
  public challenge = .25;
  public name = "Dretch";
  public maxHitPoints = 18;
  public currentHitPoints = 18;
  public hitDice = "4d6+4";
  public armorClass = 11;
  public speed = 20;
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=59";
  public page = 59;
  public passivePerception = 9;
  public experience = 50;
  public numberOfActions = 2;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/dretch.jpeg";

  public abilities = {
    strength: 0,
    dexterity: 0,
    constitution: 1,
    intelligence: -3,
    wisdom: -1,
    charisma: -4,
  };

  public savingThrows = [
    {
      ability: "Str",
      value: 1
    },
  ];

  public skillProficiencies = [ ];

  public resistances = ["Cold", "Fire", "Lightning"];

  public immunities = ["Poison"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    },
  ];

  public languages = ["Abyssal, Telepathy 60ft (Only works if creature knows Abyssal"];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Bite",
      attackBonus: 2,
      dice: "1d6",
      attackType: "Piercing",
      range: "5",
      allowedInMultipleAttacks: true,
    },
    {
      name: "Claws",
      attackBonus: 2,
      dice: "2d4",
      attackType: "Slashing",
      range: "5",
      allowedInMultipleAttacks: true,
    },
    {
      name: "Fetid Cloud",
      range: "10",
      actionBonus: ["See Book"],
    },

  ];

  public legendaryActions = [];
}
