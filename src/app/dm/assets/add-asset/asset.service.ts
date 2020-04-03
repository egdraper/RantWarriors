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
    newScore
  ): void {
    // update attack
    creature.actions.forEach(action => {
      if (action.attackUses === ability) {
        this.updateDamageDice(creature, action);
        this.updateAttackDice(creature, action);
      }
    });

    // update AC

    if (ability === "Strength") {
      this.updateSavingThrows(creature, ability);
      // this.updateSkillProficiency(creature, ability);
    }
    if (ability === "Dexterity") {
      this.updateSavingThrows(creature, ability);
      // this.updateSkillProficiency(creature, ability);
    }
    if (ability === "Constitution") {
      this.createHitDice(creature);
      this.updateSavingThrows(creature, ability);
    }
    if (ability === "Wisdom") {
      this.updateSavingThrows(creature, ability);
      // this.updateSkillProficiency(creature, ability);
    }
    if (ability === "Intelligence") {
      this.updateSavingThrows(creature, ability);
      // this.updateSkillProficiency(creature, ability);
    }
    if (ability === "Charisma") {
      this.updateSavingThrows(creature, ability);
      // this.updateSkillProficiency(creature, ability);
    }
  }

  public static updateDamageDice(creature: Creature, action: Action): void {
    const ability = action.attackUses;
    const modifier = Constants.getAbilityModifier(
      creature.abilities[ability.toLowerCase()]
    );
    const attackModifier = modifier ? `+${modifier}` : "";
    action.dice = `${action.numberOfRoll}${action.numberOfDiceSides}${attackModifier}`;
  }

  public static updateChallengeRating(creature: Creature): void {
    creature.actions.forEach(action => {
      if (action.attackModifier) {
        this.updateAttackDice(creature, action);
      }
    });

    Constants.abilities.forEach(ability => {
      this.updateSavingThrows(creature, ability);
    });

    // Constants.skills.forEach(skill => {
    //   this.updateSkillProficiency(createWriteStream)
    // })
  }

  public static updateAttackDice(creature: Creature, action: Action): void {
    const modifier = Constants.getAbilityModifier(
      creature.abilities[action.attackUses.toLowerCase()]
    );
    action.attackModifier = creature.proficiency + modifier;
  }

  public static createHitDice(creature: Creature): void {
    const level = creature.level || "";
    const modifier =
      Constants.getAbilityModifier(creature.abilities.constitution) *
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

    const newValue = Constants.getAbilityModifier(
      Constants.getAbilityBySkill(skill)
    );

    creature.savingThrows.push({
      value: newValue,
      ability: skill
    });
  }

  public static updateSkillProficiency(creature: Creature): void {
    creature.skillProficiencies.forEach(s => {
      const ability = Constants.getAbilityBySkill(s);
      s.value = Constants.getAbilityModifier(ability) + creature.proficiency;
    });
  }

  public static addSavingThrows( creature: Creature, abilityShorthand: string ): void {
    if (creature.savingThrows.find(savingThrow => savingThrow.ability === abilityShorthand)) { return; }
    const ability = Constants.getAbilityByShorthand(abilityShorthand);
    const newValue = Constants.getAbilityModifier(creature.abilities[ability.toLowerCase()]) + creature.proficiency;

    creature.savingThrows.push({
      value: newValue,
      ability: abilityShorthand
    });
  }

  public static updateSavingThrows(creature: Creature, ability: string): void {
    debugger
    const newValue = Constants.getAbilityModifier(creature.abilities[ability.toLowerCase()]) + creature.proficiency;
    const savingThrows = creature.savingThrows.find(savingThrow => savingThrow.ability === ability);

    if (savingThrows) {
      savingThrows.value = newValue;
    }
  }
}
