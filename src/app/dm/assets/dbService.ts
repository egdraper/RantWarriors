import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { npcs } from "./npc.db";
import { AngularFirestore } from "@angular/fire/firestore";
import { sortBy } from "lodash";
import { AngularFireAuth } from "@angular/fire/auth";
import { DbSessionService } from "./dbSession";

@Injectable()
export class DbService {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private sessionService: DbSessionService
  ) {}

  public async createGame(game: any): Promise<void> {
    await this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("games")
      .doc(game.name)
      .set({
        game,
        session: {
          creatures: [],
          npcs: [],
          players: []
        }
      });

    this.sessionService.currentGame = game.name;
    this.sessionService.addSession();
  }

  public async getGames(): Promise<string[]> {
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${this.fireAuth.auth.currentUser.uid}`)
        .collection("games")
        .get()
        .subscribe(querySnapshot => {
          resolve(querySnapshot.docs.map(doc => doc.data().game.name));
        });
    });
  }

  public addCreature(creature: Creature, type: string): void {
    const cleanCreature = JSON.parse(JSON.stringify(creature));

    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection(type)
      .doc(creature.name)
      .set(cleanCreature);

    this.sessionService.addToCreatureList(creature);
  }
}
