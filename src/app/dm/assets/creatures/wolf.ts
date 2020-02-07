import { Creature, Action } from "../creature.model";

export class Wolf implements Creature {
  public name = "Wolf";
  public armorClass = 13;
  public speed = 40;
  public challenge = .25;
  public maxHitPoints = 11;
  public currentHitPoints = 11;
  public hitDice = "2d8+2";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=343";
  public page = 342;
  public passivePerception = 13;
  public experience = 50;
  public numberOfActions = 1;
  public size = "Medium";
  public alignment = "Unaligned";
  public imgUrl = "../../../assets/img/wolf.jpeg";

  public abilities = {
    strength: 1,
    dexterity: 2,
    constitution: 1,
    intelligence: -4,
    wisdom: 1,
    charisma: -2,
  };

  public savingThrows = [ ];

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

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = [];

  public traits = ["Keen Hearing and Smell"];

  public actions: Action[] = [ {
    name: "Bite",
    range: "5",
    attackBonus: 4,
    attackType: "Piercing",
    dice: "2d4+2",
    actionBonus: ["If target is a creature must succeed DC 11 Str saving throw or be knocked prone"]
  } ];

  public legendaryActions = [];
}
