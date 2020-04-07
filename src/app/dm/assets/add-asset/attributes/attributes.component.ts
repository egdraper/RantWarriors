import { Component, OnInit, Input } from "@angular/core";
import { Constants } from "../constants";
import { Asset } from "../asset";

@Component({
  selector: "app-attributes",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.scss"]
})
export class AttributesComponent implements OnInit {
  @Input() public asset: Asset;
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
      this.asset.languages.push(this.newLanguage);
    }
    this.newLanguage = "";
  }

  public addSense(): void {
    if (this.newSense !== "") {
      this.asset.senses.push({ sense: this.newSense, value: this.senseRange });
    }

    this.newSense = "";
  }

  public onChange(armor: any): void {
    this.asset.armorType = armor.value;
    this.asset.updateArmorClass();
  }

  public onAdditionalArmorChange(number: number): void {
    this.asset.additionalArmor = Number(number);
    this.asset.updateArmorClass();
  }
}
