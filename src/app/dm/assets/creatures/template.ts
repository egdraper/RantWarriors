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
  public imgUrl = "";

  public abilities = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = [];

  public traits = [];

  public actions: Action[] = [
    {
      name: "",
      attackBonus: 0,
      reachMax: 5,
      dice: "",
      attackType: "",
    }
  ];

  public legendaryActions = [];
}
