import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Glover implements Npc {
  public name = "Glover";
  public armorClass = 17;
  public speed = 30;
  public challenge = 3;
  public maxHitPoints = 58;
  public currentHitPoints = 58;
  public hitDice = "9d8+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=350";
  public page = 351;
  public passivePerception = 12;
  public experience = 0;
  public numberOfActions = 3;
  public size = "Medium";
  public alignment = "Good";
  public class = "Veteran";
  public relationship = "Random";
  public homeTown = "Clayton";
  public age = 55;

  public relations = ["Bartender in Winswich"];

  public notes = [
    "Task: Has a task for the adventures, to collect a creature from a ruin to the north",
    "Has an collection of weapons for sale, will allow others to have weapons for free if you they will perform the task"
  ];

  public abilities = {
    strength: 3,
    dexterity: 1,
    constitution: 2,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  };

  public savingThrows = [
    {
      ability: "Str",
      value: 0
    },
    {
      ability: "Dex",
      value: 0
    },
    {
      ability: "Con",
      value: 2
    },
    {
      ability: "Int",
      value: 0
    },
    {
      ability: "Wis",
      value: 0
    },
    {
      ability: "Cha",
      value: 0
    }
  ];

  public skillProficiencies = [
    {
      ability: "Athletics",
      value: 5
    }
  ];

  public resistances = [""];

  public immunities = [""];

  public senses = [
    {
      sense: "",
      value: 0
    }
  ];

  public languages = ["Common"];

  public traits = [""];

  public actions: Action[] = [
    {
      name: "Longsword One Handed",
      dice: "1d8+3",
      reachMax: 5,
      attackBonus: 5,
      attackType: "Slashing Damage",
      allowedInMultipleAttacks: true
    },
    {
      name: "Longsword Two Handed",
      dice: "1d10+3",
      reachMax: 5,
      attackBonus: 5,
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Shortsword",
      dice: "1d6+3",
      reachMax: 5,
      attackBonus: 2,
      attackType: "Slashing",
      allowedInMultipleAttacks: true,
      actionBonus: [
        "If shortsword is drawn, he can also make a shortsword attack (along with double longs sword attacks)."
      ]
    },
    {
      name: "Heavy Crossbow",
      dice: "1d10",
      reachMax: 400,
      reachMin: 100,
      attackBonus: 3,
      attackType: "Piercing"
    }
  ];

  public legendaryActions = [""];
}
