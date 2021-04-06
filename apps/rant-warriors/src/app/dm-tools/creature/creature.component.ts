import { Component } from "@angular/core";
import { cloneDeep } from "lodash";
import { Asset } from "../../utils/asset";
import { Constants } from "../../utils/constants";
import { DbService } from "../../utils/dbService";
import { DbSessionService } from "../../utils/dbSession";
import { sortBy } from "lodash"

@Component({
  selector: "creature",
  templateUrl: "./creature.component.html",
  styleUrls: ["./creature.component.scss"]
})
export class CreatureComponent {
  public challengeRatings = Constants.getRatings(10);
  public selectableAssets = []
  public hoveredAsset: Asset
  public hoveredLocX: number
  public hoveredLocY: number

  private selectedCreature: string;

  constructor(
    public dbService: DbService,
    public dbSessionService: DbSessionService
  ) {
    dbSessionService.creatures$.subscribe(creatures => { 
      this.selectableAssets = sortBy(creatures, creature => {
        return this.challengeRatings.find(rating => rating.display === creature.challenge).value
    })
  })
  }

  public onCreatureChange(creature: any): void {
    this.selectedCreature = creature.value;
  }

  public addCreature(asset?: Asset): void {  
    let chosenCreature
    if(asset) {
      chosenCreature = new Asset(cloneDeep(asset))
    } else {
      chosenCreature = new Asset(cloneDeep(
        this.dbSessionService.creatureList.find(
          npc => npc.name === this.selectedCreature
        )
      ));
    }

    chosenCreature.name = `${chosenCreature.name} ${this.dbSessionService
      .activeCreatureList.length + 1}`;
    chosenCreature.editing = false
    this.dbSessionService.add(chosenCreature, "creatures");
  }

  public onRemove(index: number): void {
    this.dbSessionService.remove(index, "creatures");
  }

  public onRatingChange(): void {
    const assets = this.dbSessionService.creatureList.filter(cr => {
      const ratings = this.challengeRatings.filter(rating => rating.selected)
      return ratings.find(rating => cr.challenge === rating.display)
    })

    this.selectableAssets = sortBy(assets, creature => {
      return this.challengeRatings.find(rating => rating.display === creature.challenge).value
    })
    
  }

  public onMouseOver(asset: Asset, event: any): void {
    this.hoveredAsset = asset
    this.hoveredLocY = event.target.offsetHeight
    this.hoveredLocX = event.target.offsetLeft
  }

  public onMouseOut(asset: Asset, event: MouseEvent): void {
    this.hoveredAsset = null
    this.hoveredLocX = null
    this.hoveredLocY = null
  }

}