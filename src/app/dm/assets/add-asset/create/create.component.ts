import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DbSessionService } from "../../dbSession";


@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  @Output() public selected = new EventEmitter();
  @Output() public creatureSelected = new EventEmitter();
  constructor(
    public dbSession: DbSessionService
  ) { }

  ngOnInit() {

  }

  public onTypeSelected(type: any): void {
    this.selected.emit(type.value);
  }

  public onCreatureChange(creature: any): void {
    this.creatureSelected.emit(creature.value);
  }
}
