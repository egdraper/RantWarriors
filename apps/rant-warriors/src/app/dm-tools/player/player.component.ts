import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { DbService } from "../../utils/dbService";
import { DbSessionService } from "../../utils/dbSession";
import { Asset } from "../../utils/asset";

@Component({
  selector: "player",
  styleUrls: ["./player.component.scss"],
  templateUrl: "./player.component.html"
})
export class PlayerComponent {
  private selectedPlayer: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) { }

  public onPlayerChange(player: any): void {
    this.selectedPlayer = player.value;
  }

  public addPlayer(): void {
    const chosenPlayer = new Asset(cloneDeep(
      this.dbSessionService.playersList.find(
        player => player.name === this.selectedPlayer
      )
    ));
    chosenPlayer.name = `${chosenPlayer.name} ${this.dbSessionService
      .activePlayersList.length + 1}`;
    this.dbSessionService.add(chosenPlayer, "players");
  }

  public onRemove(index: number): void {
    this.dbSessionService.remove(index, "players");
  }

  // public activePlayers: Creature[] = [];
  // public players: Creature[] = [];
  // public playerList: string[] = [];
  // public dead = "X";

  // private selectedNpc: string;

  // constructor(
  //   public dbService: DbService,
  //   public dbSessionService: DbSessionService
  // ) {
  //   dbService.players.subscribe(playerCollection => {
  //     this.players = playerCollection;
  //     this.playerList = playerCollection.map(player => player.name);
  //   });
  // }

  // public onPlayerChange(creature: any): void {
  //   this.selectedNpc = creature.value;
  // }

  // public addPlayer(): void {
  //   this.activePlayers.push(
  //     cloneDeep(this.players.find(npc => npc.name === this.selectedNpc))
  //   );

  //   this.dbSessionService.activePlayers.next(this.activePlayers);
  // }

  // public onRemove(newActivePlayer: Creature[]): void {
  //   this.activePlayers = newActivePlayer;
  // }
}
