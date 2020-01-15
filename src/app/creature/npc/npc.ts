import { Creature } from "../creature.model"

export class Npc extends Creature {
  public relationship?: string;
  public homeTown?: string;
  public age?: number;
  public notes: string[];
  public relations: string[];
  public class: string;
}