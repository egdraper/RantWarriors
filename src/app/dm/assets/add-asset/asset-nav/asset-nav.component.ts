import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Constants } from "../constants";

@Component({
  selector: "app-asset-nav",
  templateUrl: "./asset-nav.component.html",
  styleUrls: ["./asset-nav.component.scss"]
})
export class AssetNavComponent implements OnInit {
  @Output() public select = new EventEmitter();
  @Output() public creatureAdded = new EventEmitter();
  @Output() public npcAdded = new EventEmitter();
  @Output() public playerAdded = new EventEmitter();
  
  public navItems: string[] = Constants.navItems;


  constructor() { }

  ngOnInit() {
  }


}
