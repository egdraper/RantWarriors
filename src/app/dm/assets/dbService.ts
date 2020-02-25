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
  public npcList: Creature[] = [];
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

    this.firestore
      .collection("npcs")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npcList.push(doc.data() as Creature);
        });
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs.next(this.npcList);
      });

    this.firestore
      .collection("players")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.playersList.push(doc.data() as Creature);
        });
        this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
        this.players.next(this.playersList);
      });
  }

  public addCreature(creature: Creature, type: string): void {
    const cleanCreature = JSON.parse(JSON.stringify(creature));
    this.firestore
      .collection(type)
      .doc(creature.name)
      .set(cleanCreature);

    switch (type) {
      case "assets":
        this.creatureList.push(creature);
        this.creatures.next(this.creatureList);
        break;
      case "players":
        this.playersList.push(creature);
        this.players.next(this.playersList);
        break;
      case "npcs":
        this.npcList.push(creature);
        this.npcs.next(this.npcList);
        break;
    }

  }
}
