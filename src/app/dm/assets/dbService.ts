import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { npcs } from "./npc.db";
import { AngularFirestore } from "@angular/fire/firestore";
import { sortBy } from "lodash";
import { Npc } from "./npc.model";

@Injectable()
export class DbService {
  public creatureList: Creature[] = [];
  public playersList: Creature[] = [];
  public npcList: Creature[] = []
  public npcs = new BehaviorSubject<Creature[]>(npcs);
  public creatures = new BehaviorSubject<Creature[]>(this.creatureList);
  public players = new BehaviorSubject<Creature[]>(this.creatureList);

  constructor(private firestore: AngularFirestore) {
    this.firestore
      .collection("assets")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.creatureList.push(doc.data() as Creature);
        });
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures.next(this.creatureList);
      });
  }

  public addCreature(creature: Creature): void {
    const cleanCreature = JSON.parse(JSON.stringify(creature));
    this.firestore
      .collection("assets")
      .doc(creature.name)
      .set(cleanCreature);
    this.creatureList.push(creature);
    this.creatures.next(this.creatureList);
  }

  public addNpc(npc: Npc): void {
    const cleanNpc = JSON.parse(JSON.stringify(npc));
    this.firestore
      .collection("npcs")
      .doc(cleanNpc.name)
      .set(cleanNpc);
    this.npcList.push(npc);
    this.npcs.next(this.creatureList);
  }

  public addPlayer(player: Creature): void {
    const cleanPlayer = JSON.parse(JSON.stringify(player));
    this.firestore
      .collection("players")
      .doc(cleanPlayer.name)
      .set(cleanPlayer);
    this.playersList.push(player);
    this.players.next(this.creatureList);
  }
}
