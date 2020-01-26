import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Barbum implements Npc {
  public name = "Barbum";
  public armorClass = 13;
  public speed = 25;
  public challenge = 0;
  public maxHitPoints = 4;
  public currentHitPoints = 4;
  public hitDice = "1d8";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=60";
  public page = 0;
  public passivePerception = 12;
  public experience = 0;
  public numberOfActions = 0;
  public size = "Medium";
  public alignment = "Good";
  public class = "Commoner";
  public relationship = "Random";
  public homeTown = "Winswich";
  public age = 55;
  public imgUrl = "../../../assets/img/barbin.png";

  public relations = [
    "Bartender in Winswich",
  ];

  public notes = [
    "Task: Has a task for the adventures, to collect a creature from a ruin to the north",
    "Has an collection of weapons for sale, will allow others to have weapons for free if you they will perform the task"
  ];

  public abilities = {
    strength: 1,
    dexterity: -2,
    constitution: 0,
    intelligence: 1,
    wisdom: 2,
    charisma: 0
  };

  public savingThrows = [];

  public skillProficiencies = [];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [ ];

  public languages = ["Common"];

  public traits = [];

  public actions: Action[] = [ {
      name: "Club",
      dice: "1d4+1",
      reachMax: 5,
      attackBonus: 2,
      attackType: "Bludgeoning"
  } ];

  public legendaryActions = [];
}
