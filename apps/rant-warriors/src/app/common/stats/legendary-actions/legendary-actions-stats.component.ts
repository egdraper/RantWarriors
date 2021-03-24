import { Component, OnInit, Input } from "@angular/core";
import { Asset } from "../../../utils/asset";

@Component({
  selector: "app-legendary-actions-stats",
  templateUrl: "./legendary-actions-stats.component.html",
  styleUrls: ["./legendary-actions-stats.component.scss"]
})
export class LegendaryActionsStatsComponent implements OnInit {
  @Input() asset: Asset;

  public tools = ["edit", "delete"];
  constructor() { }

  ngOnInit() {
  }

}
