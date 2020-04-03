import { Creature } from "../creature.model";
import { Constants } from "./constants";

export class Utilities {
  public static createHitDice(creature: Creature): void {
    const level = creature.level || "";
    const modifier = Constants.getAbilityModifier(creature.abilities.CON) * (level ? Number(level) : 1);
    const thing = modifier > 0 ? "+" : "";
    const dice = Constants.sizes.find(s => creature.size === s.name).dice;
    creature.hitDice = `${level}${dice}${thing}${modifier > 0 ? modifier : modifier < 0 ? modifier : ""}`;
    creature.hitDiceModifier = modifier;
    const sizeMultiplier = Constants.sizes.find(s => creature.size === s.name).multiplier;
    creature.maxHitPoints = Math.floor((creature.level ? creature.level : 1) * (sizeMultiplier) + creature.hitDiceModifier);
  }
}