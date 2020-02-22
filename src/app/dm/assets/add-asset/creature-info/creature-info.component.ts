import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";

@Component({
  selector: "app-creature-info",
  templateUrl: "./creature-info.component.html",
  styleUrls: ["./creature-info.component.scss"]
})
export class CreatureInfoComponent implements OnInit {
  @Input() public creature: Creature;
  public newLanguage = "";
  constructor() {}

  ngOnInit() {}

  public addLanguage(): void {
    if (this.newLanguage !== "") {
      this.creature.languages.push(this.newLanguage);
    }
  }
}
