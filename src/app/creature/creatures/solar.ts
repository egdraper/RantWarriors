import { Creature, Action } from "../creature.db";

export class Solar implements Creature {
  public challenge = 21;
  public name = "Solar";
  public maxHitPoints = 243;
  public currentHitPoints = 243;
  public armorClass = 21;
  public speed = 50;
  public flySpeed = 150;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=18";
  public page = 19;
  public passivePerception = 24;
  public experience = 33000;
  public numberOfActions = 2;
  public size = "Large";
  public alignment = "Lawful Good";

  public savingThrows = [
    {
      ability: "Int",
      value: 14
    },
    {
      ability: "Wis",
      value: 14
    },
    {
      ability: "Cha",
      value: 17
    }
  ];

  public skillProficiencies = [
    {
      ability: "Const",
      value: 12
    }
  ];

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

  public abilities = {
    strength: 8,
    dexterity: 6,
    constitution: 8,
    intelligence: 7,
    wisdom: 7,
    charisma: 10
  };

  public resistances = [
    "Radiant",
    "Bludgeoning, Piercing, and Slashing from non magical weapons"
  ];

  public immunities = ["Charmed", "Exhaustion", "Frightened", "Poisoned"];

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
      name: "Slaying Longbow",
      attackType: "Piercing",
      attackBonus: 13,
      reachMax: 600,
      reachMin: 120,
      dice: "2d8+6",
      numberOfTargets: 1,
      actionBonus: [
        "27 radiant damage",
        "Target < 100 hp, it must succeed DC 15 Const saving throw or die"
      ]
    },
    {
      name: "Flying Sword",
      actionBonus: ["See Book"]
    },
    {
      name: "Healing Touch",
      actionBonus: ["See Book"]
    }
  ];

  public legendaryActions = ["Teleport", "Searing Burst", "Blinding Gaze"];
}
