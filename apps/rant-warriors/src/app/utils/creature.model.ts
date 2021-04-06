export class Action {
  public isAttackAction: boolean;
  public isRollableAction: boolean;
  public isNonRollableAction: boolean;
  public attackType?: string;
  public attackModifier?: number;
  public attackUses?: string;
  public hasBonusDamage = false;
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
  public rangeType?: string;
  public numberOfAttacksAllowed = 1;
}

export class Trait {
  public name: string = "";
  public info: string = "";
  public dice?: string = "";
}

export class Abilities {
  public STR = 10;
  public DEX = 10;
  public CON = 10;
  public INT = 10;
  public WIS = 10;
  public CHA = 10;
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
  public abilities?: Abilities;
  public abilityRoll?: number;
  public actions?: Action[]
  public alignment?: string;
  public armorClass?: number;
  public armorType?: string;
  public assetType?: string;
  public additionalArmor?: number;
  public attackNotes?: string;
  public challenge?: string;
  public creatureType?: string;
  public humanoidType?: string;
  public conditionImmunities?: string[];
  public currentHitPoints?: number;
  public experience?: number;
  public globalAsset?: boolean;
  public hasAdvantage?: boolean;
  public hasDisadvantage?: boolean;
  public hitDice?: string;
  public hitDiceModifier?: number;
  public imgUrl?: string;
  public immunities?: string[];
  public languages?: string[];
  public lastDamageTaken?: number;
  public legendaryActions?: Trait[];
  public legendaryActionsInfo?: string;
  public level?: number;
  public link?: string;
  public maxHitPoints?: number;
  public name?: string;
  public numberOfActions?: number;
  public page?: number;
  public passivePerception?: number;
  public proficiency?: number;
  public selectedAggressor?: any
  public resistances?: string[];
  public savingThrows?: Checks[];
  public senses?: Sense[];
  public size?: string;
  public skillProficiencies?: Checks[];
  public skillExpertise?: Checks[];
  public speed?: string;
  public traits?: Trait[];
  public vulnerabilities?: string[];
  public multiAttack?: boolean;
  public hasLegendaryActions?: boolean;
  public editing?: boolean;
  public shield?: boolean
}

export class CreatureDB {
  static creatures: Creature[] = []
}

export class RatingModel {
  public value: number;
  public display: string;
  public selected: boolean;
}

export class WeaponsModel {
  public name: string
  public cost: string
  public damage: string
  public damageType: string
  public range: string
  public reach: number
  public weight: string
  public attributes: string[]
  public weaponClass: string
  public usesAbility: string | string[]
}