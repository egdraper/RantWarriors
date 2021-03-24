import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-value-modifier",
  templateUrl: "./value-modifier.component.html",
  styleUrls: ["./value-modifier.component.scss"]
})
export class ValueModifierComponent {
  @Input() public value: number;
  @Output() public change = new EventEmitter();

  public valueUp(): void {
    this.change.emit({newValue: ++this.value, amount: 1});
  }

  public valueDown(): void {
    this.change.emit({newValue: --this.value, amount: -1});
  }
}
