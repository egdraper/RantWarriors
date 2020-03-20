import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";
import { Rating } from "../../creature.db";
import { Constants } from "../constants";

@Component({
  selector: "app-ability-info",
  templateUrl: "./ability-info.component.html",
  styleUrls: ["./ability-info.component.scss"]
})
export class AbilityInfoComponent {
  @Input() public creature: Creature;
}
