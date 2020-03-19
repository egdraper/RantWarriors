import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { sortBy } from "lodash";
import { OnInit } from "@angular/core";

@Injectable()
export class DbSessionService {
  public admin = false;
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
  public creatureSelectionList: string[] = [];
  public playerSelectionList: string[] = [];
  public npcSelectionList: string[] = [];

  private useGenericNpcs = false;
  private useGenericCreatures = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.creatures$.subscribe(creatureCollection => {
      this.creatureSelectionList = creatureCollection.map(
        creature => creature.name
      );
    });

    this.npcs$.subscribe(npcCollection => {
      this.npcSelectionList = npcCollection.map(
        npc => npc.name
      );
    });

    this.players$.subscribe(playerCollection => {
      this.playerSelectionList = playerCollection.map(
        player => player.name
      );
    });
  }

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

        if (this.useGenericCreatures) {
          this.getGenericCreatures();
        }
      });
  }

  public getGenericCreatures(): void {
    this.firestore
      .collection("assets")
      .get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.creatureList.push(doc.data() as Creature);
        });
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures$.next(this.creatureList);
      });
  }

  public initPlayersList(): void {
    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("players")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.playersList.push(doc.data() as Creature);
        });
        this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
        this.players$.next(this.playersList);
      });
  }

  public initNpcList(): void {
    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("npcs")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npcList.push(doc.data() as Creature);
        });
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs$.next(this.npcList);
      });

    if (this.useGenericNpcs) {
      this.getGenericNpcList();
    }
  }

  public getGenericNpcList(): void {
    this.firestore
      .collection("npcs")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npcList.push(doc.data() as Creature);
        });
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs$.next(this.npcList);
      });
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

  public addToCreatureList(asset: Creature, type: string): void {
    switch (type) {
      case "creatures":
        this.creatureList.push(asset);
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures$.next(this.creatureList);
        break;
      case "players":
        this.playersList.push(asset);
        this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
        this.players$.next(this.playersList);
        break;
      case "npcs":
        this.npcList.push(asset);
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs$.next(this.npcList);
        break;
    }
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
          this.useGenericCreatures = data.game.useCreatures;
          this.useGenericNpcs = data.game.useNpcs;
          this.activeNpcs.next(this.activeNpcList);
          this.activePlayers.next(this.activePlayersList);
          this.activeCreatures.next(this.activeCreatureList);

          this.initCreatureList();
          this.initNpcList();
          this.initPlayersList();
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
