import { Creature, Action } from "../creature.model";

export class SkeletonB implements Creature {
  public name = "Skeleton-B";
  public armorClass = 14;
  public speed = 30;
  public challenge = .25;
  public maxHitPoints = 18;
  public currentHitPoints = 18;
  public hitDice = "3d8+4";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=272";
  public page = 272;
  public passivePerception = 9;
  public experience = 50;
  public numberOfActions = 1;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/skeleton5.jpg";

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
      name: "Simitar",
      attackBonus: 4,
      range: "5",
      dice: "1d6+2",
      attackType: "Slashing",
    },
  ];

  public legendaryActions = [];
}
