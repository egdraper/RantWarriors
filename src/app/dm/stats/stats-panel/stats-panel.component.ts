import { Component, OnInit, Input, Output } from "@angular/core";
import { Creature } from "../../assets/creature.model";
import { EventEmitter } from "@angular/core";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-stats-panel",
  templateUrl: "./stats-panel.component.html",
  styleUrls: ["./stats-panel.component.scss"]
})
export class StatsPanelComponent {
  @Output() public damage = new EventEmitter();
  @Output() public heal = new EventEmitter();
  @Input() public asset: Asset;
  @Input() public selectedAsset: Asset;
}
