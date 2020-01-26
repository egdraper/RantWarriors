import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Markin implements Npc {
  public name = "Markin";
  public armorClass = 16;
  public speed = 25;
  public challenge = 1;
  public maxHitPoints = 33;
  public currentHitPoints = 33;
  public hitDice = "5d8+5";
  public flySpeed = 0;
  public link = "";
  public page = 0;
  public passivePerception = 13;
  public experience = 200;
  public numberOfActions = 0;
  public size = "Medium";
  public alignment = "Good";
  public class = "Commoner";
  public relationship = "Random";
  public homeTown = "Lander";
  public age = 43;
  public imgUrl = "../../../assets/img/markin.jpg";

  public relations = [
    "Noble Magistrate in Lander",
  ];

  public notes = [
    "Task: Needs help finding kidnapped kids",
    "Personality: Over zealous, loud and obnoxious, very arrogant "
  ];

  public abilities = {
    strength: 2,
    dexterity: 0,
    constitution: 2,
    intelligence: 1,
    wisdom: 0,
    charisma: 3
  };

  public savingThrows = [
    {
      ability: "Str",
      value: 2
    },
  ];

  public skillProficiencies = [
    {
      ability: "Persuasion",
      value: 6
    }
  ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [ ];

  public languages = ["Common"];

  public traits = [];

  public actions: Action[] = [ {
      name: "Short Sword",
      dice: "1d6+3",
      reachMax: 5,
      attackBonus: 5,
      attackType: "Piercing"
  } ];

  public legendaryActions = [ ];
}
