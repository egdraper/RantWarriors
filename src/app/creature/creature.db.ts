export class Action {
  attackType?: string;
  attackBonus?: number;
  name: string;
  dice?: string;
  actionBonus?: string[];
  reachMin?: number;
  reachMax?: number;
  numberOfTargets?: number;
  allowedInMultipleAttacks?: boolean;
}

export class Abilities {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
}

export class Checks {
  public ability: string;
  public value: number;
}

export class Sense {
  public sense: string;
  public value: number;
}

export class Creature {
  public name: string;
  public abilities: Abilities;
  public maxHitPoints: number;
  public currentHitPoints: number;
  public armorClass: number;
  public actions?: Action[];
  public speed: number;
  public savingThrows: Checks[];
  public flySpeed?: number;
  public experience: number;
  public challenge: number;
  public skillProficiencies: Checks[];
  public lastDamageTaken?: number;
  public resistances: string[];
  public immunities: string[];
  public passivePerception: number;
  public languages: string[];
  public traits: string[];
  public senses: Sense[];
  public link: string;
  public page: number;
  public numberOfActions: number;
  public size: string;
  public alignment: string;
  public legendaryActions: string[];
}

export class CreatureDB {
  static creatures: Creature[] = [
    {

    },
    {
      challeng: 0.5,
      name: "Deep Gnome",
      maxHitPoints: 16,
      currentHitPoints: 16,
      armorClass: 15,
      speed: 20,
      experience: 100,
      attacks: [
        {
          name: "War Pick",
          type: "Melee Weapon Attack",
          attackBonus: 4,
          reachMin: 5,
          reachMax: 5,
          numberOfTargets: 1
        }
      ]
    },
    {
      challenge: 0.5,
      name: "Gnoll",
      maxHitPoints: 30,
      currentHitPoints: 30,
      armorClass: 15,
      speed: 30,
      experience: 100,
      attacks: [
        {
          name: "Bite",
          type: "Melee Weapon Attack",
          attackBonus: 4,
          reachMin: 5,
          reachMax: 5,
          numberOfTargets: 1
        },
        {
          name: "Spear",
          type: "Melee Weapon Attack",
          attackBonus: 4,
          reachMin: 5,
          reachMax: 5,
          numberOfTargets: 1
        },
        {
          name: "Spear Throw",
          type: "Melee Weapon Attack",
          attackBonus: 4,
          reachMin: 20,
          reachMax: 60,
          numberOfTargets: 1
        },
        {
          name: "Long Bow",
          type: "Melee Weapon Attack",
          attackBonus: 3,
          reachMin: 150,
          reachMax: 600,
          numberOfTargets: 1
        }
      ]
    }
  ];
}
