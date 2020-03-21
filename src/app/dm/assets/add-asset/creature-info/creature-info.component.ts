import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";
import { Rating } from "../../creature.db";

@Component({
  selector: "app-creature-info",
  templateUrl: "./creature-info.component.html",
  styleUrls: ["./creature-info.component.scss"]
})
export class CreatureInfoComponent implements OnInit {
  @Input() public creature: Creature;
  @Input() public creatureType: string;

  public sizes = Constants.sizes;
  public challengeRatings = new Rating().getRatings(30);
  public creatureTypes = Constants.creatureTypes;
  public alignments = Constants.alignments;
  public humanoidTypes = Constants.humanoidTypes;

  constructor() { }

  ngOnInit() {
  }

  public onChange(challengeRatings: string): void {
    this.creature.experience = Constants.getXP(challengeRatings);
  }
}
