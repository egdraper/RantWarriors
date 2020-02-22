import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { Creature } from "./creature.model";
import { creatures } from "./creature.db";
import { npcs } from "./npc.db";

@Injectable()
export class DbService {
  public creatures = new BehaviorSubject<Creature[]>(creatures);
  public npcs = new BehaviorSubject<Creature[]>(npcs);
}
