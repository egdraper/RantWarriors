import { Creature, Abilities, Action, Trait, Checks, Sense } from "../creature.model";

export class Asset {
    public abilities: Abilities = new Abilities();
    public abilityRoll?: number;
    public actions?: Action[] = [];
    public additionalArmor?: number;
    public alignment = "Chaotic Evil";
    public armorClass = 10;
    public armorType = "Natural";
    public assetType: string;
    public attackNotes: string;
    public challenge = "1/8";
    public conditionImmunities: string[] = [];
    public creatureType = "Monstrosity";
    public currentHitPoints: number;
    public editing = true;
    public experience: number;
    public flySpeed?: number;
    public hasAdvantage = false;
    public hasDisadvantage = false;
    public hasLegendaryActions?: boolean;
    public hitDice = "d4";
    public hitDiceModifier?: number;
    public humanoidType?: string;
    public imgUrl?: string;
    public immunities: string[] = [];
    public languages: string[] = [];
    public lastDamageTaken = 0;
    public legendaryActions: Trait[] = [];
    public legendaryActionsInfo?: string;
    public level = 1;
    public link: string;
    public maxHitPoints = 0;
    public multiAttack = false;
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

    constructor(creature: Creature) {
    }
}