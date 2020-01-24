import { Component } from "@angular/core";
import { cloneDeep, remove } from "lodash";
import { Creature } from "./assets/creature.model";
import { creatures } from "./assets/creature.db";
import { MagicService } from "./assets/magic/magic.service";

@Component({
    selector: "dm-screen",
    templateUrl: "./dm-screen.component.html",
    styleUrls: ["./dm-screen.component.scss"]
  })
  export class DmScreenComponent {
  }
