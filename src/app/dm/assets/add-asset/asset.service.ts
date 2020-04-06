import { Injectable } from "@angular/core";
import { Creature, Action, Abilities } from "../creature.model";
import { Constants } from "./constants";

export class AssetService {
  public static addAsset(creature: Creature): void {}

  public static removeAsset(creatureName: string, type: string): void {}

  public static editAsset(newCreatureModel: Creature): void {}

  public static updateAbility(
    creature: Creature,
    ability: string,
  ): void {
    // update attack
    creature.actions.forEach(action => {
      if (action.attackUses === ability) {
        this.updateDamageDice(creature, action);
        this.updateAttackDice(creature, action);
      }
    });

    // update AC

    if (ability === "STR") {
      this.updateSavingThrows(creature, ability);
      this.updateSkillProficiency(creature);
    }
    if (ability === "DEX") {
      this.updateSavingThrows(creature, ability);
      this.updateSkillProficiency(creature);
      this.updateArmorClass(creature);
    }
    if (ability === "CON") {
      this.createHitDice(creature);
      this.updateSavingThrows(creature, ability);
    }
    if (ability === "WIS") {
      this.updateSavingThrows(creature, ability);
      this.updateSkillProficiency(creature);
    }
    if (ability === "INT") {
      this.updateSavingThrows(creature, ability);
      this.updateSkillProficiency(creature);
    }
    if (ability === "CHA") {
      this.updateSavingThrows(creature, ability);
      this.updateSkillProficiency(creature);
    }
  }

  public static updateDamageDice(creature: Creature, action: Action): void {
    const ability = action.attackUses;
    const modifier = Constants.getAbilityModifier(
      creature.abilities[ability]
    );
    const attackModifier = modifier ? `+${modifier}` : "";
    action.dice = `${action.numberOfRoll}${action.numberOfDiceSides}${attackModifier}`;
  }

  public static updateChallengeRating(creature: Creature): void {
    creature.actions.forEach(action => {
      if (action.attackModifier) {
        this.updateAttackDice(creature, action);
        this.updateSkillProficiency(creature);
      }
    });

    Constants.abilities.forEach(ability => {
      this.updateSavingThrows(creature, ability);
    });

    this.updateSkillProficiency(creature);
  }

  public static updateAttackDice(creature: Creature, action: Action): void {
    const modifier = Constants.getAbilityModifier(
      creature.abilities[action.attackUses]
    );
    action.attackModifier = creature.proficiency + modifier;
  }

  public static createHitDice(creature: Creature): void {
    const level = creature.level || "";
    const modifier =
      Constants.getAbilityModifier(creature.abilities.CON) *
      (level ? Number(level) : 1);
    const thing = modifier > 0 ? "+" : "";
    const dice = Constants.sizes.find(s => creature.size === s.name).dice;
    const sizeMultiplier = Constants.sizes.find(s => creature.size === s.name)
      .multiplier;

    creature.hitDice = `${level}${dice}${thing}${
      modifier > 0 ? modifier : modifier < 0 ? modifier : ""
    }`;
    creature.hitDiceModifier = modifier;

    creature.maxHitPoints = Math.floor(
      (creature.level ? creature.level : 1) * sizeMultiplier +
        creature.hitDiceModifier
    );
    creature.currentHitPoints = creature.maxHitPoints;
  }

  public static addSkillProficiency(creature: Creature, skill: string): void {
    if (creature.skillProficiencies.find(s => s.ability === skill)) {
      return;
    }

    const newValue = Constants.getAbilityModifier(creature.abilities[Constants.getAbilityBySkill(skill)]);

    creature.skillProficiencies.push({
      value: newValue + creature.proficiency,
      ability: skill
    });
  }

  public static updateSkillProficiency(creature: Creature): void {
    creature.skillProficiencies.forEach(s => {
      const ability = Constants.getAbilityBySkill(s.ability);
      s.value = Constants.getAbilityModifier(creature.abilities[ability]) + creature.proficiency;
    });
  }

  public static addSavingThrows( creature: Creature, ability: string ): void {
    if (creature.savingThrows.find(savingThrow => savingThrow.ability === ability)) { return; }
    const newValue = Constants.getAbilityModifier(creature.abilities[ability]) + creature.proficiency;

    creature.savingThrows.push({
      value: newValue,
      ability
    });
  }

  public static updateSavingThrows(creature: Creature, ability: string): void {
    const newValue = Constants.getAbilityModifier(creature.abilities[ability]) + creature.proficiency;
    const savingThrows = creature.savingThrows.find(savingThrow => savingThrow.ability === ability);

    if (savingThrows) {
      savingThrows.value = newValue;
    }
  }

  public static updateArmorClass(creature: Creature): void {
    if (!creature.armorType || creature.armorType === "Natural") {
      creature.armorClass = 10 + Constants.getAbilityModifier(creature.abilities.DEX) + (creature.additionalArmor || 0);
      return;
    }

    const armorType = Constants.armor.find(a => a.name === creature.armorType);
    creature.armorClass = armorType.acBonus;
    creature.armorType = armorType.name;

    if (armorType.plus) {
      creature.armorClass +=
      creature.abilities.DEX > 2  && armorType.max
      ? 2
      : Constants.getAbilityModifier(creature.abilities.DEX);
    }
  }

  public static updateAction(actionName: string): void {
    
  }
}
