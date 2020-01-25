import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Hadari implements Npc {
  public name = "Hadari";
  public armorClass = 16;
  public speed = 30;
  public challenge = 2;
  public maxHitPoints = 45;
  public currentHitPoints = 45;
  public hitDice = "6d10+12";
  public flySpeed = 0;
  public link = "";
  public page = 0;
  public passivePerception = 14;
  public experience = 450;
  public numberOfActions = 0;
  public size = "Medium";
  public alignment = "Good";
  public class = "Elf";
  public relationship = "Random";
  public homeTown = "Lander";
  public age = 43;
  public imgUrl = "../../../assets/img/hadari.jpg";

  public relations = ["3rd Son of the High King Deamarn"];

  public notes = [
    "Task: Help track down a Dwarven settlement",
    "Personality: Very compitent, battle ready, skilled at many things "
  ];

  public abilities = {
    strength: 1,
    dexterity: 4,
    constitution: 2,
    intelligence: 0,
    wisdom: 3,
    charisma: 1
  };

  public savingThrows = [
    {
      ability: "Dex",
      value: 7
    },
    {
      ability: "Cons",
      value: 4
    }
  ];

  public skillProficiencies = [
    {
      ability: "Stealth",
      value: 6
    },
    {
      ability: "Investigation",
      value: 9
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

  public languages = ["Common", "Elvish", "Dwarfish"];

  public traits = [""];

  public actions: Action[] = [
    {
      name: "Long Bow",
      dice: "1d8+6",
      reachMax: 600,
      reachMin: 150,
      attackBonus: 6,
      attackType: "Piercing"
    },
    {
      name: "Short Sword",
      dice: "1d6+3",
      reachMax: 5,
      attackBonus: 6,
      attackType: "Piercing"
    }
  ];

  public legendaryActions = [""];
}
