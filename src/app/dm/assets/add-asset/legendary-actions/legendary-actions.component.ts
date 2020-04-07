import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Asset } from "../asset";
import { Trait } from "../../creature.model";
import { Subscription } from "rxjs";

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
