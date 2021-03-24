import { Component } from "@angular/core";
import { MagicService } from "../../common/magic/magic.service";
import { names } from "./names.db";

@Component({
  selector: "player-adventuring",
  styleUrls: ["./adventuring.component.scss"],
  templateUrl: "./adventuring.component.html"
})
export class AdventuringComponent {
  public spell: string;
  public name: string;
  public lastName: string;
  public domicile: string;

  public getSpell(): void {
    this.spell = new MagicService().getMagic();
  }

  public getRandomName(race: string): void {
    this.name = names[race][Math.floor(Math.random() * (names[race].length))];
    this.lastName = names["otherLastName"][Math.floor(Math.random() * (names["otherLastName"].length))];
  }

  public getDomicileName(): void {
    this.domicile = names["innShipTavern"][Math.floor(Math.random() * (names["innShipTavern"].length))];
  }
}
