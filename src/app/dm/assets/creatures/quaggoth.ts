import { Creature, Action } from "../creature.model";

export class Quaggoth implements Creature {
  public name = "Quaggoth";
  public armorClass = 13;
  public speed = 30;
  public challenge = 2;
  public maxHitPoints = 45;
  public currentHitPoints = 45;
  public hitDice = "6d8+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=256";
  public page = 256;
  public passivePerception = 10;
  public experience = 450;
  public numberOfActions = 2;
  public size = "Medium";
  public alignment = "Neutral";
  public imgUrl = "../../../assets/img/quaggoth.png";

  public abilities = {
    strength: 3,
    dexterity: 1,
    constitution: 3,
    intelligence: -2,
    wisdom: 1,
    charisma: -2
  };

  public savingThrows = [];

  public skillProficiencies = [
    {
      ability: "Athletics",
      value: 5
    }
  ];

  public resistances = [];

  public immunities = ["Poison"];

  public conditionImmunities = ["Poisoned"];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Darkvision",
      value: 120
    }
  ];

  public languages = ["Undercommon"];

  public traits = [
    {
      name: "Wounded Fury",
      info: `While it has 10 hit points or fewer, the quaggoth has advantage on attack rolls.
        In addition, it deals an extra 7 (2d6) damage to any target it hits with a melee attack.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Claws",
      attackBonus: 5,
      dice: "1d6+3",
      attackType: "Slashing",
      range: "5",
      allowedInMultipleAttacks: true
    },
    {
      name: "Claws",
      attackBonus: 5,
      dice: "1d6+3",
      attackType: "Slashing",
      range: "5",
      allowedInMultipleAttacks: true
    }
  ];

  public legendaryActions = [];
}
