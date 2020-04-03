import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { Utilities } from "../utilities";
import { AssetService } from "../asset.service";

@Component({
  selector: "app-creature-info",
  templateUrl: "./creature-info.component.html",
  styleUrls: ["./creature-info.component.scss"]
})
export class CreatureInfoComponent implements OnInit {
  @Input() public creature: Creature;
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
    this.creature.experience = Constants.getXP(challengeRatings);
    this.creature.proficiency = Constants.getProficiency(challengeRatings);
    AssetService.updateChallengeRating(this.creature);
  }

  public onSizeChange(selection: any): void {
    this.creature.size = Constants.sizes.find(s => selection.value === s.name).name;
    AssetService.createHitDice(this.creature);
  }

  public onLevelChange(): void {
    if (this.creature.level < 0 ) { this.creature.level = 0; }

    AssetService.createHitDice(this.creature);
  }
}
