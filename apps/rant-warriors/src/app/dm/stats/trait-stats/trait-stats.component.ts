import { Component, OnInit, Input } from "@angular/core";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-trait-stats",
  templateUrl: "./trait-stats.component.html",
  styleUrls: ["./trait-stats.component.scss"]
})
export class TraitStatsComponent implements OnInit {
  @Input() asset: Asset;

  public tools = ["edit", "delete"]
  constructor() { }

  ngOnInit() {
  }

}
