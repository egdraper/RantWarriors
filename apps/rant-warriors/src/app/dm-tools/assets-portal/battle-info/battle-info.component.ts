import { Component, Input } from "@angular/core";
import { cloneDeep } from "lodash";
import { Subscription } from "rxjs";
import { Asset } from "../../../utils/asset";
import { Constants } from "../../../utils/constants";
import { Action, WeaponsModel } from "../../../utils/creature.model";

@Component({
  selector: "app-battle-info",
  templateUrl: "./battle-info.component.html",
  styleUrls: ["./battle-info.component.scss"]
})
export class BattleInfoComponent {
  @Input() public asset: Asset;
  public action = new Action();
  public buttonAction = "ADD";

  public weapons = Constants.weapons
  public dice = Constants.dice;
  public damageTypes = Constants.damageTypes;
  public abilities = Constants.abilities;
  public reach = Constants.reach;
  public reachSelection = "" 

  public actionSubscription: Subscription;

  public ngOnInit(): void {
    this.actionSubscription = this.asset.actionChange.subscribe(t => {
      if (t) {
        this.action = t.action;
        this.buttonAction = t.name;
      }
    });
  }

  public ngOnDestroy(): void {
    this.actionSubscription.unsubscribe();
  }

  public addAttackAction(event): void {
    if(event.currentTarget.type === "submit") { return }

    if (this.buttonAction === "ADD" || this.buttonAction === "Duplicate") {
      this.asset.actions.push(cloneDeep(this.action));
    }

    this.buttonAction = "ADD";
    this.action = new Action();
    this.action.hasBonusDamage = false;
    this.reachSelection = ""
  }

  public onAttackUses(element): void {
    this.action.attackModifier = this.asset.proficiency + Constants.getAbilityModifier(this.action.attackUses);
    this.asset.updateDamageDice(this.action);
    this.asset.updateAttackDice(this.action);
  }

  public onDamageDiceChange(event): void {
    if(event.value = "None") {
      this.action.numberOfDiceSides = "" 
    }
    this.asset.updateDamageDice(this.action);
  }

  public onNumberOfRollChange(): void {
    this.asset.updateDamageDice(this.action);
  }

  public onRangeChange(action: Action, selection: string): void {
    if(selection === "Range") { 
      action.rangeType = "Range"
      return 
    }

    if(selection.includes("Thrown")) {
      action.rangeType = "Thrown"
      action.range = `${selection.split(" ")[1]}`
      return
    }

    action.rangeType = "Melee"
    action.range = selection.split(" ")[1]
  }

  public onWeaponSelected(event): void {
    const weapon = event.option.value as WeaponsModel
    const dice = weapon.damage.split("d")
   
    this.action.name = weapon.name
    this.action.numberOfDiceSides = `d${dice[1]}`
    this.action.numberOfRoll = +dice[0]
    this.action.dice = weapon.damage
    this.action.attackType = weapon.damageType
    this.action.range = weapon.range
    if (Array.isArray(weapon.usesAbility)){
      this.action.attackUses = this.asset.abilities.STR >= this.asset.abilities.DEX ? "STR" : "DEX"
    } else {
      this.action.attackUses = weapon.usesAbility
    }
    
    if (weapon.reach) {
      this.reachSelection = "Melee 10ft"
      this.onRangeChange(this.action, "Melee 10ft")
    } else if (weapon.range && weapon.attributes.find(attribute => attribute === "Thrown")) {
      this.reachSelection = "Thrown"
      this.onRangeChange(this.action, `Thrown ${weapon.range}`)
    } else if (weapon.range) {
      this.reachSelection = "Range"
      this.onRangeChange(this.action, "Range")
      this.action.range = `${weapon.range}`
    } else {
      this.reachSelection = "Melee 5ft"
      this.onRangeChange(this.action, "Melee 5ft")
    }

    this.asset.updateDamageDice(this.action);
    this.asset.updateAttackDice(this.action);
  }

}
