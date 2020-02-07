export class  Action {
  attackType?: string;
  attackBonus?: number;
  name: string;
  dice?: string;
  actionBonus?: string[];
  range?: string;
  numberOfTargets?: number;
  allowedInMultipleAttacks?: boolean;
  attackRoll?: number;
  damageRoll?: number;
}

export class Abilities {
  public strength = 0;
  public dexterity = 0;
  public constitution = 0;
  public intelligence = 0;
  public wisdom = 0;
  public charisma = 0;
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
  public name = "";
  public abilities: Abilities = new Abilities();
  public abilityRoll?: number;
  public maxHitPoints = 0;
  public hitDice: string;
  public currentHitPoints: number;
  public armorClass: number;
  public actions?: Action[] = [];
  public speed: number = 0;
  public savingThrows: Checks[] = [];
  public flySpeed?: number;
  public experience: number;
  public challenge: number;
  public skillProficiencies: Checks[] = [];
  public lastDamageTaken?: number;
  public resistances: string[] = [];
  public immunities: string[] = [];
  public conditionImmunities: string[] = [];
  public vulnerabilities: string[] = [];
  public passivePerception: number = 0;
  public languages: string[] = [];
  public traits: string[] = [];
  public senses: Sense[] = [];
  public link: string;
  public page: number;
  public numberOfActions: number;
  public size: string;
  public alignment: string;
  public legendaryActions: string[] = [];
  public imgUrl?: string;
}

export class CreatureDB {
  static creatures: Creature[] = []
}
