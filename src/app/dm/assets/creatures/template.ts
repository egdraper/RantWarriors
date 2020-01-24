import { Creature, Action } from "../creature.model";

export class Template implements Creature {
  public name = "";
  public armorClass = 0;
  public speed = 0;
  public challenge = 0;
  public maxHitPoints = 0;
  public currentHitPoints = 0;
  public hitDice = "";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=60";
  public page = 0;
  public passivePerception = 0;
  public experience = 0;
  public numberOfActions = 0;
  public size = "Small";
  public alignment = "Evil";

  public abilities = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
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
      value: 0
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

  public languages = [""];

  public traits = [""];

  public actions: Action[] = [ ];

  public legendaryActions = [""];
}
