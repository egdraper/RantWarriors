import { Creature, Action } from "../creature.model";
import { Npc } from "../npc.model";

export class Nataliel implements Npc {
  public challenge = 21;
  public name = "Nataliel";
  public maxHitPoints = 243;
  public currentHitPoints = 243;
  public hitDice = "18d10+144";
  public armorClass = 21;
  public speed = "50ft";
  public flySpeed = 150;
  public link = "http://online.anyflip.com/duex/ixpz/mobile/index.html#p=18";
  public page = 19;
  public imgUrl = "https://i.pinimg.com/originals/69/26/0c/69260c4ae780004068c8ea2f68a79c3d.png";
  public passivePerception = 24;
  public experience = 33000;
  public numberOfActions = 2;
  public class = "Solar";
  public relationship = "Random";
  public size = "Large";
  public alignment = "Lawful Good";

  public relations = ["Angelic Solar met on the road to clayton"];

  public notes = [
    "Magical Items: upon death, she gifts the travelers with special bracelets giving them magical ability",
    "If she kills a human, she must go into contemplation for a 1000 years",
    "In killing the doppelganger, she also kills the human unknowingly."
  ];

  public savingThrows = [
    {
      ability: "Int",
      value: 14
    },
    {
      ability: "Wis",
      value: 14
    },
    {
      ability: "Cha",
      value: 17
    }
  ];

  public skillProficiencies = [
    {
      ability: "Const",
      value: 12
    }
  ];

  public senses = [
    {
      sense: "True Sight",
      value: 120
    },
    {
      sense: "Passive Perception",
      value: 14
    }
  ];

  public abilities = {
    strength: 8,
    dexterity: 6,
    constitution: 8,
    intelligence: 7,
    wisdom: 7,
    charisma: 10
  };

  public resistances = [
    "Radiant",
    "Bludgeoning, Piercing, and Slashing from non magical weapons"
  ];

  public immunities = ["Charmed", "Exhaustion", "Frightened", "Poisoned"];

  public languages = ["All", "Telepathy (120)"];

  public conditionImmunities = [];

  public vulnerabilities = [];

  public traits = [
    {
      name: "Angelic Weapons",
      info: `The Solar's weapon attacks are magical. When the Solar hits with any weapon,
        the weapon deals an extra 5d8 radiant damage (included in the attack).`
    },
    {
      name: "Divine Awareness",
      info: `The Solar knows if it hears a lie.`
    },
    {
      name: "Innate SpellCasting",
      info: `The Solar's spellcasting Ability is Charisma (spell save DC 20). The Solar can innately cast the following Spells, requiring no material components:
         \nAt will: Detect Evil and Good, Invisibility (self only)
         3/day each: Blade Barrier, Dispel Evil and Good, Resurrection
         1/day each: Commune, Control Weather`
    },
    {
      name: "Magic Resistance",
      info: `The Solar has advantage on Saving Throws against Spells and other magical Effects.`
    }
  ];

  public actions: Action[] = [
    {
      name: "Greatsword",
      allowedInMultipleAttacks: true,
      attackType: "Slashing",
      attackBonus: 15,
      range: "5",
      actionBonus: ["27 radiant damage"],
      dice: "4d6+8"
    },
    {
      name: "Slaying Longbow",
      attackType: "Piercing",
      attackBonus: 13,
      range: "120/600",
      dice: "2d8+6",
      numberOfTargets: 1,
      actionBonus: [
        "27 radiant damage",
        "Target < 100 hp, it must succeed DC 15 Const saving throw or die"
      ]
    },
    {
      name: "Flying Sword",
      allowedInMultipleAttacks: true,
      attackType: "Slashing",
      attackBonus: 15,
      range: "5",
      dice: "4d6+8",
      actionBonus: [
        `The solar releases its Greatsword to hover magically in an unoccupied space within 5 ft. of it.
        If the solar can see the sword, the solar can mentally Command it as a Bonus Action to fly up to 50 ft.
        and either make one Attack against a target or return to the solar's hands. If the hovering sword is
        targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.`
      ]
    },
    {
      name: "Healing Touch",
      actionBonus: [
        `(4/Day): The solar touches another creature. The target magically regains 40 (8d8 + 4)
        Hit Points and is freed from any curse, disease, poison, blindness, or deafness.`
      ]
    }
  ];

  public legendaryActionsInfo = "Can take 3 Legendary Actions, choosing from the options below. Only one legendary action can be used at a time, and only at the end of another creature's turn. Spent legendary Actions are regained at the start of each turn."

  public legendaryActions = [
    {
      name: `Teleport`,
      info: `The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.`
    },
    {
      name: `Searing Burst (Costs 2 Actions)`,
      info: `The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a
        DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save,
        or half as much damage on a successful one.`
    },
    {
      name: `Blinding Gaze (Costs 3 Actions)`,
      info: `The solar targets one creature it can see within 30 ft. of it. If the target can see it, 
        the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as
        the lesser restoration spell removes the blindness.`
    }
  ];
}
