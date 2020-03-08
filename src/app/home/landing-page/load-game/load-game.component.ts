import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DbService } from "src/app/dm/assets/dbService";
import { DbSessionService } from "src/app/dm/assets/dbSession";

@Component({
  selector: "app-load-game",
  templateUrl: "./load-game.component.html",
  styleUrls: ["./load-game.component.scss"]
})
export class LoadGameComponent implements OnInit {
  public game: string;
  public games: string[];
  constructor(
    private dbService: DbService,
    private dbSession: DbSessionService,
    private router: Router
  ) { }

  public async ngOnInit(): Promise<void> {
    this.games = await this.dbService.getGames();
  }

  public async selectGame(): Promise<void> {
    await this.dbSession.loadGameSession(this.game);
    this.router.navigate(["/creature"]);
  }


}
