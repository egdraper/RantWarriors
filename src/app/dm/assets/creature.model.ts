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
  attackRoll?: number;
  damageRoll?: number;
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
  public abilityRoll?: number;
  public maxHitPoints: number;
  public hitDice: string;
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
  public conditionImmunities: string[];
  public vulnerabilities: string[];
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
  public imgUrl?: string;
}

export class CreatureDB {
  static creatures: Creature[] = []
}
