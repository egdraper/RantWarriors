import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Creature } from "../../creature.model";

@Component({
  selector: "app-multi-attack",
  templateUrl: "./multi-attack.component.html",
  styleUrls: ["./multi-attack.component.scss"]
})
export class MultiAttackComponent implements OnInit {
  @Input() public creature: Creature;
  @Output() public multiAttackSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSection(): void {
    if (this.creature.multiAttack) {
      this.creature.numberOfActions = 2;
    } else {
      this.creature.numberOfActions = 1;
    }
    this.multiAttackSelected.emit();
  }
}
