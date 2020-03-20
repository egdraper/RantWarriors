import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Constants } from "../constants";
import { DbService } from "../../dbService";
import { DbSessionService } from "../../dbSession";

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
  @Output() public loadCreature = new EventEmitter();
  @Output() public update = new EventEmitter();

  public optionSelected = false;
  public navItems: string[] = Constants.navItems;
  public navMainOptions: string[] = Constants.navMainOptions;

  constructor(public dbSessionService: DbSessionService) { }

  ngOnInit() {
  }

  public onLoad(creature: any): void {
    this.loadCreature.emit(creature.value);
  }

  public optionSelect(option: string) {
    this.optionSelected = true;
    
  }
}
