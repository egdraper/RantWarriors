import { Creature, Action } from "../creature.model";

export class Mane implements Creature {
  public name = "Mane";
  public armorClass = 9;
  public speed = 20;
  public challenge = .125;
  public maxHitPoints = 9;
  public currentHitPoints = 9;
  public hitDice = "2d6+2";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=60";
  public page = 60;
  public passivePerception = 9;
  public experience = 25;
  public numberOfActions = 0;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/mane.jpg";

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
      name: "Claw",
      attackType: "Slashing",
      attackBonus: 2,
      reachMax: 5,
      dice: "2d4"
   }
  ];

  public legendaryActions = [];
}
