import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { DbService } from "../../../utils/dbService";
import { DbSessionService } from "../../../utils/dbSession";


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
    this.router.navigate(["/creature"], {queryParams: {game: this.game}});
  }
}
