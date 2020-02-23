import { Creature, Action } from "../creature.model";

export class MinotaurSkeleton implements Creature {
  public name = "Minotaur Skeleton";
  public armorClass = 12;
  public speed = "40ft.";
  public challenge = 2;
  public maxHitPoints = 67;
  public currentHitPoints = 67;
  public hitDice = "9d10+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=274";
  public page = 273;
  public passivePerception = 9;
  public experience = 450;
  public numberOfActions = 1;
  public size = "Large Undead";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/minotaurSkeleton.jpeg";

  public abilities = {
    strength: 4,
    dexterity: 0,
    constitution: 2,
    intelligence: -2,
    wisdom: -1,
    charisma: -3
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = [];

  public vulnerabilities = ["Bludgeoning"];

  public immunities = ["Poison"];

  public conditionImmunities = ["Exhaustion", "Poisoned"];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    }
  ];

  public languages = ["Abyssal"];

  public traits = [
    {
      name: "Charge",
      info: `If the Skeleton moves at least 10 feet straight toward a target and then hits
        it with a gore Attack on the same turn, the target takes an extra 9 (2d8) piercing damage.
        If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed 
        up to 10 feet away and knocked prone.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Greataxe",
      attackBonus: 6,
      range: "5",
      dice: "2d12+4",
      attackType: "Slashing"
    },
    {
      name: "Gore",
      attackBonus: 6,
      range: "5",
      dice: "2d8+4",
      attackType: "Slashing"
    }
  ];

  public legendaryActions = [];
}
