import {
  Creature,
  Abilities,
  Action,
  Trait,
  Checks,
  Sense
} from "../creature.model";
import { Constants } from "./constants";

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

  constructor(creature: Creature = null) {
    if (creature) {
      this.abilities = this.abilities;
      this.abilityRoll = this.abilityRoll;
      this.actions = this.actions;
      this.additionalArmor = this.additionalArmor;
      this.alignment = this.alignment;
      this.armorClass = this.armorClass;
      this.armorType = this.armorType;
      this.assetType = this.assetType;
      this.attackNotes = this.attackNotes;
      this.challenge = this.challenge;
      this.conditionImmunities = this.conditionImmunities;
      this.creatureType = this.creatureType;
      this.currentHitPoints = this.currentHitPoints;
      this.editing = this.editing;
      this.experience = this.experience;
      this.flySpeed = this.flySpeed;
      this.hasAdvantage = this.hasAdvantage;
      this.hasDisadvantage = this.hasDisadvantage;
      this.hasLegendaryActions = this.hasLegendaryActions;
      this.hitDice = this.hitDice;
      this.hitDiceModifier = this.hitDiceModifier;
      this.humanoidType = this.humanoidType;
      this.imgUrl = this.imgUrl;
      this.immunities = this.immunities;
      this.languages = this.languages;
      this.lastDamageTaken = this.lastDamageTaken;
      this.legendaryActions = this.legendaryActions;
      this.legendaryActionsInfo = this.legendaryActionsInfo;
      this.level = this.level;
      this.link = this.link;
      this.maxHitPoints = this.maxHitPoints;
      this.multiAttack = this.multiAttack;
      this.name = this.name;
      this.numberOfActions = this.numberOfActions;
      this.page = this.page;
      this.passivePerception = this.passivePerception;
      this.proficiency = this.proficiency;
      this.resistances = this.resistances;
      this.savingThrows = this.savingThrows;
      this.senses = this.senses;
      this.size = this.size;
      this.skillProficiencies = this.skillProficiencies;
      this.speed = this.speed;
      this.traits = this.traits;
      this.vulnerabilities = this.vulnerabilities;
    }
  }

  public updateAbility(ability: string): void {
    // update attack
    this.actions.forEach(action => {
      if (action.attackUses === ability) {
        this.updateDamageDice(action);
        this.updateAttackDice(action);
      }
    });

    // update AC

    if (ability === "STR") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
    }
    if (ability === "DEX") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
      this.updateArmorClass();
    }
    if (ability === "CON") {
      this.createHitDice();
      this.updateSavingThrows(ability);
    }
    if (ability === "WIS") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
    }
    if (ability === "INT") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
    }
    if (ability === "CHA") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
    }
  }

  public updateDamageDice(action: Action): void {
    const ability = action.attackUses;
    const modifier = Constants.getAbilityModifier(this.abilities[ability]);
    const attackModifier = modifier ? `+${modifier}` : "";
    action.dice = `${action.numberOfRoll}${action.numberOfDiceSides}${attackModifier}`;
  }

  public updateChallengeRating(): void {
    this.actions.forEach(action => {
      if (action.attackModifier) {
        this.updateAttackDice(action);
        this.updateSkillProficiency();
      }
    });

    Constants.abilities.forEach(ability => {
      this.updateSavingThrows(ability);
    });

    this.updateSkillProficiency();
  }

  public updateAttackDice(action: Action): void {
    const modifier = Constants.getAbilityModifier(
      this.abilities[action.attackUses]
    );
    action.attackModifier = this.proficiency + modifier;
  }

  public createHitDice(): void {
    const level = this.level || "";
    const modifier =
      Constants.getAbilityModifier(this.abilities.CON) *
      (level ? Number(level) : 1);
    const thing = modifier > 0 ? "+" : "";
    const dice = Constants.sizes.find(s => this.size === s.name).dice;
    const sizeMultiplier = Constants.sizes.find(s => this.size === s.name)
      .multiplier;

    this.hitDice = `${level}${dice}${thing}${
      modifier > 0 ? modifier : modifier < 0 ? modifier : ""
    }`;
    this.hitDiceModifier = modifier;

    this.maxHitPoints = Math.floor(
      (this.level ? this.level : 1) * sizeMultiplier +
        this.hitDiceModifier
    );
    this.currentHitPoints = this.maxHitPoints;
  }

  public addSkillProficiency(skill: string): void {
    if (this.skillProficiencies.find(s => s.ability === skill)) {
      return;
    }

    const newValue = Constants.getAbilityModifier(
      this.abilities[Constants.getAbilityBySkill(skill)]
    );

    this.skillProficiencies.push({
      value: newValue + this.proficiency,
      ability: skill
    });
  }

  public updateSkillProficiency(): void {
    this.skillProficiencies.forEach(s => {
      const ability = Constants.getAbilityBySkill(s.ability);
      s.value =
        Constants.getAbilityModifier(this.abilities[ability]) +
        this.proficiency;
    });
  }

  public addSavingThrows(ability: string): void {
    if (
      this.savingThrows.find(savingThrow => savingThrow.ability === ability)
    ) {
      return;
    }
    const newValue =
      Constants.getAbilityModifier(this.abilities[ability]) +
      this.proficiency;

    this.savingThrows.push({
      value: newValue,
      ability
    });
  }

  public updateSavingThrows(ability: string): void {
    const newValue =
      Constants.getAbilityModifier(this.abilities[ability]) +
      this.proficiency;
    const savingThrows = this.savingThrows.find(
      savingThrow => savingThrow.ability === ability
    );

    if (savingThrows) {
      savingThrows.value = newValue;
    }
  }

  public updateArmorClass(): void {
    if (!this.armorType || this.armorType === "Natural") {
      this.armorClass =
        10 +
        Constants.getAbilityModifier(this.abilities.DEX) +
        (this.additionalArmor || 0);
      return;
    }

    const armorType = Constants.armor.find(a => a.name === this.armorType);
    this.armorClass = armorType.acBonus;
    this.armorType = armorType.name;

    if (armorType.plus) {
      this.armorClass +=
        this.abilities.DEX > 2 && armorType.max
          ? 2
          : Constants.getAbilityModifier(this.abilities.DEX);
    }
  }

  public updateAction(actionName: string): void {}
}
