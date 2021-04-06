import { Creature, Abilities, Action, Trait, Checks, Sense } from "./creature.model";
import { Constants } from "./constants";
import { remove } from "lodash";
import { BehaviorSubject } from "rxjs";

export class Asset implements Creature {
  public abilities: Abilities = new Abilities();
  public abilityRoll?: number;
  public actions?: Action[] = [];
  public additionalArmor = 0;
  public alignment = "Chaotic Evil";
  public armorClass = 10;
  public armorType = "Natural";
  public assetType: string;
  public attackNotes: string;
  public challenge = "1/8";
  public conditionImmunities: string[] = [];
  public creatureType = "Monstrosity";
  public currentHitPoints = 2;
  public editing = true;
  public experience = 25;
  public globalAsset = false;
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
  public maxHitPoints = 2;
  public multiAttack = false;
  public name = "";
  public numberOfActions = 1;
  public page: number;
  public passivePerception = 10;
  public proficiency = 2;
  public resistances: string[] = [];
  public savingThrows: Checks[] = [];
  public selectedAggressor: Creature;
  public senses: Sense[] = [];
  public size = "Medium";
  public skillProficiencies: Checks[] = [];
  public skillExpertise: Checks[] = [];
  public speed = "30ft";
  public traits: Trait[] = [];
  public vulnerabilities: string[] = [];
  public shield: boolean = false

  public attackers: Asset[] = [];

  // subscriptions

  public traitChange = new BehaviorSubject<Trait>(null);
  public legendaryActionChange = new BehaviorSubject<Trait>(null);
  public actionChange = new BehaviorSubject<any>(null);

