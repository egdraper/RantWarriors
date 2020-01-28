import { Creature, Action } from "../creature.model";

export class SkeletonGiant implements Creature {
  public name = "Skeleton-Giant";
  public armorClass = 15;
  public speed = 30;
  public challenge = 3;
  public maxHitPoints = 65;
  public currentHitPoints = 65;
  public hitDice = "9d10+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=272";
  public page = 272;
  public passivePerception = 0;
  public experience = 700;
  public numberOfActions = 2;
  public size = "Large";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/skeleton1.jpg";

  public abilities = {
    strength: 4,
    dexterity: 2,
    constitution: 3,
    intelligence: -3,
    wisdom: -1,
    charisma: -2
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
      name: "Greatsword",
      attackBonus: 4,
      reachMax: 5,
      dice: "2d6+4",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Greatsword",
      attackBonus: 4,
      reachMax: 5,
      dice: "2d6+4",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
  ];

  public legendaryActions = [];
}
