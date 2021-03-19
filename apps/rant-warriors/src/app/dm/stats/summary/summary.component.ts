import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Asset } from "../../assets/add-asset/asset";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Dice } from "../../assets/dice/dice.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent {
  @Input() public activeAssets: Asset[];
  @Input() public activePlayers: Asset[];
  @Output() public select = new EventEmitter<number>();

  public attackingPlayers: Asset[] = [];
  public totalDamageTaken = 0;

  constructor() { }

  public onSelect(index: number): void {
    this.select.emit(index);
  }

  public drop(event: any): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  public onDragDrop(event: any): void {
    //ToDo
  }

  public onDragOver(event: any): void {
    //ToDo
  }

  public autoAttackAll(player: Asset): void {
    let damageTaken = 0;
    player.attackers.forEach(ap => {
      let actionsTaken = 0;
      ap.actions.forEach(action => {
        if (action.isAttackAction && actionsTaken < ap.numberOfActions) {
          actionsTaken++;
          const roll = new Dice().roll(`d20+${action.attackModifier}`);
          if (roll.modifiedRollValue >= player.armorClass) {
            let bonusDamage = 0;
            const damage = new Dice().roll(action.dice).modifiedRollValue;
            if (action.bonusDamageDice) {
              bonusDamage = new Dice().roll(action.bonusDamageDice).modifiedRollValue;
            }

            damageTaken += damage + bonusDamage;
          }
        }
      });
    })
    this.totalDamageTaken = damageTaken;
  }
}
