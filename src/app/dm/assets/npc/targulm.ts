import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Targulm implements Npc {
  public name = "Targulm Haven";
  public armorClass = 15;
  public speed = 25;
  public challenge = 1;
  public maxHitPoints = 25;
  public currentHitPoints = 25;
  public hitDice = "4d10+4";
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
  public age = 44;
  public imgUrl = "../../../assets/img/targulm.jpg";

  public relations = [
    "Stage Coach Driver",
  ];

  public notes = [
    "Task: Needs a new set of horses for Barbum",
    "Personality: Rude, tired, and doesn't like people or animals"
  ];

  public abilities = {
    strength: 2,
    dexterity: 0,
    constitution: 1,
    intelligence: 1,
    wisdom: 0,
    charisma: 2
  };

  public savingThrows = [ ];

  public skillProficiencies = [
    {
      ability: "Intimidation",
      value: 4
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
      name: "Hand Axe",
      dice: "1d6+2",
      range: "5",
      attackBonus: 3,
      attackType: "Slashing"
  } ];

  public legendaryActions = [];
}
