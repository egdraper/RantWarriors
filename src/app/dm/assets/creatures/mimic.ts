import { Creature, Action } from "../creature.model";

export class Mimic implements Creature {
  public name = "Mimic";
  public armorClass = 12;
  public speed = "20ft";
  public challenge = 2;
  public maxHitPoints = 58;
  public currentHitPoints = 58;
  public hitDice = "9d8+18";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=220";
  public page = 220;
  public passivePerception = 11;
  public experience = 450;
  public numberOfActions = 1;
  public size = "Medium";
  public alignment = "Chaotic Evil";
  public imgUrl = "../../assets/img/mimic.jpeg";

  public abilities = {
    strength: 3,
    dexterity: 1,
    constitution: 2,
    intelligence: -3,
    wisdom: 1,
    charisma: -1
  };

  public savingThrows = [];

  public skillProficiencies = [
    {
      ability: "Stealth",
      value: 5
    }
  ];

  public resistances = [];

  public immunities = ["Poison"];

  public conditionImmunities = ["Prone"];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Darkvision",
      value: 60
    }
  ];

  public languages = [];

  public traits = [
    {
      name: "Shapechanger",
      info: `The mimic can use its action to Polymorph into an object or back into its true,
        amorphous form. Its Statistics are the same in each form. Any Equipment it is wearing
        or carrying isn 't transformed. It reverts to its true form if it dies.`
    },
    {
      name: "Adhesive",
      info: `The mimic adheres to anything that touches it. A Huge or smaller creature adhered to
        the mimic is also Grappled by it (escape DC 13). Ability Checks made to escape this grapple
        have disadvantage.
      `
    },
    {
      name: "False Appearance",
      info: `While the mimic remains motionless, it is indistinguishable from an ordinary object.`
    },
    {
      name: "Grappler",
      info: `The mimic has advantage on Attack rolls against any creature Grappled by it.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Pseudopod",
      attackBonus: 5,
      range: "5",
      dice: "1d8+3",
      attackType: "Bludgeoning",
      actionBonus: [
        "If the mimic is in object form, the target is subjected to its Adhesive trait"
      ]
    },
    {
      name: "Bite",
      attackBonus: 5,
      range: "5",
      dice: "1d8+3",
      attackType: "Piercing"
    }
  ];

  public legendaryActions = [];
}
