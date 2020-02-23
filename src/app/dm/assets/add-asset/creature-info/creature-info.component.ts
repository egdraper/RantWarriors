import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Constants } from "../constants";

@Component({
  selector: "app-creature-info",
  templateUrl: "./creature-info.component.html",
  styleUrls: ["./creature-info.component.scss"]
})
export class CreatureInfoComponent implements OnInit {
  @Input() public creature: Creature;
  public senses = Constants.senses;
  public alignments = Constants.alignments;
  public sizes = Constants.sizes;
  public creatureTypes = Constants.creatureTypes;
  public newLanguage = "";
  public newSense = "";
  public senseRange = 0;
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
}
