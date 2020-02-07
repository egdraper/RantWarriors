import { Component } from "@angular/core";
import { Creature, Action } from "../creature.model";
import { cloneDeep } from "lodash"

@Component({
  selector: "add-asset",
  styleUrls: ["./add-asset.component.scss"],
  templateUrl: "./add-asset.component.html"
})
export class AddAssetComponent {
  public newCreature = new Creature();
  public newAction = new Action();
  public damageTypes = [ "acid", "bludgeoning", "cold", "fire", "force", "lightning", "necrotic", "piercing", "poison", "psychic", "radiant", "slashing", "thunder"]
  public skills = [
    "Acrobatics",
    "Animal",
    "Arcana",
    "Athletics",
    "Deception",
    "Endurance",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight",
    "Stealth",
    "Streetwise",
    "Survival",
  ]
  
  public newDebuff = "";
  public newSavingThrow = "";
  public newSavingThrowValue = 0;
  public newProficiency = "";
  public newProficiencyValue = 0;

  constructor() {
    this.newCreature = new Creature();
  }

  public addCreature(): void {
    // add to db and clear creature info
    this.newCreature = new Creature();
  }

  public addAttackAction(): void {
    if (!this.newCreature.actions) {
      this.newCreature.actions = [];
    }

    this.newCreature.actions.push(cloneDeep(this.newAction));
    this.newAction = new Action();
  }

  public addVulnerability(): void {
    this.newCreature.vulnerabilities.push(this.newDebuff);
  }
  public addImmunity(): void {
    this.newCreature.immunities.push(this.newDebuff);
  }
  public addConditionImmunity(): void {
    this.newCreature.conditionImmunities.push(this.newDebuff);
  }
  public addResistance(): void {
    this.newCreature.resistances.push(this.newDebuff);
  }
  public addNewSavingThrow(): void {
    this.newCreature.savingThrows.push({value: this.newSavingThrowValue, ability: this.newSavingThrow });
  }
  public addNewProficiency(): void {
    this.newCreature.skillProficiencies.push({value: this.newProficiencyValue, ability: this.newProficiency });
  }
}
