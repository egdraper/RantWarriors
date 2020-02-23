import { Creature, Action } from "../creature.model";

export class BarbedDevil implements Creature {
  public name = "Barbed Devil";
  public armorClass = 15;
  public speed = "30ft.";
  public challenge = 5;
  public maxHitPoints = 110;
  public currentHitPoints = 110;
  public hitDice = "13d8+52";
  public flySpeed = 0;
  public link = "https://roll20.net/compendium/dnd5e/Barbed%20Devil#content";
  public page = 0;
  public passivePerception = 18;
  public experience = 1800;
  public numberOfActions = 3;
  public size = "Medium";
  public alignment = "Chaotic Evil";
  public imgUrl = "../../assets/img/creeepy.png";

  public abilities = {
    strength: 3,
    dexterity: 3,
    constitution: 4,
    intelligence: 1,
    wisdom: 2,
    charisma: 2
  };

  public savingThrows = [
    {
      ability: "STR",
      value: 6
    },
    {
      ability: "CON",
      value: 7
    },
    {
      ability: "WIS",
      value: 5
    },
    {
      ability: "CHA",
      value: 5
    },
   ];

  public skillProficiencies = [
    {
      ability: "Deception",
      value: 5
    },
    {
      ability: "Insight",
      value: 5
    },
    {
      ability: "Perception",
      value: 8
    },
   ];

  public resistances = [ "Cold", "Bludgeoning, Piercing, And Slashing From Nonmagical Attacks That Aren't Silvered"];

  public immunities = ["Fire", "Poison"];

  public conditionImmunities = ["Poisoned"];

  public vulnerabilities = [];

  public senses = [ {
    sense: "Darkvision",
    value: 120
  }];

  public languages = [ "Infernal" ];

  public traits = [ 
    {
      name: "Barbed Hide",
      info: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature Grappling it."
    },
    {
      name: "Devil's Sight",
      info: "Magical Darkness doesn't impede the devil's Darkvision."
    },
    {
      name: "Magic Resistance",
      info: "The devil has advantage on Saving Throws against Spells and other magical Effects."
    }
  ];

  public actions: Action[] = [
    {
      name:  "Tail",
      attackBonus: 6,
      range: "5",
      dice: "2d6+3",
      attackType: "Piercing",
      allowedInMultipleAttacks: true,
    }, {
      name: "Claw",
      attackBonus: 5,
      range: "5",
      dice: "1d6+3",
      attackType: "Slashing",
      allowedInMultipleAttacks: true
    }, {
      name: "Hurl Flame",
      attackBonus: 5,
      range: "150",
      dice: "3d6",
      attackType: "Fire",
      actionBonus: ["If the target is a flammable object that isn't being worn or carried, it also catches fire"],
      allowedInMultipleAttacks: true
    }
  ];

  public legendaryActions = [];
}
