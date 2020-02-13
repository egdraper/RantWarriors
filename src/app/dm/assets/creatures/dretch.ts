import { Creature, Action } from "../creature.model";

export class Dretch implements Creature {
  public challenge = .25;
  public name = "Dretch";
  public maxHitPoints = 18;
  public currentHitPoints = 18;
  public hitDice = "4d6+4";
  public armorClass = 11;
  public speed = 20;
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=59";
  public page = 59;
  public passivePerception = 9;
  public experience = 50;
  public numberOfActions = 2;
  public size = "Small";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/dretch.jpeg";

  public abilities = {
    strength: 0,
    dexterity: 0,
    constitution: 1,
    intelligence: -3,
    wisdom: -1,
    charisma: -4,
  };

  public savingThrows = [
    {
      ability: "Str",
      value: 1
    },
  ];

  public skillProficiencies = [ ];

  public resistances = ["Cold", "Fire", "Lightning"];

  public immunities = ["Poison"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    },
  ];

  public languages = ["Abyssal, Telepathy 60ft (Only works if creature knows Abyssal"];

  public traits = [];

  public actions: Action[] = [
    {
      name: "Bite",
      attackBonus: 2,
      dice: "1d6",
      attackType: "Piercing",
      range: "5",
      allowedInMultipleAttacks: true,
    },
    {
      name: "Claws",
      attackBonus: 2,
      dice: "2d4",
      attackType: "Slashing",
      range: "5",
      allowedInMultipleAttacks: true,
    },
    {
      name: "Fetid Cloud",
      range: "10",
      actionBonus: [`(1/Day). A 10-foot radius of disgusting green gas extends out from the dretch.
        The gas spreads around corners, and its area is lightly obscured.
        It lasts for 1 minute or until a strong wind disperses it.
        Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving
        throw or be poisoned until the start of its next turn. While poisoned in this way, the target
        can take either an action or a bonus action on its turn, not both, and can't take reactions.`
      ],
    },

  ];

  public legendaryActions = [];
}
