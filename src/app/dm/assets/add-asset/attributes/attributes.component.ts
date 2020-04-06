import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { AssetService } from "../asset.service";

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
  public challengeRatings = Constants.getRatings(30);
  public newLanguage = "";
  public newSense = "";
  public senseRange = 0;

  constructor() {}

  ngOnInit() {}

  public addLanguage(): void {
    if (this.newLanguage !== "") {
      this.creature.languages.push(this.newLanguage);
    }
    this.newLanguage = "";
  }

  public addSense(): void {
    if (this.newSense !== "") {
      this.creature.senses.push({ sense: this.newSense, value: this.senseRange });
    }

    this.newSense = "";
  }

  public onChange(armor: any): void {
    this.creature.armorType = armor.value;
    AssetService.updateArmorClass(this.creature);
  }

  public onAdditionalArmorChange(number: number): void {
    this.creature.additionalArmor = Number(number);
    AssetService.updateArmorClass(this.creature);
  }


}
