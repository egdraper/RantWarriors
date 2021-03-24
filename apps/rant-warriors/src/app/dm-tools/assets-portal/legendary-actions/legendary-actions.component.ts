import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Asset } from "../../../utils/asset";
import { Trait } from "../../../utils/creature.model";

@Component({
  selector: "app-legendary-actions",
  templateUrl: "./legendary-actions.component.html",
  styleUrls: ["./legendary-actions.component.scss"]
})
export class LegendaryActionsComponent implements OnDestroy, OnInit {
  @Input() public asset: Asset;
  public newAction = new Trait();
  public traitSubscription: Subscription;

  public ngOnInit(): void {
    this.traitSubscription = this.asset.legendaryActionChange.subscribe(t => {
      if (t) { this.newAction = t; }
    });
  }

  public ngOnDestroy(): void {
    this.traitSubscription.unsubscribe();
  }

  public onTraitAdd(): void {
    if (this.newAction.name && this.newAction.info) {
      this.asset.legendaryActions.push(this.newAction);
      this.newAction = new Trait();
    }
  }
}
