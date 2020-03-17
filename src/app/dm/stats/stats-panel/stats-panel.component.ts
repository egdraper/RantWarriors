import { Component, OnInit, Input, Output } from "@angular/core";
import { Creature } from "../../assets/creature.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-stats-panel",
  templateUrl: "./stats-panel.component.html",
  styleUrls: ["./stats-panel.component.scss"]
})
export class StatsPanelComponent {
  @Output() public damage = new EventEmitter();
  @Output() public heal = new EventEmitter();
  @Input() public creature: Creature;
  @Input() public selectedCreature: Creature;
}
