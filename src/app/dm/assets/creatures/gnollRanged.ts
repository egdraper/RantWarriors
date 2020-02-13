import { Creature, Action } from "../creature.model";

export class GnollRanged implements Creature {
  public name = "Gnoll Ranged";
  public armorClass = 15;
  public speed = 30;
  public challenge = .5;
  public maxHitPoints = 22;
  public currentHitPoints = 22;
  public hitDice = "5d8";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=164";
  public page = 163;
  public passivePerception = 10;
  public experience = 100;
  public numberOfActions = 1;
  public size = "Medium";
  public alignment = "Chaotic Evil";
  public imgUrl = "../../assets/img/gnollArcher.jpg";

  public abilities = {
    strength: 2,
    dexterity: 1,
    constitution: 0,
    intelligence: -2,
    wisdom: 0,
    charisma: -2
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [ {
    sense: "Darkvision",
    value: 60
  }];

  public languages = [];

  public traits = [ "Rampage" ];

  public actions: Action[] = [
    {
      name: "Bite",
      attackBonus: 4,
      range: "5",
      dice: "1d4+2",
      attackType: "Piercing",
    },
    {
      name: "LongBow",
      attackBonus: 4,
      range: "150/600",
      dice: "1d8+1",
      attackType: "Piercing",
    }
  ];

  public legendaryActions = [];
}