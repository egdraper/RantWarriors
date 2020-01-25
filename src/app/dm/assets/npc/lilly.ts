import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Lilly implements Npc {
  public name = "Lilly";
  public armorClass = 11;
  public speed = 30;
  public challenge = 0;
  public maxHitPoints = 4;
  public currentHitPoints = 4;
  public hitDice = "1d8";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=347";
  public page = 347;
  public passivePerception = 12;
  public experience = 0;
  public numberOfActions = 0;
  public size = "Medium";
  public alignment = "Good";
  public class = "Commoner";
  public relationship = "Random";
  public homeTown = "Farm Lands";
  public age = 12;
  public imgUrl = "../../../assets/img/lilly.jpg";

  public relations = [
    "Young girl found at farm",
  ];

  public notes = [
    "Task: Get them to Clayton to say with their aunt",
    "Farm burned Down"
  ];

  public abilities = {
    strength: -2,
    dexterity: 2,
    constitution: 0,
    intelligence: 3,
    wisdom: 0,
    charisma: 1
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
      ability: "Const",
      value: 0
    }
  ];

  public resistances = [""];

  public immunities = [""];

  public senses = [
    {
      sense: "",
      value: 0
    },
  ];

  public languages = ["Common"];

  public traits = [""];

  public actions: Action[] = [ {
      name: "Dagger",
      dice: "1d4+2",
      reachMax: 5,
      attackBonus: 2,
      attackType: "Piercing"
  } ];

  public legendaryActions = [""];
}