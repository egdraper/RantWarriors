import { Barbum } from "./npc/barbum";
import { Glover } from "./npc/glover";
import { Jakum } from "./npc/jakum";
import { Lilly } from "./npc/lilly";
import { Nataliel } from "./npc/nataliel";
import { Randall } from "./npc/randall";
import { Npc } from "./npc.model";

export const npcs: Npc[] = [
  new Barbum(),
  new Glover(),
  new Jakum(),
  new Lilly(),
  new Nataliel(),
  new Randall(),
];
