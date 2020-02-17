import { Component, OnInit, Input } from "@angular/core";
import { Creature } from "../../creature.model";

@Component({
  selector: "app-ability-info",
  templateUrl: "./ability-info.component.html",
  styleUrls: ["./ability-info.component.scss"]
})
export class AbilityInfoComponent implements OnInit {
  @Input() public creature: Creature;
  constructor() { }

  ngOnInit() {
  }

}
