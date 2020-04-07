import { Component, Input } from "@angular/core";
import { Asset } from "../asset";
import { Trait } from "../../creature.model";

@Component({
  selector: "app-legendary-actions",
  templateUrl: "./legendary-actions.component.html",
  styleUrls: ["./legendary-actions.component.scss"]
})
export class LegendaryActionsComponent {
  @Input() public asset: Asset;
  public newAction = new Trait();

  public onTraitAdd(): void {
    this.asset.legendaryActions.push(this.newAction);
    this.newAction = new Trait();
  }
}
