import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { npcs } from "./npc.db";
import { AngularFirestore } from "@angular/fire/firestore";
import { sortBy } from "lodash";
import { Npc } from "./npc.model";
import { creatures } from "./creature.db";

@Injectable()
export class DbSessionService {
  public activeCreatureList: Creature[] = [];
  public activePlayersList: Creature[] = [];
  public activeNpcList: Creature[] = [];
  public activeNpcs = new BehaviorSubject<Creature[]>(npcs);
  public activeCreatures = new BehaviorSubject<Creature[]>(this.activeCreatureList);
  public activePlayers = new BehaviorSubject<Creature[]>(this.activeCreatureList);

  constructor(private firestore: AngularFirestore) {
    this.activeCreatureList = creatures;
    this.activeCreatures.next(this.activeCreatureList);
    // this.firestore
    //   .collection("assets")
    //   .get()
    //   .subscribe(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.creatureList.push(doc.data() as Creature);
    //     });
    //     this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
    //     this.creatures.next(this.creatureList);
    //   });

    // this.firestore
    //   .collection("npcs")
    //   .get()
    //   .subscribe(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.npcList.push(doc.data() as Creature);
    //     });
    //     this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
    //     this.npcs.next(this.npcList);
    //   });

    // this.firestore
    //   .collection("players")
    //   .get()
    //   .subscribe(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.playersList.push(doc.data() as Creature);
    //     });
    //     this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
    //     this.players.next(this.playersList);
    //   });
  }

  public addActiveCreature(creature: Creature, type: string): void {
    const cleanCreature = JSON.parse(JSON.stringify(creature));
    this.firestore
      .collection(type)
      .doc(creature.name)
      .set(cleanCreature);

    switch (type) {
      case "assets":
        this.activeCreatureList.push(creature);
        this.activeCreatures.next(this.activeCreatureList);
        break;
      case "players":
        this.activePlayersList.push(creature);
        this.activePlayers.next(this.activePlayersList);
        break;
      case "npcs":
        this.activeNpcList.push(creature);
        this.activeNpcs.next(this.activeNpcList);
        break;
    }

  }
}
