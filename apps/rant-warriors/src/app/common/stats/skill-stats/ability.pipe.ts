import { Pipe, PipeTransform } from "@angular/core";
import { Constants } from "../../../utils/constants";

@Pipe({ name: "abilityModifier" })
export class AbilityScoreModifierPipe implements PipeTransform {
  transform(value: number): string {
    return Constants.getAbilityDice(value);
  }
}
