import { Creature, Action } from "../creature.db";

export class Template implements Creature {
  public challenge = .5;
  public name = "";
  public maxHitPoints = 27;
  public currentHitPoints = 27;
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

  public abilities = {
    strength: -2,
    dexterity: 1,
    constitution: 1,
    intelligence: -4,
    wisdom: 1,
    charisma: -3
  };

  public savingThrows = [
    {
      ability: "Str",
      value: 0
    },
    {
      ability: "Dex",
      value: 0
    },
    {
      ability: "Con",
      value: 0
    },
    {
      ability: "Int",
      value: 0
    },
    {
      ability: "Wis",
      value: 0
    },
    {
      ability: "Cha",
      value: 0
    }
  ];

  public skillProficiencies = [
    {
      ability: "Const",
      value: 0
    }
  ];

  public resistances = [];

  public immunities = [];

  public senses = [
    {
      sense: "",
      value: 0
    },
  ];

  public languages = [];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Bite",
      reachMax: 5,
      dice: "1d4+1",
      attackType: "Piercing",
      actionBonus: ["The attacked must succeed DC 11 Con saving throw or be petrified. See Book"],
    }
   ];

  public legendaryActions = [];
}
