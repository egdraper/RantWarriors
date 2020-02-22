export class  Action {
  public attackType?: string;
  public attackBonus?: number;
  public name: string;
  public dice?: string;
  public actionBonus?: string[];
  public range?: string;
  public numberOfTargets?: number;
  public allowedInMultipleAttacks?: boolean;
  public attackRoll?: number;
  public damageRoll?: number;
  public moreInfo?: boolean;
}

export class Trait {
  public name = "";
  public info = "";
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
  public lastDamageTaken?: number = 0;
  public resistances: string[] = [];
  public immunities: string[] = [];
  public conditionImmunities: string[] = [];
  public vulnerabilities: string[] = [];
  public passivePerception: number = 0;
  public languages: string[] = [];
  public traits: Trait[] = [];
  public senses: Sense[] = [];
  public link: string;
  public page: number;
  public numberOfActions: number;
  public size: string;
  public alignment: string;
  public legendaryActionsInfo?: string;
  public legendaryActions: Trait[] = [];
  public imgUrl?: string;
  public hasAdvantage?: boolean = false;
  public hasDisadvantage?: boolean = false;

}

export class CreatureDB {
  static creatures: Creature[] = []
}
