import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Asset } from "../../../utils/asset";
import { Trait } from "../../../utils/creature.model";

@Component({
  selector: "app-trait-info",
  templateUrl: "./trait-info.component.html",
  styleUrls: ["./trait-info.component.scss"]
})
export class TraitInfoComponent implements OnDestroy, OnInit {
  @Input() public asset: Asset;
  public newTrait = new Trait();
  public traitSubscription: Subscription;

  public ngOnInit(): void {
    this.traitSubscription = this.asset.traitChange.subscribe(t => {
      if (t) { this.newTrait = t; }
    });
  }

  public ngOnDestroy(): void {
    this.traitSubscription.unsubscribe();
  }

  public onTraitAdd(): void {
    this.asset.traits.push(this.newTrait);
    this.newTrait = new Trait();
  }
}
