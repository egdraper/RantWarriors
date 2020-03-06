import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../../assets/creature.model";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent {
  @Input() activeCreatures: Creature[];
  @Output() select = new EventEmitter<number>();
  constructor() { }

  public onSelect(index: number): void {
    this.select.emit(index)
  }
}
