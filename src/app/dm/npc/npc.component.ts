import { Component } from "@angular/core";
import { Npc } from "../assets/npc.model";
import { npcs } from "../assets/npc.db";
import { cloneDeep } from "lodash";

@Component({
  selector: "npc",
  styleUrls: ["./npc.component.scss"],
  templateUrl: "./npc.component.html"
})
export class NpcComponent {
  public activeNpcs: Npc[] = [];
  public npcs: Npc[] = [];
  public npcList: string[] = [];
  public dead = "X";

  private selectedNpc: string;

  constructor() {
    this.npcs = npcs;
    this.npcList = this.npcs.map(creature => creature.name);
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
