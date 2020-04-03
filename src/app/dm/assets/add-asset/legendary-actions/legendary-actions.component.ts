import { Component, OnInit, Input } from "@angular/core";
import { Creature, Trait } from "../../creature.model";

@Component({
  selector: "app-legendary-actions",
  templateUrl: "./legendary-actions.component.html",
  styleUrls: ["./legendary-actions.component.scss"]
})
export class LegendaryActionsComponent {
  @Input() public creature: Creature;
  public newAction = new Trait();

  public onTraitAdd(): void {
    this.creature.legendaryActions.push(this.newAction);
    this.newAction = new Trait();
  }
}
