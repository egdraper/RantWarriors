import { Creature, Action } from "../creature.model";

export class Pixie implements Creature {
  public name = "Pixie";
  public armorClass = 15;
  public speed = "10ft., fly 30ft";
  public challenge = .25;
  public maxHitPoints = 1;
  public currentHitPoints = 1;
  public hitDice = "1d4-1";
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=254";
  public page = 254;
  public passivePerception = 14;
  public experience = 50;
  public numberOfActions = 1;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/pixie.jpg";

  public abilities = {
    strength: -4,
    dexterity: 5,
    constitution: -1,
    intelligence: 0,
    wisdom: 2,
    charisma: 2
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = [];

  public traits = [
    {
      name: "Magic Resistance",
      info: `The pixie has advantage on saving throws against spells and other magical effects.`
    },
    {
      name: "Innate Spellcasting",
      info: `The pixie's innate spellcasting ability is Charisma (spell save DC 12). It can
        innately cast the following spells, requiring only its pixie dust as a component:\n
        At will: druidcraft\n1/day each: confusion, dancing lights, detect evil and good,
        detect thoughts, dispel magic, entangle, fly, phantasmal force, polymorph, sleep
      `
    } ];

  public actions: Action[] = [
    {
      name: "Superior Invisibility",
    }
  ];

  public legendaryActions = [];
}
