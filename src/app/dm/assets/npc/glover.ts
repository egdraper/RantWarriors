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
  public numberOfActions = 2;
  public size = "Medium";
  public alignment = "Good";
  public class = "Veteran";
  public relationship = "Random";
  public homeTown = "Clayton";
  public age = 32;
  public imgUrl = "../../../assets/img/glover.jpg";

  public relations = ["Leader of the East Scourge"];

  public notes = [
    "Task: Help him hunt down a witch",
    "Personality: Very capable, leader of the west army"
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
      value: 6
    },
    {
      ability: "Con",
      value: 4
    },
  ];

  public skillProficiencies = [
    {
      ability: "Athletics",
      value: 5
    }
  ];

  public resistances = [];

  public immunities = [];
  
  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = ["Common"];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Longsword",
      dice: "1d10+7",
      reachMax: 5,
      attackBonus: 7,
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    },
    {
      name: "Heavy Crossbow",
      dice: "1d10",
      reachMax: 400,
      reachMin: 100,
      attackBonus: 7,
      attackType: "Piercing"
    }
  ];

  public legendaryActions = [];
}
