import { Injectable } from "@angular/core";
import { Creature } from "./creature.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { DbSessionService } from "./dbSession";
import { Asset } from "./add-asset/asset";

@Injectable()
export class DbService {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private sessionService: DbSessionService,
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
  }

  public async signOut(): Promise<void> {
    this.fireAuth.auth.signOut();
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

  public addPendingCreature(asset: Asset): void {
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection("users")
    .doc(`${this.fireAuth.auth.currentUser.uid}`)
    .collection("pending")
    .doc("pendingAsset")
    .get()
    .subscribe(querySnapshot => {
      debugger
      if (!querySnapshot.data()) {

        this.firestore
        .collection("users")
        .doc(`${this.fireAuth.auth.currentUser.uid}`)
        .collection("pending")
        .doc("pendingAsset")
        .set(cleanCreature);
      }
    });
  }

  public updatePendingCreature(asset: Asset): void {
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection("pending")
      .doc("pendingAsset")
      .update(cleanCreature);
  }

  public getPendingCreatures(): Promise<Asset> {
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${this.fireAuth.auth.currentUser.uid}`)
        .collection("pending")
        .doc("pendingAsset")
        .get()
        .subscribe(querySnapshot => {
          resolve(new Asset(querySnapshot.data() as Creature));
        });
    });
  }

  public addCreature(asset: Asset, type: string): void {
    const cleanType = type.toLowerCase() + "s";
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
      .collection("users")
      .doc(`${this.fireAuth.auth.currentUser.uid}`)
      .collection(cleanType)
      .doc(cleanCreature.name)
      .set(cleanCreature);

    this.sessionService.addToCreatureList(asset, type);
  }

  public updateCreature(asset: Asset, type: string): void {
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection("users")
    .doc(`${this.fireAuth.auth.currentUser.uid}`)
    .collection("creatures")
    .doc(cleanCreature.name)
    .update(cleanCreature);
  }

  public addAdminCreature(asset: Asset, type: string): void {
    const cleanType = type.toLowerCase() + "s";
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
      .collection(cleanType)
      .doc(blankCreature.name)
      .set(cleanCreature);

    if (this.sessionService.useGenericNpcs) {
      this.sessionService.addToCreatureList(asset, type);
    }
  }

  public updateAdminCreature(asset: Asset, type: string): void {
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection(type)
    .doc(cleanCreature.name)
    .update(cleanCreature);
  }

  private convertToCreature(asset: Asset): Creature {
    return {
      abilities: asset.abilities,
      abilityRoll: asset.abilityRoll,
      actions: asset.actions,
      additionalArmor: asset.additionalArmor,
      alignment: asset.alignment,
      armorClass: asset.armorClass,
      armorType: asset.armorType,
      assetType: asset.assetType,
      attackNotes: asset.attackNotes,
      challenge: asset.challenge,
      conditionImmunities: asset.conditionImmunities,
      creatureType: asset.creatureType,
      currentHitPoints: asset.currentHitPoints,
      editing: asset.editing,
      experience: asset.experience,
      flySpeed: asset.flySpeed,
      hasAdvantage: asset.hasAdvantage,
      hasDisadvantage: asset.hasDisadvantage,
      hasLegendaryActions: asset.hasLegendaryActions,
      hitDice: asset.hitDice,
      hitDiceModifier: asset.hitDiceModifier,
      humanoidType: asset.humanoidType,
      imgUrl: asset.imgUrl,
      immunities: asset.immunities,
      languages: asset.languages,
      lastDamageTaken: asset.lastDamageTaken,
      legendaryActions: asset.legendaryActions,
      legendaryActionsInfo: asset.legendaryActionsInfo,
      level: asset.level,
      link: asset.link,
      maxHitPoints: asset.maxHitPoints,
      multiAttack: asset.multiAttack,
      name: asset.name,
      numberOfActions: asset.numberOfActions,
      page: asset.page,
      passivePerception: asset.passivePerception,
      proficiency: asset.proficiency,
      resistances: asset.resistances,
      savingThrows: asset.savingThrows,
      senses: asset.senses,
      size: asset.size,
      skillProficiencies: asset.skillProficiencies,
      speed: asset.speed,
      traits: asset.traits,
      vulnerabilities: asset.vulnerabilities,
    }
  }
}
