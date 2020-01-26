import { Creature, Action } from "../creature.model";

export class Lemure implements Creature {
  public name = "Lemure";
  public armorClass = 7;
  public speed = 15;
  public challenge = 0;
  public maxHitPoints = 13;
  public currentHitPoints = 13;
  public hitDice = "3d8";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=77";
  public page = 77;
  public passivePerception = 10;
  public experience = 10;
  public numberOfActions = 1;
  public size = "Medium";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/lemure.jpeg";

  public abilities = {
    strength: 0,
    dexterity: -3,
    constitution: 0,
    intelligence: -5,
    wisdom: 0,
    charisma: -4
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = ["Cold"];

  public immunities = ["Fire", "Poison"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Dark Vision",
      value: 120
    }
  ];

  public languages = ["Understands Infernal but can't speak"];

  public traits = ["Devil's Sight", "Hellish Rejuvenation"];

  public actions: Action[] = [
    {
      name: "Fist",
      reachMax: 5,
      attackBonus: 3,
      dice: "1d4",
      attackType: "Bludgeoning"
    }
  ];

  public legendaryActions = [];
}
