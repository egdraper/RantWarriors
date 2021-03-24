import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-editor-toolbar",
  templateUrl: "./editor-toolbar.component.html",
  styleUrls: ["./editor-toolbar.component.scss"]
})
export class EditorToolbarComponent implements OnInit {
  @Input() tools = [];
  @Output() optionClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
