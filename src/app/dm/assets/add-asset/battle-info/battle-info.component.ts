import { Component, Input } from "@angular/core";
import { cloneDeep } from "lodash";
import { Constants } from "../constants";
import { Asset } from "../asset";
import { Action } from "../../creature.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-battle-info",
  templateUrl: "./battle-info.component.html",
  styleUrls: ["./battle-info.component.scss"]
})
export class BattleInfoComponent {
  @Input() public asset: Asset;
  public action = new Action();
  public buttonAction = "ADD";

  public dice = Constants.dice;
  public damageTypes = Constants.damageTypes;
  public abilities = Constants.abilities;

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

  public addAttackAction(): void {
    if (this.buttonAction === "ADD" || this.buttonAction === "Duplicate") {
      this.asset.actions.push(cloneDeep(this.action));
    }

    this.buttonAction = "ADD";
    this.action = new Action();
    this.action.hasBonusDamage = false;
  }

  public onAttackUses(): void {
    this.action.attackModifier = this.asset.proficiency + Constants.getAbilityModifier(this.action.attackUses);
    this.asset.updateDamageDice(this.action);
    this.asset.updateAttackDice(this.action);
  }

  public onDamageDiceChange(): void {
    this.asset.updateDamageDice(this.action);
  }
}
