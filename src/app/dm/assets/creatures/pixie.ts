import { Creature, Action } from "../creature.model";

export class Pixie implements Creature {
  public name = "Pixie";
  public armorClass = 15;
  public speed = 10;
  public challenge = .25;
  public maxHitPoints = 1;
  public currentHitPoints = 1;
  public hitDice = "1d4-1";
  public flySpeed = 30;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=254";
  public page = 254;
  public passivePerception = 14;
  public experience = 50;
  public numberOfActions = 1;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/pixie.jpg";

  public abilities = {
    strength: -4,
    dexterity: 5,
    constitution: -1,
    intelligence: 0,
    wisdom: 2,
    charisma: 2
  };

  public savingThrows = [ ];

  public skillProficiencies = [ ];

  public resistances = [];

  public immunities = [];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [];

  public languages = [];

  public traits = ["Magic Resistance", "Innate Spellcasting"];

  public actions: Action[] = [
    {
      name: "Superior Invisibility",
    }
  ];

  public legendaryActions = [];
}
