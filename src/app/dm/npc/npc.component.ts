import { Component } from "@angular/core";
import { Npc } from "../assets/npc.model";
import { npcs } from "../assets/npc.db";
import { cloneDeep } from "lodash";
import { AngularFirestore } from "@angular/fire/firestore";
import { DbService } from "../assets/dbService";
import { DbSessionService } from "../assets/dbSession";

@Component({
  selector: "npc",
  styleUrls: ["./npc.component.scss"],
  templateUrl: "./npc.component.html"
})
export class NpcComponent {
  public npcSelectionList: string[] = [];

  private selectedNpc: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) {
    dbSessionService.npcs$.subscribe(npcCollection => {
      this.npcSelectionList = npcCollection.map(
        npc => npc.name
      );
    });
  }

  public onNpcChange(npc: any): void {
    this.selectedNpc = npc.value;
  }

  public addNpc(): void {
    const chosenNpc = cloneDeep(
      this.dbSessionService.npcList.find(
        npc => npc.name === this.selectedNpc
      )
    );
    chosenNpc.name = `${chosenNpc.name} ${this.dbSessionService
      .activeNpcList.length + 1}`;
    this.dbSessionService.add(chosenNpc, "npc");
  }

  public onRemove(index: number): void {
    this.dbSessionService.remove(index, "npc");
  }
  // public activeNpcs: Creature[] = [];
  // public npcs: Creature[] = [];
  // public npcSelectionList: string[] = [];
  // public dead = "X";

  // private selectedNpc: string;

  // constructor(public dbService: DbService) {
  //   dbService.npcs.subscribe(npcCollection => {
  //     this.npcs = npcCollection;
  //     this.npcList = npcCollection.map(creature => creature.name);
  //   });
  // }

  // public onNpcChange(creature: any): void {
  //   this.selectedNpc = creature.value;
  // }

  // public addNpc(): void {
  //   this.activeNpcs.push(
  //     cloneDeep(this.npcs.find(npc => npc.name === this.selectedNpc))
  //   );
  // }

  // public onRemove(newActiveCreatures: Npc[]): void {
  //   this.activeNpcs = newActiveCreatures;
  // }
}
