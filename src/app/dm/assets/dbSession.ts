import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { sortBy } from "lodash";

@Injectable()
export class DbSessionService {
  public currentGame: string;
  public creatureList: Creature[] = [];
  public playersList: Creature[] = [];
  public npcList: Creature[] = [];
  public activeCreatureList: Creature[] = [];
  public activePlayersList: Creature[] = [];
  public activeNpcList: Creature[] = [];
  public npcs$ = new BehaviorSubject<Creature[]>(this.activeNpcList);
  public creatures$ = new BehaviorSubject<Creature[]>(this.activeCreatureList);
  public players$ = new BehaviorSubject<Creature[]>(this.activeCreatureList);
  public activeNpcs = new BehaviorSubject<Creature[]>(this.activeNpcList);
  public activeCreatures = new BehaviorSubject<Creature[]>(
    this.activeCreatureList
  );
  public activePlayers = new BehaviorSubject<Creature[]>(
    this.activeCreatureList
  );

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  public initCreatureList(): void {
    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("creatures")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.creatureList.push(doc.data() as Creature);
        });
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures$.next(this.creatureList);
      });
  }

  // this.firestore
  //   .collection("users")
  //   .doc(`${this.fireAuth.auth.currentUser.uid}`)
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
  //   .collection("users")
  //   .doc(`${this.fireAuth.auth.currentUser.uid}`)
  //   .collection("players")
  //   .get()
  //   .subscribe(querySnapshot => {
  //     querySnapshot.forEach(doc => {
  //       this.playersList.push(doc.data() as Creature);
  //     });
  //     this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
  //     this.players.next(this.playersList);
  //   });

  public addSession(): void {
    // const session = {
    //   creatures: JSON.parse(JSON.stringify(this.activeCreatureList)),
    //   npcs: JSON.parse(JSON.stringify(this.activeNpcList)),
    //   players: JSON.parse(JSON.stringify(this.activePlayersList))
    // };

    // this.firestore
    //   .collection("users")
    //   .doc(`${this.fireAuth.auth.currentUser.uid}`)
    //   .collection("games")
    //   .doc(this.currentGame)
    //   .update(session:session);
  }

  public updateSession(): void {
    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("games")
      .doc(this.currentGame)
      .update({
        session: {
          creatures: this.activeCreatureList,
          npcs: this.activeNpcList,
          players: this.activePlayersList
        }
      });

    this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
    this.creatures$.next(this.creatureList);
  }

  public addToCreatureList(creature: Creature): void {
    this.creatureList.push(creature);
    this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
    this.creatures$.next(this.creatureList);
  }

  public async loadGameSession(gameName: string): Promise<void> {
    this.currentGame = gameName;
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${this.fireAuth.auth.currentUser.uid}`)
        .collection("games")
        .doc(gameName)
        .get()
        .subscribe(doc => {
          const data = doc.data();
          this.activeCreatureList = data.session.creatures;
          this.activeNpcList = data.session.npcs;
          this.activePlayersList = data.session.players;
          this.activeNpcs.next(this.activeNpcList);
          this.activePlayers.next(this.activePlayersList);
          this.activeCreatures.next(this.activeCreatureList);
          resolve();
        });
    });
  }

  public remove(index: number, type: string): void {
    switch (type) {
      case "creatures":
        this.activeCreatureList = this.activeCreatureList.filter(
          (creature, i) => i !== index
        );
        this.activeCreatures.next(this.activeCreatureList);
        break;
      case "players":
        this.activePlayersList = this.activeCreatureList.filter(
          (creature, i) => i !== index
        );
        this.activePlayers.next(this.activePlayersList);
        break;
      case "npcs":
        this.activeNpcList = this.activeCreatureList.filter(
          (creature, i) => i !== index
        );
        this.activeNpcs.next(this.activeNpcList);
        break;
    }
    this.updateSession();
  }

  public add(creature: Creature, type: string): void {
    switch (type) {
      case "creatures":
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
    this.updateSession();
  }
}
