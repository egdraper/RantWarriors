import { Component, OnInit, Input } from "@angular/core";
import { Creature, Trait } from "../../creature.model";

@Component({
  selector: "app-trait-info",
  templateUrl: "./trait-info.component.html",
  styleUrls: ["./trait-info.component.scss"]
})
export class TraitInfoComponent {
  @Input() public creature: Creature;
  public newTrait = new Trait();

  public onTraitAdd(): void {
    this.creature.traits.push(this.newTrait);
    this.newTrait = new Trait();
  }
}
