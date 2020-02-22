import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-legendary-actions-stats",
  templateUrl: "./legendary-actions-stats.component.html",
  styleUrls: ["./legendary-actions-stats.component.scss"]
})
export class LegendaryActionsStatsComponent implements OnInit {
  @Input() creature: Creature;
  constructor() { }

  ngOnInit() {
  }

}
