import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { sortBy } from "lodash";
import { Asset } from "./asset";

@Injectable()
export class DbSessionService {
  public admin = false;
  public currentGame: string;
  public creatureList: Asset[] = [];
  public playersList: Asset[] = [];
  public npcList: Asset[] = [];
  public activeCreatureList: Asset[] = [];
  public activePlayersList: Asset[] = [];
  public activeNpcList: Asset[] = [];
  public npcs$ = new BehaviorSubject<Asset[]>(this.activeNpcList);
  public creatures$ = new BehaviorSubject<Asset[]>(this.activeCreatureList);
  public players$ = new BehaviorSubject<Asset[]>(this.activeCreatureList);
  public activeNpcs = new BehaviorSubject<Asset[]>(this.activeNpcList);
  public activeCreatures = new BehaviorSubject<Asset[]>(this.activeCreatureList);
  public activePlayers = new BehaviorSubject<Asset[]>(this.activeCreatureList);
  public creatureSelectionList: string[] = [];
  public playerSelectionList: string[] = [];
  public npcSelectionList: string[] = [];
  public useGenericNpcs = false;
  public useGenericCreatures = false;

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

  public async initCreatureList(): Promise<void> {
    const user = await this.fireAuth.currentUser
    if (this.useGenericCreatures) {
      this.getGenericCreatures();
    }

    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
      .collection("creatures")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.creatureList.push(new Asset(doc.data()));
        });
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures$.next(this.creatureList);

      });
  }

  public getGenericCreatures(): void {
    this.firestore
      .collection("creatures")
      .get()
      .subscribe(snapshot => {
        snapshot.forEach(doc => {
          this.creatureList.push(new Asset(doc.data()));
        });
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
      });
  }

  public async initPlayersList(): Promise<void> {
    const user = await this.fireAuth.currentUser
    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
      .collection("players")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.playersList.push(new Asset(doc.data()));
        });
        this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
        this.players$.next(this.playersList);
      });
  }

  public async initNpcList(): Promise<void> {
    const user = await this.fireAuth.currentUser
    if (this.useGenericNpcs) {
      this.getGenericNpcList();
    }

    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
      .collection("npcs")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npcList.push(new Asset(doc.data()));
        });
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs$.next(this.npcList);
      });
  }

  public getGenericNpcList(): void {
    this.firestore
      .collection("npcs")
      .get()
      .subscribe(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.npcList.push(new Asset(doc.data()));
        });
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
      });
  }

  public async updateSession(): Promise<void> {
    const user = await this.fireAuth.currentUser
    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
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

  public addToCreatureList(asset: Asset, type: string): void {
    switch (type) {
      case "Creature":
        this.creatureList.push(asset);
        this.creatureList = sortBy(this.creatureList, ["name"], ["asc"]);
        this.creatures$.next(this.creatureList);
        break;
      case "Player":
        this.playersList.push(asset);
        this.playersList = sortBy(this.playersList, ["name"], ["asc"]);
        this.players$.next(this.playersList);
        break;
      case "Npc":
        this.npcList.push(asset);
        this.npcList = sortBy(this.npcList, ["name"], ["asc"]);
        this.npcs$.next(this.npcList);
        break;
    }
  }

  public async loadGameSession(gameName: string): Promise<void> {
    const user = await this.fireAuth.currentUser
    this.currentGame = gameName;
    this.clearCurrentGameSession();

    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${user.uid}`)
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

  public clearCurrentGameSession(): void {
    this.creatureList = [];
    this.playersList = [];
    this.npcList = [];
    this.activeCreatureList = [];
    this.activePlayersList = [];
    this.activeNpcList = [];
    this.creatureSelectionList = [];
    this.playerSelectionList = [];
    this.npcSelectionList = [];
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

  public add(creature: Asset, type: string): void {
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
