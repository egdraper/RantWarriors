import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Asset } from "../../../utils/asset";
import { DbService } from "../../../utils/dbService";

@Component({
  selector: "app-create-game",
  templateUrl: "./create-game.component.html",
  styleUrls: ["./create-game.component.scss"]
})
export class CreateGameComponent {
  public gameName: string;
  public creaturesChecked = true;
  public npcsChecked = true;

  constructor(
    private router: Router,
    private dbService: DbService) {}

  public createGame(): void {
    this.dbService.createGame({
      name: this.gameName,
      useNpcs: this.npcsChecked,
      useCreatures: this.npcsChecked,
      created: Date.now().toLocaleString()
    });

    this.dbService.addPendingCreature(new Asset());

    this.router.navigate(["/creature"], {queryParams: {game: this.gameName}});
  }
}
