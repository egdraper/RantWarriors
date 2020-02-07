import { Creature, Action } from "../creature.model";

export class SkeletonA implements Creature {
  public name = "Skeleton-A";
  public armorClass = 13;
  public speed = 30;
  public challenge = .25;
  public maxHitPoints = 13;
  public currentHitPoints = 13;
  public hitDice = "2d8+4";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=272";
  public page = 272;
  public passivePerception = 9;
  public experience = 50;
  public numberOfActions = 1;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/skeleton2.jpeg";

  public abilities = {
    strength: 0,
    dexterity: 2,
    constitution: 2,
    intelligence: -2,
    wisdom: -1,
    charisma: -3
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = ["Poison"];

  public conditionImmunities = ["Exhaustion", "Poisoned"];

  public vulnerabilities = ["Bludgeoning"];

  public senses = [
    {
      sense: "Darkvision",
      value: 60,
    },
  ];

  public languages = ["Common, Cant speak"];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Shortsword",
      attackBonus: 4,
      range: "5",
      dice: "1d6+2",
      attackType: "Piercing",
    },
    {
      name: "Shortbow",
      attackBonus: 4,
      range: "80/320",
      dice: "1d6+2",
      attackType: "Piercing",
    }
  ];

  public legendaryActions = [];
}
