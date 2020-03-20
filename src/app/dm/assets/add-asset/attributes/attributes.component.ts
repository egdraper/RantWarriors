import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { Rating } from "../../creature.db";

@Component({
  selector: "app-attributes",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.scss"]
})
export class AttributesComponent implements OnInit {
  @Input() public creature: Creature;
  public senses = Constants.senses;
  public armorList = Constants.armor;
  public alignments = Constants.alignments;
  public sizes = Constants.sizes;
  public creatureTypes = Constants.creatureTypes;
  public challengeRatings = new Rating().getRatings(30);
  public newLanguage = "";
  public newSense = "";
  public senseRange = 0;
  public actualArmor = 10;

  constructor() {}

  ngOnInit() {}

  public addLanguage(): void {
    if (this.newLanguage !== "") {
      this.creature.languages.push(this.newLanguage);
    }
  }

  public addSense(): void {
    if (this.newSense !== "") {
      this.creature.senses.push({ sense: this.newSense, value: this.senseRange });
    }
  }

  public onChange(armor: any): void {
    const armorType = this.armorList.find(a => a.name === armor.value);
    this.creature.armorClass = armorType.acBonus;
    this.creature.armorType = armorType.name;
    
    if (armorType.plus) {
      this.creature.armorClass +=
      this.creature.abilities.dexterity > 2  && armorType.max
      ? 2
      : Constants.getAbilityModifier(this.creature.abilities.dexterity);
    }
    this.actualArmor = this.creature.armorClass;
  }

  public onAdditionalArmorChange(number: number): void {
    debugger
    this.creature.armorClass = this.actualArmor + Number(number);
  }
}
