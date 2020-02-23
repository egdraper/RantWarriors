import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class ErwysSkyratchet implements Creature {
  public name = "Erwys Skyratchet";
  public armorClass = 14;
  public speed = "25ft";
  public challenge = 5;
  public maxHitPoints = 17;
  public currentHitPoints = 1;
  public hitDice = "1d8";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=60";
  public page = 0;
  public passivePerception = 14;
  public experience = 0;
  public numberOfActions = 0;
  public size = "Medium";
  public alignment = "Good";
  public class = "Rogue";
  public relationship = "Player";
  public homeTown = "Serraine";
  public age = 44;
  public imgUrl = "../../../assets/img/skyGnome.png";

  public abilities = {
    strength: 2,
    dexterity: 3,
    constitution: 2,
    intelligence: 3,
    wisdom: 2,
    charisma: 1
  };

  public savingThrows = [
    {
      ability: "Dex",
      value: 5
    },
    {
      ability: "Int",
      value: 5
    }
  ];

  public skillProficiencies = [
    {
      ability: "Acrobatics",
      value: 5
    },
    {
      ability: "Perception",
      value: 5
    },
    {
      ability: "Sleight Of Hand",
      value: 7
    },
    {
      ability: "Stealth",
      value: 7
    },
    {
      ability: "Mechanics Tools",
      value: 7
    },
    {
      ability: "Thieves Tools",
      value: 7
    }
  ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [ {
    sense: "Fog Vision",
    value: 200
  }];

  public languages = ["Common", "Gnome"];

  public traits = [ {
    name: "Gnome Cunning",
    info: "Advantage on all Intelligence, Wisdom, and Charisma saving throws against magic",
  }, {
    name: "Luck",
    info: `50% chance to know any of the following while aboard a flying machine. 1) Approximate height above ground,
           2) Approximate speed; 3) Safety of Maneuvers; 4) Wether weather patterns are natural or in any way affected by magic
           10% increase /3 levels (max 90%)`
  }
  ];

  public actions: Action[] = [
    {
      name: "Rapier",
      dice: "1d8+3",
      range: "5",
      attackBonus: 5,
      attackType: "Slashing"
    },
    {
      name: "ShortBow",
      dice: "1d6+3",
      range: "5",
      attackBonus: 5,
      attackType: "Piercing"
    }
  ];

  public legendaryActions = [];
}
