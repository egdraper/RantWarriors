import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-trait-stats",
  templateUrl: "./trait-stats.component.html",
  styleUrls: ["./trait-stats.component.scss"]
})
export class TraitStatsComponent implements OnInit {
  @Input() creature: Creature;

  public tools = ["edit", "delete"]
  constructor() { }

  ngOnInit() {
  }

}
