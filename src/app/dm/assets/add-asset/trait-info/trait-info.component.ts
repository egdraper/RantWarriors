import { Component, Input } from "@angular/core";
import { Trait } from "../../creature.model";
import { Asset } from "../asset";

@Component({
  selector: "app-trait-info",
  templateUrl: "./trait-info.component.html",
  styleUrls: ["./trait-info.component.scss"]
})
export class TraitInfoComponent {
  @Input() public asset: Asset;
  public newTrait = new Trait();

  public onTraitAdd(): void {
    this.asset.traits.push(this.newTrait);
    this.newTrait = new Trait();
  }
}
