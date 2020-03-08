import { Component } from "@angular/core";
import { DbService } from "../../../dm/assets/dbService";

@Component({
  selector: "app-create-game",
  templateUrl: "./create-game.component.html",
  styleUrls: ["./create-game.component.scss"]
})
export class CreateGameComponent {
  public gameName: string;
  public creaturesChecked = true;
  public npcsChecked = true;

  constructor(private dbService: DbService) {}

  public createGame(): void {
    this.dbService.createGame({
      name: this.gameName,
      useNpcs: this.npcsChecked,
      useCreatures: this.npcsChecked,
      created: Date.now().toLocaleString()
    });
  }
}
