import { Creature, Action } from "../creature.model";

export class Quasit implements Creature {
  public name = "Quasit";
  public armorClass = 13;
  public speed = 40;
  public challenge = 1;
  public maxHitPoints = 7;
  public currentHitPoints = 7;
  public hitDice = "3d4";
  public flySpeed = 0;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=64";
  public page = 64;
  public passivePerception = 10;
  public experience = 200;
  public numberOfActions = 1;
  public size = "Tiny";
  public alignment = "Evil";
  public imgUrl = "../../../assets/img/quasit.jpeg";

  public abilities = {
    strength: -3,
    dexterity: 3,
    constitution: 0,
    intelligence: -2,
    wisdom: 0,
    charisma: 0
  };

  public savingThrows = [];

  public skillProficiencies = [
    {
      ability: "Stealth",
      value: 5
    }
  ];

  public resistances = [
    "Cold",
    "Fire",
    "Lightning",
    "Bludgeoning, piercing, and slashing from non magical weapons"
  ];

  public immunities = ["Poison"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public senses = [
    {
      sense: "Dark Vision",
      value: 120
    }
  ];

  public languages = ["Abysmal", "Common"];

  public traits = [
    {
      name: "Shape Changer",
      info: `The quasit can use its action to Polymorph into a beast form that resembles a bat
        (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.),
        or back into its true form . Its Statistics are the same in each form,
        except for the speed changes noted. Any Equipment it is wearing or carrying isn't transformed .
        It reverts to its true form if it dies.`
    },
    {
      name: "Magic Resistance",
      info: `The quasit has advantage on Saving Throws against Spells and other magical Effects.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Claws",
      attackType: "Piercing",
      attackBonus: 4,
      range: "5",
      dice: "1d4+3",
      actionBonus: [
        "Target must succeed DC 10 Const saving throw or take 2d4 damage and be poisoned for 1 minute. See Book"
      ]
    },
    {
      name: "Scare",
      actionBonus: [
        "Target must succeed DC 10 Wis saving throw or be scared for 1 minute. See Book"
      ]
    },
    {
      name: "Invisibility"
    }
  ];

  public legendaryActions = [];
}
