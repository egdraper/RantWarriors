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
  public strength = 10;
  public dexterity = 10;
  public constitution = 10;
  public intelligence = 10;
  public wisdom = 10;
  public charisma = 10;
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
  public abilities: Abilities = new Abilities();
  public abilityRoll?: number;
  public actions?: Action[] = [];
  public alignment?: string = "";
  public armorClass: number;
  public armorType?: string;
  public attackNotes?: string;
  public challenge: number;
  public challengeDisplay?: string;
  public creatureType?: string;
  public conditionImmunities: string[] = [];
  public currentHitPoints: number;
  public experience: number;
  public flySpeed?: number;
  public hasAdvantage?: boolean = false;
  public hasDisadvantage?: boolean = false;
  public hitDice: string;
  public imgUrl?: string;
  public immunities: string[] = [];
  public languages: string[] = [];
  public lastDamageTaken?: number = 0;
  public legendaryActions: Trait[] = [];
  public legendaryActionsInfo?: string;
  public link: string;
  public maxHitPoints = 0;
  public name = "";
  public numberOfActions: number;
  public page: number;
  public passivePerception: number = 0;
  public resistances: string[] = [];
  public savingThrows: Checks[] = [];
  public senses: Sense[] = [];
  public size: string;
  public skillProficiencies: Checks[] = [];
  public speed: string = "";
  public traits: Trait[] = [];
  public vulnerabilities: string[] = [];

}

export class CreatureDB {
  static creatures: Creature[] = []
}
