import { Creature } from "./creature.model";
import { Mane, Cockatrice, Lemure, Quasit, Wolf, Dretch, Troll} from "./creatures";
import { MinotaurSkeleton } from "./creatures/minotaur-skeleton";
import { Quaggoth } from "./creatures/Quaggoth";
import { Pixie } from "./creatures/pixie";
import { SkeletonA } from "./creatures/skelton-a";
import { SkeletonB } from "./creatures/skelton-b";
import { SkeletonC } from "./creatures/skelton-c";
import { SkeletonGiant } from "./creatures/skelton-giant";

export const creatures: Creature[] = [
  new Cockatrice(),
  new Dretch(),
  new Lemure(),
  new Mane(),
  new MinotaurSkeleton(),
  new Quasit(),
  new Quaggoth(),
  new Troll(),
  new Wolf(),
  new Pixie(),
  new SkeletonA(),
  new SkeletonB(),
  new SkeletonC(),
  new SkeletonGiant(),
]

export class RatingModel {
  public value: number;
  public display: string;
  public selected: boolean;
}

export class Rating {
  public ratings: RatingModel[];

  constructor() {
    this.ratings = this.getRatings();
  }

  public getRatings(max: number = 30): RatingModel[] {
    const ratings: RatingModel[] = [];
    ratings.push({value: 0, display: "0", selected: false});
    ratings.push({value: .125, display: "1/8", selected: false});
    ratings.push({value: .25, display: "1/4", selected: false});
    ratings.push({value: .5, display: "1/2", selected: false});

    for (let i = 1; i <= max; i++) {
      ratings.push({value: i, display: i.toString(), selected: false});
    }
    return ratings;
  }
}
