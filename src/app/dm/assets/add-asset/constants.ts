export class Constants {
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
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Huge",
    "Gargantua"
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

  public static skills = [
    "Acrobatics",
    "Animal",
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
    "Abilities",
    "Proficiencies",
    "Immunities+",
    "Traits",
    "Legendary Actions"
  ];

  public static senses = [
    "Blindsight",
    "Darkvision",
    "Tremorsense",
    "Truesight"
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
    "Humanoid",
    "Monstrosity",
    "Ooze",
    "Plant",
    "Undead"
  ];
}

export enum CreaturePart {
  creature = "Creature",
  battle = "Battle",
  ability = "Ability"
}
