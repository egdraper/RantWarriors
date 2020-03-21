import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  @Output() public selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onTypeSelected(type: any): void {
    this.selected.emit(type.value);
  }
}
