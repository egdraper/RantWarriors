import { Injectable } from "@angular/core";
import { Creature } from "./creature.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { DbSessionService } from "./dbSession";
import { Asset } from "./asset";

@Injectable()
export class DbService {
  constructor(
    private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private sessionService: DbSessionService,
  ) {

  }

  public async createGame(game: any): Promise<void> {
    const user = await this.fireAuth.currentUser
    await this.firestore
      .collection("users")
      .doc(`${user.uid}`)
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
    this.fireAuth.signOut()
  }

  public async getGames(): Promise<string[]> {
    const user = await this.fireAuth.currentUser
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${user.uid}`)
        .collection("games")
        .get()
        .subscribe(querySnapshot => {
          resolve(querySnapshot.docs.map(doc => doc.data().game.name));
        });
    });
  }

  public async addPendingCreature(asset: Asset): Promise<void> {
    const user = await this.fireAuth.currentUser
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection("users")
    .doc(`${user.uid}`)
    .collection("pending")
    .doc("pendingAsset")
    .get()
    .subscribe(querySnapshot => {
      if (!querySnapshot.data()) {

        this.firestore
        .collection("users")
        .doc(`${user.uid}`)
        .collection("pending")
        .doc("pendingAsset")
        .set(cleanCreature);
      }
    });
  }

  public async updatePendingCreature(asset: Asset): Promise<void> {
    const user = await this.fireAuth.currentUser
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
      .collection("pending")
      .doc("pendingAsset")
      .update(cleanCreature);
  }

  public async getPendingCreatures(): Promise<Asset> {
    const user = await this.fireAuth.currentUser
    return new Promise(resolve => {
      this.firestore
        .collection("users")
        .doc(`${user.uid}`)
        .collection("pending")
        .doc("pendingAsset")
        .get()
        .subscribe(querySnapshot => {
          resolve(new Asset(querySnapshot.data() as Creature));
        });
    });
  }

  public async addCreature(asset: Asset, type: string): Promise<void> {
    const user = await this.fireAuth.currentUser
    asset.globalAsset = false;
    const cleanType = type.toLowerCase() + "s";
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
      .collection("users")
      .doc(`${user.uid}`)
      .collection(cleanType)
      .doc(cleanCreature.name)
      .set(cleanCreature);

    this.sessionService.addToCreatureList(asset, type);
  }

  public async updateAsset(asset: Asset, type: string): Promise<void> {
    const user = await this.fireAuth.currentUser
    const cleanType = type.toLowerCase() + "s";
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection("users")
    .doc(`${user.uid}`)
    .collection(cleanType)
    .doc(cleanCreature.name)
    .update(cleanCreature);
  }

  public addGlobalCreature(asset: Asset, type: string): void {
    asset.globalAsset = true;
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

  public updateGlobalAsset(asset: Asset, type: string): void {
    const cleanType = type.toLowerCase() + "s";
    const blankCreature = this.convertToCreature(asset);
    const cleanCreature = JSON.parse(JSON.stringify(blankCreature));

    this.firestore
    .collection(cleanType)
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
      selectedAggressor: asset.selectedAggressor,
      savingThrows: asset.savingThrows,
      senses: asset.senses,
      size: asset.size,
      skillProficiencies: asset.skillProficiencies,
      speed: asset.speed,
      traits: asset.traits,
      vulnerabilities: asset.vulnerabilities,
      shield: asset.shield,
    }
  }
}
