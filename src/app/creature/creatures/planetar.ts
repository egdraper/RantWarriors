import { Creature, Action } from "../creature.db";

export class Planetar implements Creature {
  public challenge = 16;
  public name = "Planetar";
  public maxHitPoints = 200;
  public currentHitPoints = 200;
  public armorClass = 19;
  public speed = 40;
  public flySpeed = 120;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=18";
  public page = 19;
  public passivePerception = 21;
  public experience = 15000;
  public numberOfActions = 2;
  public size = "Large";
  public alignment = "Lawful Good";

  public abilities = {
    strength: 7,
    dexterity: 5,
    constitution: 7,
    intelligence: 4,
    wisdom: 6,
    charisma: 7
  };

  public savingThrows = [
    {
      ability: "Con",
      value: 12
    },
    {
      ability: "Wis",
      value: 11
    },
    {
      ability: "Cha",
      value: 12
    }
  ];

  public skillProficiencies = [
    {
      ability: "Perception",
      value: 11
    }
  ];

  public resistances = [
    "Radiant",
    "Bludgeoning, Piercing, and Slashing from non magical weapons"
  ];

  public immunities = ["Charmed", "Exhaustion", "Frightened", "Poisoned"];

  public senses = [
    {
      sense: "True Sight",
      value: 120
    },
    {
      sense: "Passive Perception",
      value: 14
    }
  ];

  public languages = ["All", "Telepathy (120)"];

  public traits = [
    "Angelic Weapons",
    "Divine Awareness",
    "Innate SpellCasting",
    "Magic Resistance"
  ];

  public actions: Action[] = [
    {
      name: "Greatsword",
      allowedInMultipleAttacks: true,
      attackType: "Slashing",
      attackBonus: 15,
      reachMax: 5,
      actionBonus: ["27 radiant damage"],
      dice: "4d6+8"
    },
    {
      name: "Healing Touch",
      actionBonus: ["See Book"]
    }
  ];

  public legendaryActions = [];
}
