import { Pipe, PipeTransform } from "@angular/core";
import { Constants } from "../../assets/add-asset/constants";

@Pipe({ name: "abilityModifier" })
export class AbilityScoreModifierPipe implements PipeTransform {
  transform(value: number): string {
    return Constants.getAbilityDice(value);
  }
}
