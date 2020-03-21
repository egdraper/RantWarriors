import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-submit",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.scss"]
})
export class SubmitComponent {
  @Input() public type = "Creature";
  @Output() public submit = new EventEmitter();

  public onSubmit(): void {
    this.submit.emit(this.type);
  }
}
