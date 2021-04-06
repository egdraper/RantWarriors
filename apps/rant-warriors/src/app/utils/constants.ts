import { RatingModel } from "./creature.model";

export class Constants {
  public static armor = [
    { name: "Natural", acBonus: 10 },
    { name: "Leather", acBonus: 11, plus: "Dex" },
    { name: "Padded", acBonus: 11, plus: "Dex" },
    { name: "Studded Leather", acBonus: 12, plus: "Dex" },
    { name: "Breastplate", acBonus: 14, plus: "Dex", max: 2 },
    { name: "Chain Shirt", acBonus: 13, plus: "Dex", max: 2 },
    { name: "Half plate", acBonus: 15, plus: "Dex", max: 2 },
    { name: "Hide", acBonus: 12, plus: "Dex", max: 2 },
    { name: "Scale Mail", acBonus: 14, plus: "Dex", max: 2 },
    { name: "Chain Mail", acBonus: 16 },
    { name: "Plate", acBonus: 18 },
    { name: "Chain Mail", acBonus: 14 },
    { name: "Splint", acBonus: 17 }
  ];

  public weapons = [
    
    {name: "Claw", damageType: "Slashing"},
    {name: "Club", damageType: "Bludgeoning"},
    {name: "Dagger", damageType: "Piercing"},
    {name: "Creatclub", damageType: "Bludgeoning"},
    {name: "Bite", damageType: "Piercing"},
    {name: "Tail", damageType: "Bludgeoning"},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
    {name: "", damageType: ""},
  ]

  public static languages = [
    "Abyssal",
    "Aquan",
    "Celestial",
    "Common",
    "Deep Speech",
    "Draconic",
    "Druidic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Ignan",
    "Infernal",
    "Orc",
    "Primodial",
    "Sylvan",
    "Terran",
    "Thieves Cant",
    "Undercommon",
  ]

  public static reach = [
    "Range",
    "Thrown",
    "Melee 5ft",
    "Melee 10ft",
    "Melee 15ft",
    "Melee 20ft"
  ]

  public static hitDice;

  public static alignments = [
    "Unaligned",
    "Lawful Good",
    "Neutral Good",
    "Chaotic Good",
    "Lawful Neutral",
    "True Neutral",
    "Chaotic Neutral",
    "Lawful Evil",
    "Neutral Evil",
    "Chaotic Evil"
  ];

  public static sizes = [
    { name: "Tiny", dice: "d4", multiplier: 2.5 },
    { name: "Small", dice: "d6", multiplier: 3.5 },
    { name: "Medium", dice: "d8", multiplier: 4.5 },
    { name: "Large", dice: "d10", multiplier: 5.5 },
    { name: "Huge", dice: "d12", multiplier: 6.5 },
    { name: "Gargantua", dice: "d20", multiplier: 10.5 }
  ];

  public static damageTypes = [
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder"
  ];

  public static immunities = [
    ...Constants.damageTypes,
    "Blinded"
  ]

  public static dice = ["None", "d4", "d6", "d8", "d10", "d12", "d20"];

