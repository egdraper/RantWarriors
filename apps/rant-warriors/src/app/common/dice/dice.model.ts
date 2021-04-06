export interface Rollable {
    diceEquation: string;
  }

  export class Roll {
    public rollHistory = []
    public actualRollValue = 0;
    public modifiedRollValue = 0;
    public hasAdvantage = false;
    public hasDisadvantage = false;
    public criticalHit = false;
    public criticalFail = false;
    public modifier = 0
  }
  
  export class DiceEquation {
    constructor(
      public numberOfSides: number,
      public numberOfRolls: number,
      public rollModifier: number,
      public stringFormat: string
    ) {}
  }
