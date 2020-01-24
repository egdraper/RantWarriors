import { Component } from "@angular/core";
import { MagicService } from "../assets/magic/magic.service";

@Component({
  selector: "player-adventuring",
  styleUrls: ["./adventuring.component.scss"],
  templateUrl: "./adventuring.component.html"
})
export class AdventuringComponent {
  public spell: string;
  public getSpell(): void {
    this.spell = new MagicService().getMagic();
  }
}