  constructor(creature: Creature = null) {
    if (creature) {
      this.abilities = creature.abilities;
      this.abilityRoll = creature.abilityRoll;
      this.actions = creature.actions;
      this.additionalArmor = creature.additionalArmor;
      this.alignment = creature.alignment;
      this.armorClass = creature.armorClass;
      this.armorType = creature.armorType;
      this.assetType = creature.assetType;
      this.attackNotes = creature.attackNotes;
      this.challenge = creature.challenge;
      this.conditionImmunities = creature.conditionImmunities;
      this.creatureType = creature.creatureType;
      this.currentHitPoints = creature.currentHitPoints;
      this.editing = creature.editing;
      this.experience = creature.experience;
      this.globalAsset = creature.globalAsset;
      this.hasAdvantage = creature.hasAdvantage;
      this.hasDisadvantage = creature.hasDisadvantage;
      this.hasLegendaryActions = creature.hasLegendaryActions;
      this.hitDice = creature.hitDice;
      this.hitDiceModifier = creature.hitDiceModifier;
      this.humanoidType = creature.humanoidType;
      this.imgUrl = creature.imgUrl;
      this.immunities = creature.immunities;
      this.languages = creature.languages;
      this.lastDamageTaken = creature.lastDamageTaken;
      this.legendaryActions = creature.legendaryActions;
      this.legendaryActionsInfo = creature.legendaryActionsInfo;
      this.level = creature.level;
      this.link = creature.link;
      this.maxHitPoints = creature.maxHitPoints;
      this.multiAttack = creature.multiAttack;
      this.name = creature.name;
      this.numberOfActions = creature.numberOfActions;
      this.page = creature.page;
      this.passivePerception = creature.passivePerception;
      this.proficiency = creature.proficiency;
      this.selectedAggressor = creature.selectedAggressor
      this.resistances = creature.resistances;
      this.savingThrows = creature.savingThrows;
      this.senses = creature.senses;
      this.size = creature.size;
      this.skillProficiencies = creature.skillProficiencies;
      this.skillExpertise = creature.skillExpertise;
      this.speed = creature.speed;
      this.traits = creature.traits;
      this.vulnerabilities = creature.vulnerabilities;
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
      this.updateSkillExpertise();
    }
    if (ability === "DEX") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
      this.updateArmorClass();
      this.updateSkillExpertise();
    }
    if (ability === "CON") {
      this.createHitDice();
      this.updateSavingThrows(ability);
    }
    if (ability === "WIS") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
      this.updatePassivePerception();
      this.updateSkillExpertise();
    }
    if (ability === "INT") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
      this.updateSkillExpertise();
    }
    if (ability === "CHA") {
      this.updateSavingThrows(ability);
      this.updateSkillProficiency();
      this.updateSkillExpertise();
    }
  }

  public updateDamageDice(action: Action): void {
    const ability = action.attackUses;
    const modifier = Constants.getAbilityModifier(this.abilities[ability]);
    const damageModifier = modifier ? `+${modifier}` : "";
    action.dice = `${action.numberOfRoll}${action.numberOfDiceSides}${damageModifier}`;
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
    this.updatePassivePerception();
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

    this.updateSkillProficiency()
    if(skill === "Perception") { this.updatePassivePerception() }
  }

  public updateSkillProficiency(): void {
    this.skillProficiencies.forEach(s => {
      const ability = Constants.getAbilityBySkill(s.ability);
      s.value = Constants.getAbilityModifier(this.abilities[ability]) + this.proficiency;
      if(s.ability === "Perception") { this.updatePassivePerception() }
    });
  }

  public addSkillExpertise(skill: string): void {
    debugger
    if (this.skillExpertise.find(s => s.ability === skill)) {
      return;
    }

    const newValue = Constants.getAbilityModifier(
      this.abilities[Constants.getAbilityBySkill(skill)]
    );

    this.skillExpertise.push({
      value: newValue + this.proficiency + this.proficiency,
      ability: skill
    });

    this.updateSkillExpertise()
    if(skill === "Perception") { this.updatePassivePerception() }
  }

  public updateSkillExpertise(): void {
    this.skillExpertise.forEach(s => {
      const ability = Constants.getAbilityBySkill(s.ability);
      s.value = Constants.getAbilityModifier(this.abilities[ability]) + (this.proficiency * 2);
      if(s.ability === "Perception") { this.updatePassivePerception() }
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

  public updatePassivePerception(): void {
    const proficient = this.skillProficiencies.find(proficiency => proficiency.ability === "Perception" )
    this.passivePerception = 10 + Constants.getAbilityModifier(this.abilities.WIS) + (proficient ? this.proficiency: 0)
  }

  public ModifyAction(eventAction: string, action: Action): void {
    if (eventAction === "delete") {
      remove(this.actions, a => action.name === a.name);
    } else if (eventAction === "edit") {
      this.actionChange.next({action, name: "Update"});
    } else if (eventAction === "file_copy") {
      this.actionChange.next({action, name: "Duplicate"});
    }
  }

  public modifyTrait(action: string, trait: Trait): void {
    if (action === "delete") {
      remove(this.traits, t => trait.name === t.name);
    } else if (action === "edit") {
      this.traitChange.next(trait);
    }
  }

  public modifyLegendaryAction(action: string, trait: Trait): void {
    if (action === "delete") {
      remove(this.legendaryActions, t => trait.name === t.name);
    } else if (action === "edit") {
      this.legendaryActionChange.next(trait);
    }
  }

  public removeLanguage(language: string): void {
    remove(this.languages, l => l === language);
  }

  public removeSense(sense: string): void {
    remove(this.senses, s => s === sense);
  }

  public removeSavingThrow(savingThrow: Checks): void {
    remove(this.savingThrows, l => l.ability === savingThrow.ability);
  }

  public removeProficiency(proficiency: Checks): void {
    remove(this.skillProficiencies, l => l.ability === proficiency.ability);
    if(proficiency.ability === "Perception") { this.updatePassivePerception() }
  }

  public removeExpertise(proficiency: Checks): void {
    remove(this.skillExpertise, l => l.ability === proficiency.ability);
    if(proficiency.ability === "Perception") { this.updatePassivePerception() }
  }

  public removeVulnerability(vulnerability: string): void {
    remove(this.vulnerabilities, v => v === vulnerability);
  }

  public removeImmunity(immunity: string): void {
    remove(this.immunities, i => i === immunity);
  }

  public removeResistance(resistance: string): void {
    remove(this.resistances, r => r === resistance);
  }

  public removeConditionImmunity(conditionImmunity): void {
    remove(this.conditionImmunities, c => c === conditionImmunity);
  }
}
