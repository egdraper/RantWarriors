import { Component } from "@angular/core";
import { Npc } from "../assets/npc.model";
import { npcs } from "../assets/npc.db";
import { cloneDeep } from "lodash";
import { AngularFirestore } from "@angular/fire/firestore";
import { DbService } from "../assets/dbService";
import { Creature } from "../assets/creature.model";

@Component({
  selector: "npc",
  styleUrls: ["./npc.component.scss"],
  templateUrl: "./npc.component.html"
})
export class NpcComponent {
  public activeNpcs: Creature[] = [];
  public npcs: Creature[] = [];
  public npcList: string[] = [];
  public dead = "X";

  private selectedNpc: string;

  constructor(public dbService: DbService) {
    dbService.npcs.subscribe(npcCollection => {
      this.npcs = npcCollection;
      this.npcList = npcCollection.map(creature => creature.name);
    });
  }

  public onNpcChange(creature: any): void {
    this.selectedNpc = creature.value;
  }

  public addNpc(): void {
    this.activeNpcs.push(
      cloneDeep(this.npcs.find(npc => npc.name === this.selectedNpc))
    );
  }

  public onRemove(newActiveCreatures: Npc[]): void {
    this.activeNpcs = newActiveCreatures;
  }
}
