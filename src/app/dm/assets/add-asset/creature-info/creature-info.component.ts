import { Component, OnInit, Input } from "@angular/core";
import { Constants } from "../constants";
import { Asset } from "../asset";

@Component({
  selector: "app-creature-info",
  templateUrl: "./creature-info.component.html",
  styleUrls: ["./creature-info.component.scss"]
})
export class CreatureInfoComponent implements OnInit {
  @Input() public asset: Asset;
  @Input() public creatureType: string;

  public sizes = Constants.sizes;
  public challengeRatings = Constants.getRatings(30);
  public creatureTypes = Constants.creatureTypes;
  public alignments = Constants.alignments;
  public humanoidTypes = Constants.humanoidTypes;

  constructor() { }

  ngOnInit() {
  }

  public onCRChange(challengeRatings: string): void {
    this.asset.experience = Constants.getXP(challengeRatings);
    this.asset.proficiency = Constants.getProficiency(challengeRatings);
    this.asset.updateChallengeRating();
  }

  public onSizeChange(selection: any): void {
    this.asset.size = Constants.sizes.find(s => selection.value === s.name).name;
    this.asset.createHitDice();
  }

  public onLevelChange(): void {
    if (this.asset.level < 0 ) { this.asset.level = 0; }

    this.asset.createHitDice();
  }
}
