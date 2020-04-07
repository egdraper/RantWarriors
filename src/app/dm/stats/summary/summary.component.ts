import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Asset } from "../../assets/add-asset/asset";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent {
  @Input() activeAssets: Asset[];
  @Output() select = new EventEmitter<number>();
  constructor() { }

  public onSelect(index: number): void {
    this.select.emit(index)
  }
}
