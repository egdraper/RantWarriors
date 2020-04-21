import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DbSessionService } from "../../dbSession";

@Component({
  selector: "app-submit",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.scss"]
})
export class SubmitComponent {
  @Input() public type = "Creature";
  @Input() public actionType = "create";

  @Output() public submit = new EventEmitter();
  @Output() public update = new EventEmitter();

  public onSubmit(): void {
    this.submit.emit(this.type);
  }

  public onUpdate(): void {
    this.update.emit(this.type);
  }
}