  public static abilities = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  public static skills = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "Endurance",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight",
    "Stealth",
    "Streetwise",
    "Survival"
  ];

  public static navItems = [
    "Creature",
    "Battle",
    "Attributes",
    "Abilities",
    "Proficiencies",
    "Immunities+",
    "Traits",
    "Legendary Actions"
  ];

  public static senses = [
    "Blindsight: 30ft",
    "Blindsight: 60ft",
    "Darkvision: 60ft",
    "Darkvision: 120ft",
    "Tremorsense: 60ft",
    "Truesight: 120ft"
  ];

  public static creatureTypes = [
    "Aberration",
    "Beast",
    "Celestial",
    "Construct",
    "Dragon",
    "Elemental",
    "Fey",
    "Fiend",
    "Giant",
    "Goblinoid",
    "Humanoid",
    "Monstrosity",
    "Ooze",
    "Plant",
    "Undead"
  ];

  public static humanoidTypes = [
    "Blue",
    "BugBear",
    "Dwarf",
    "Elf",
    "Gnoll",
    "Grimlock",
    "Half-elf",
    "Half-Orc",
    "Halfling",
    "HobGoblin",
    "Human",
    "Kobold",
    "LizardFolk",
    "Maenad",
    "Merfolk",
    "Orc",
    "Reptilian",
    "Svirfneblin",
    "Troglodyte",
    "Werewolf",
    "Xeph"
  ];

  public static conditions: string[] = [
    "Blinded",
    "Charmed",
    "Deafended",
    "Fatigued",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious"
  ];

  public static weapons = [
    {
      name: "Club",
      cost: "1 sp",
      damage: "1d4",
      damageType: "Bludgeoning",
      range: "",
      weight: "2 lb",
      attributes: ["Light"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Dagger",
      cost: "2 gp",
      damage: "1d4",
      damageType: "Piercing",
      range: "20/60",
      weight: "1 lb",
      attributes: ["Finesse", "Light", "Thrown"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: ["STR", "DEX"]
    },
    {
      name: "Greatclub",
      cost: "2 sp",
      damage: "1d8",
      damageType: "Bludgeoning",
      range: "",
      weight: "10 lb",
      attributes: ["Two-handed"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Handaxe",
      cost: "5 gp",
      damage: "1d6",
      damageType: "Slashing",
      range: "20/60",
      weight: "2 lb",
      attributes: ["Light", "Thrown"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Javelin",
      cost: "5 sp",
      damage: "1d6",
      damageType: "Piercing",
      range: "30/120",
      weight: "2 lb",
      attributes: ["Thrown"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Light hammer",
      cost: "2 gp",
      damage: "1d4",
      damageType: "Bludgeoning",
      range: "20/60",
      weight: "2 lb",
      attributes: ["Light", "Thrown"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Mace",
      cost: "5 gp",
      damage: "1d6",
      damageType: "Bludgeoning",
      range: "",
      weight: "4",
      attributes: [],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Quarterstaf",
      cost: "2 sp",
      damage: "1d6",
      damageType: "Bludgeoning",
      range: "",
      weight: "4 lb",
      attributes: [],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Sickle",
      cost: "1 gp",
      damage: "1d4",
      damageType: "Slashing",
      range: "",
      weight: "2 lb",
      attributes: ["Light"],
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Spear",
      cost: "1 gp",
      damage: "1d6",
      damageType: "Piercing",
      range: "20/60",
      weight: "",
      attributes: ["Thrown", "Versatile"],
      versatileDamage: "1d8",
      weaponClass: "Simple Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Crossbow, light",
      cost: "25 gp",
      damage: "1d8",
      damageType: "Piercing",
      range: "80/320",
      weight: "5 lb",
      attributes: ["Ammunition", "Loading", "Two Handed"],
      weaponClass: "Simple Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Dart",
      cost: "5 cp",
      damage: "1d4",
      damageType: "Piercing",
      range: "20/60",
      weight: "1/4 lb",
      attributes: ["Finesse", "Thrown"],
      weaponClass: "Simple Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Shortbow",
      cost: "25gp",
      damage: "1d6",
      damageType: "Piercing",
      range: "80/320",
      weight: "2",
      attributes: ["Ammunition",  "Two handed"],
      weaponClass: "Simple Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Sling",
      cost: "1sp",
      damage: "1d4",
      damageType: "Bludgeoning",
      range: "30/120",
      weight: "",
      attributes: ["Ammunition"],
      weaponClass: "Simple Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Battleaxe",
      cost: "10 gp",
      damage: "1d8",
      damageType: "slashing",
      range: "",
      weight: "4 lb",
      attributes: ["Versatile"],
      versatileDamage: "1d10",
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Flail",
      cost: "10 gp",
      damage: "1d8",
      damageType: "bludgeoning",
      range: "",
      weight: "2 lb",
      attributes: [""],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Glaive",
      cost: "20 gp",
      damage: "1d10",
      damageType: "Slashing",
      range: "",
      reach: 10,
      weight: "6 lb",
      attributes: ["Heavy", "Reach", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Greataxe",
      cost: "30 gp",
      damage: "1d12",
      damageType: "Slashing",
      range: "",
      weight: "7 lb",
      attributes: ["Heavy", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Greatsword",
      cost: "50 gp",
      damage: "2d6",
      damageType: "Slashing",
      range: "",
      weight: "6 lb",
      attributes: ["Heavy", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Halberd",
      cost: "20 gp",
      damage: "1d10",
      damageType: "Slashing",
      range: "",
      reach: 10,
      weight: "6 lb",
      attributes: ["Heavy", "Reach", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Lance",
      cost: "10 gp",
      damage: "1d12",
      damageType: "Piercing",
      range: "",
      reach: 10,
      weight: "6 lb",
      attributes: ["Reach", "Special"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Longsword",
      cost: "15 gp",
      damage: "1d8",
      damageType: "Slashing",
      range: "",
      weight: "3 lb",
      attributes: ["Versatile"],
      versatileDamage: "1d10",
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Maul",
      cost: "10 pg",
      damage: "2d6",
      damageType: "Bludgeoning",
      range: "",
      weight: "10 lb",
      attributes: ["Heavy", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Morningstar",
      cost: "15 gp",
      damage: "1d8",
      damageType: "Bludgeoning",
      range: "",
      weight: "4 lb",
      attributes: [],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Pike",
      cost: "5 gp",
      damage: "1d10",
      damageType: "Piercing",
      range: "",
      reach: 10,
      weight: "18 lb",
      attributes: ["Heavy", "Reach", "Two-handed"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Rapier",
      cost: "25 gp",
      damage: "1d8",
      damageType: "Piercing",
      range: "",
      weight: "2 lb",
      attributes: ["Finesse"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: ["STR", "DEX"]
    },
    {
      name: "Scimitar",
      cost: "25 gp",
      damage: "1d6",
      damageType: "slashing",
      range: "",
      weight: "3 lb",
      attributes: ["Finesse", "Light"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: ["STR", "DEX"]
    },
    {
      name: "Shortsword",
      cost: "10 gp",
      damage: "1d6",
      damageType: "Piercing",
      range: "",
      weight: "2 lb",
      attributes: ["Finesse", "Light"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: ["STR", "DEX"]
    },
    {
      name: "Trident",
      cost: "5 gp",
      damage: "1d6",
      damageType: "Piercing",
      range: "20/60",
      weight: "4",
      attributes: ["Thrown",  "Versatile"],
      weaponClass: "Martial Melee/Ranged Weapons",
      usesAbility: "STR"
    },
    {
      name: "War pick",
      cost: "5 gp",
      damage: "1d8",
      damageType: "Piercing",
      range: "",
      weight: "2",
      attributes: [],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Warhammer",
      cost: "5 gp",
      damage: "1d8",
      damageType: "Bludgeoning ",
      range: "",
      weight: "2 lb",
      attributes: ["Versatile"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: "STR"
    },
    {
      name: "Whip",
      cost: "2",
      damage: "1d4",
      damageType: "slashing",
      range: "",
      reach: 10,
      weight: "2 lb",
      attributes: ["Finesse", "Reach"],
      weaponClass: "Martial Melee Weapons",
      usesAbility: ["STR", "DEX"]
    },
    {
      name: "Blowgun",
      cost: "10 gp",
      damage: "1",
      damageType: "Piercing",
      range: "25/100",
      weight: "1",
      attributes: ["Ammunition", "Loading"],
      weaponClass: "Martial Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Crossbow, hand",
      cost: "75",
      damage: "1d6",
      damageType: "30/120",
      range: "",
      weight: "3 lb",
      attributes: ["Ammunition", "Light", "Loading"],
      weaponClass: "Martial Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Crossbow, heavy",
      cost: "50 gp",
      damage: "1d10",
      damageType: "Piercing",
      range: "",
      weight: "100/400",
      attributes: ["Ammunition", "heavy", "Two-handed", "Special"],
      weaponClass: "Martial Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Longbow",
      cost: "50 gp",
      damage: "1d8",
      damageType: "Piercing",
      range: "150/600",
      weight: "2",
      attributes: ["Ammunition", "Heavy", "Two-handed"],
      weaponClass: "Martial Ranged Weapons",
      usesAbility: "DEX"
    },
    {
      name: "Net",
      cost: "1 pg",
      damage: "",
      damageType: "",
      range: "5/15",
      weight: "3 lb",
      attributes: ["Thrown", "Special"],
      weaponClass: "Martial Ranged Weapons",
      usesAbility: "DEX"
    }
  ]

  public static navMainOptions = ["Creature", "Npc", "Player"];

  public static getAbilityBySkill(skill): string {
    switch (skill) {
      case "Athletics":
        return "STR";
        break;
      case "Acrobatics":
      case "Sleight of Hand":
      case "Stealth":
        return "DEX";
        break;
      case "Arcana":
      case "History":
      case "Investigation":
      case "Nature":
      case "Religion":
        return "INT";
      case "Animal Handling":
      case "Insight":
      case "Medicine":
      case "Perception":
      case "Survival":
        return "WIS";
        break;
      case "Deception":
      case "Intimidation":
      case "Performance":
      case "Persuasion":
        return "CHA";
        break;
    }
  }

  public static getAbility(): string []
  {
    return [
      "STR",
      "DEX",
      "INT",
      "CON",
      "WIS",
      "CHA"
    ]
  }

  public static getAbilityInfo(): any {
    return [
      { name: "STR", skills: ["Athletics"] },
      { name: "DEX", skills: ["Acrobatics", "Sleight of Hand", "Stealth"] },
      { name: "INT", skills: ["Arcana", "History", "Investigation", "Nature", "Religion"] },
      { name: "WIS", skills: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"] },
      { name: "CHA", skills: ["Deception", "Intimidation", "Performance", "Persuasion"] }
    ]
  }

  public static getSkillByAbility(skill): string[] {
    switch (skill) {
      case "STR":
        return ["Athletics"];
        break;
      case "DEX":
        return ["Acrobatics", "Sleight of Hand", "Stealth"];
        break;
      case "INT":
        return ["Arcana", "History", "Investigation", "Nature", "Religion"];
        break;
      case "WIS":
        return [
          "Animal Handling",
          "Insight",
          "Medicine",
          "Perception",
          "Survival"
        ];
        break;
      case "CHA":
        return ["Deception", "Intimidation", "Performance", "Persuasion"];
        break;
    }
  }

  public static getAbilityModifier(abilityScore): number {
    switch (abilityScore) {
      case 1:
        return -5;
        break;
      case 2:
      case 3:
        return -4;
        break;
      case 4:
      case 5:
        return -3;
        break;
      case 6:
      case 7:
        return -2;
        break;
      case 8:
      case 9:
        return -1;
        break;
      case 10:
      case 11:
        return 0;
        break;
      case 12:
      case 13:
        return 1;
        break;
      case 14:
      case 15:
        return 2;
        break;
      case 16:
      case 17:
        return 3;
        break;
      case 18:
      case 19:
        return 4;
        break;
      case 20:
      case 21:
        return 5;
        break;
      case 22:
      case 23:
        return 6;
        break;
      case 24:
      case 25:
        return 7;
        break;
      case 26:
      case 27:
        return 8;
        break;
      case 28:
      case 29:
        return 9;
        break;
      case 30:
        return 10;
        break;
    }
  }

  public static getAbilityDice(abilityScore): string {
    switch (abilityScore) {
      case 1:
        return "d20-5";
        break;
      case 2:
      case 3:
        return "d20-4";
        break;
      case 4:
      case 5:
        return "d20-3";
        break;
      case 6:
      case 7:
        return "d20-2";
        break;
      case 8:
      case 9:
        return "d20-1";
        break;
      case 10:
      case 11:
        return "d20+0";
        break;
      case 12:
      case 13:
        return "d20+1";
        break;
      case 14:
      case 15:
        return "d20+2";
        break;
      case 16:
      case 17:
        return "d20+3";
        break;
      case 18:
      case 19:
        return "d20+4";
        break;
      case 20:
      case 21:
        return "d20+5";
        break;
      case 22:
      case 23:
        return "d20+6";
        break;
      case 24:
      case 25:
        return "d20+7";
        break;
      case 26:
      case 27:
        return "d20+8";
        break;
      case 28:
      case 29:
        return "d20+9";
        break;
      case 30:
        return "d20+10";
        break;
    }
  }

  public static getXP(challengeRating: string): number {
    switch (challengeRating) {
      case "0":
        return 10;
        break;
      case "1/8":
        return 25;
        break;
      case "1/4":
        return 50;
        break;
      case "1/2":
        return 100;
        break;
      case "1":
        return 200;
        break;
      case "2":
        return 450;
        break;
      case "3":
        return 700;
        break;
      case "4":
        return 1100;
        break;
      case "5":
        return 1800;
        break;
      case "6":
        return 2300;
        break;
      case "7":
        return 2900;
        break;
      case "8":
        return 3900;
        break;
      case "9":
        return 5000;
        break;
      case "10":
        return 5900;
        break;
      case "11":
        return 7200;
        break;
      case "12":
        return 8400;
        break;
      case "13":
        return 10000;
        break;
      case "14":
        return 11500;
        break;
      case "15":
        return 13000;
        break;
      case "16":
        return 15000;
        break;
      case "17":
        return 18000;
        break;
      case "18":
        return 20000;
        break;
      case "19":
        return 22000;
        break;
      case "20":
        return 25000;
        break;
      case "21":
        return 33000;
        break;
      case "22":
        return 41000;
        break;
      case "23":
        return 55000;
        break;
      case "24":
        return 62000;
        break;
      case "30":
        return 155000;
        break;
    }
  }

  public static getProficiency(challengeRating: string): number {
    switch (challengeRating) {
      case "0":
      case "1/8":
      case "1/4":
      case "1/2":
      case "1":
      case "2":
      case "3":
      case "4":
        return 2;
        break;
      case "5":
      case "6":
      case "7":
      case "8":
        return 3;
        break;
      case "9":
      case "10":
      case "11":
      case "12":
        return 4;
        break;
      case "13":
      case "14":
      case "15":
      case "16":
        return 5;
        break;
      case "17":
      case "18":
      case "19":
      case "20":
        return 6;
        break;
      case "21":
      case "22":
      case "23":
      case "24":
        return 7;
        break;
      case "25":
      case "26":
      case "27":
      case "28":
        return 8;
        break;
      case "30":
      case "29":
        return 9;
        break;
    }
  }

  public static getRatings(max: number = 30): RatingModel[] {
    const ratings: RatingModel[] = [];
    ratings.push({ value: 0, display: "0", selected: false });
    ratings.push({ value: 0.125, display: "1/8", selected: false });
    ratings.push({ value: 0.25, display: "1/4", selected: false });
    ratings.push({ value: 0.5, display: "1/2", selected: false });

    for (let i = 1; i <= max; i++) {
      ratings.push({ value: i, display: i.toString(), selected: false });
    }
    return ratings;
  }

  public static getWeapon
}

