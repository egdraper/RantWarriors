import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-stats-panel",
  templateUrl: "./stats-panel.component.html",
  styleUrls: ["./stats-panel.component.scss"]
})
export class StatsPanelComponent {
  @Input() public creature: Creature;
}
