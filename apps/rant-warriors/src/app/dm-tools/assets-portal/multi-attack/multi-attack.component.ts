import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Asset } from "../../../utils/asset";


@Component({
  selector: "app-multi-attack",
  templateUrl: "./multi-attack.component.html",
  styleUrls: ["./multi-attack.component.scss"]
})
export class MultiAttackComponent implements OnInit {
  @Input() public asset: Asset;
  @Output() public multiAttackSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSection(): void {
    if (this.asset.multiAttack) {
      this.asset.numberOfActions = 2;
    } else {
      this.asset.numberOfActions = 1;
    }
    this.multiAttackSelected.emit();
  }
}
