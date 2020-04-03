export class  Action {
  public isAttackAction: boolean;
  public isRollableAction: boolean;
  public isNonRollableAction: boolean;
  public attackType?: string;
  public attackModifier?: number;
  public attackUses?: string;
  public bonusDamageType?: string;
  public bonusDamageDice?: string;
  public name: string;
  public dice = "1d4";
  public numberOfRoll = 1;
  public numberOfDiceSides = "d4";
  public actionBonusInfo?: string[];
  public range?: string;
  public numberOfTargets?: number;
  public allowedInMultipleAttacks?: boolean;
  public attackRoll?: number;
  public damageRoll?: number;
  public moreInfo?: boolean;
  public numberOfAttacksAllowed = 1;
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
  public alignment = "Chaotic Evil";
  public armorClass = 10;
  public armorType? = "Natural";
  public assetType?: string;
  public additionalArmor?: number;
  public attackNotes?: string;
  public challenge = "1/8";
  public creatureType = "Monstrosity";
  public humanoidType?: string;
  public conditionImmunities: string[] = [];
  public currentHitPoints: number;
  public experience: number;
  public flySpeed?: number;
  public hasAdvantage?: boolean = false;
  public hasDisadvantage?: boolean = false;
  public hitDice = "d4";
  public hitDiceModifier?: number;
  public imgUrl?: string;
  public immunities: string[] = [];
  public languages: string[] = [];
  public lastDamageTaken?: number = 0;
  public legendaryActions: Trait[] = [];
  public legendaryActionsInfo?: string;
  public level? = 1;
  public link: string;
  public maxHitPoints = 0;
  public name = "";
  public numberOfActions = 1;
  public page: number;
  public passivePerception = 10;
  public proficiency = 2;
  public resistances: string[] = [];
  public savingThrows: Checks[] = [];
  public senses: Sense[] = [];
  public size = "Medium";
  public skillProficiencies: Checks[] = [];
  public speed = "30ft";
  public traits: Trait[] = [];
  public vulnerabilities: string[] = [];
  public multiAttack? = false;
}

export class CreatureDB {
  static creatures: Creature[] = []
}

export class RatingModel {
  public value: number;
  public display: string;
  public selected: boolean;
}