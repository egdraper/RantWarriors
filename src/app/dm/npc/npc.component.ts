import { Component } from "@angular/core";
import { Npc } from "../assets/npc.model";
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
  private selectedNpc: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) { }

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
    this.dbSessionService.add(chosenNpc, "npcs");
  }

  public onRemove(index: number): void {
    this.dbSessionService.remove(index, "npcs");
  }
}
