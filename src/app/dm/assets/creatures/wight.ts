import { Creature, Action } from "../creature.model";

export class Wight implements Creature {
  public name = "Wight";
  public armorClass = 14;
  public speed = 40;
  public challenge = 3;
  public maxHitPoints = 45;
  public currentHitPoints = 45;
  public hitDice = "6d8+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=300";
  public page = 300;
  public passivePerception = 13;
  public experience = 850;
  public numberOfActions = 2;
  public size = "Large";
  public alignment = "Chaotic Evil";
  public imgUrl = "../../assets/img/carbonClaws.jpg";

  public abilities = {
    strength: 2,
    dexterity: 2,
    constitution: 3,
    intelligence: 0,
    wisdom: 1,
    charisma: 2
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
    },
   ];

  public skillProficiencies = [
    {
      ability: "Perception",
      value: 3
    },
    {
      ability: "Stealth",
      value: 4
    }
   ];

  public resistances = [ "Necrotic", "Bludgeoning, Piercing, Slashing from non magical weapons that aren't silvered."];

  public immunities = [ "Poison"];

  public conditionImmunities = [ "Exhaustion", "Poisoned" ];

  public vulnerabilities = [];

  public senses = [ {
    sense: "Darkvision",
    value: 60
  }];

  public languages = [];

  public traits = [ "Sunlight Sensitivity" ];

  public actions: Action[] = [
    {
      name: "Long Sword",
      attackBonus: 4,
      range: "5",
      dice: "1d8+2",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Long Bow",
      attackBonus: 4,
      range: "150/600",
      dice: "1d8+2",
      attackType: "Piercing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Life Drain",
      attackBonus: 4,
      range: "5",
      dice: "1d6+2",
      attackType: "Necrotic",
      actionBonus: [`The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a Long Rest.`]
    }
  ];

  public legendaryActions = [];
}
