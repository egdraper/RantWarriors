import { Component } from "@angular/core";
import { Npc } from "../assets/npc.model";
import { players } from "../assets/players.db";
import { cloneDeep } from "lodash";
import { Creature } from "../assets/creature.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { DbService } from "../assets/dbService";

@Component({
  selector: "app-player",
  styleUrls: ["./player.component.scss"],
  templateUrl: "./player.component.html"
})
export class PlayerComponent {
  public activePlayers: Creature[] = [];
  public players: Creature[] = [];
  public playerList: string[] = [];
  public dead = "X";

  private selectedNpc: string;

  constructor(public dbService: DbService) {
    dbService.players.subscribe(npcCollection => {
      this.players = npcCollection;
      this.playerList = npcCollection.map(creature => creature.name);
    });
  }

  public onNpcChange(creature: any): void {
    this.selectedNpc = creature.value;
  }

  public addPlayer(): void {
    this.activePlayers.push(
      cloneDeep(this.players.find(npc => npc.name === this.selectedNpc))
    );
  }

  public onRemove(newActivePlayer: Creature[]): void {
    this.activePlayers = newActivePlayer;
  }
}
