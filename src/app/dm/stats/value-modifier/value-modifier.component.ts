import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-value-modifier",
  templateUrl: "./value-modifier.component.html",
  styleUrls: ["./value-modifier.component.scss"]
})
export class ValueModifierComponent {
  @Input() public value: number;
  @Output() public change = new EventEmitter<number>();

  public valueUp(): void {
    this.change.emit(++this.value);
  }

  public valueDown(): void {
    this.change.emit(--this.value);
  }
}
