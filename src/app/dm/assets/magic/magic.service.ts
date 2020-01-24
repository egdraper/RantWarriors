import { spells } from "./spells.db";

export class MagicService {
  public getMagic(): string {
    const val = Math.floor(Math.random() * 101);
    if (val <= 45) {
      return this.getRangerSpell();
    }
    if (val <= 90) {
      return this.getArtificerSpell();
    }
    if (val <= 92) {
      return this.getClericSpell();
    }
    if (val <= 95) {
      return this.getWizardSpell();
    }
    if (val <= 97) {
      return this.getWarlockSpell();
    }
    if (val <= 100) {
      return this.getSorcererSpell();
    }
  }

  private getSorcererSpell(): string {
    const roll = Math.floor(Math.random() * 11);
    if (roll <= 7) {
        const val = Math.floor(Math.random() * spells.Sorcerer.level1.length);
        return spells.Sorcerer.level1[val];
    }
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Sorcerer.level2.length);
        return spells.Sorcerer.level2[val];
    }
  }

  private getWarlockSpell(): string {
    const roll = Math.floor(Math.random() * 11);
    if (roll <= 7) {
        const val = Math.floor(Math.random() * spells.Warlock.level1.length);
        return spells.Warlock.level1[val];
    }
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Warlock.level2.length);
        return spells.Warlock.level2[val];
    }
  }

  private getWizardSpell(): string {
    const roll = Math.floor(Math.random() * 11);
    if (roll <= 7) {
        const val = Math.floor(Math.random() * spells.Wizard.level1.length);
        return spells.Wizard.level1[val];
    }
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Wizard.level2.length);
        return spells.Wizard.level2[val];
    }
  }

  private getClericSpell(): string {
    const roll = Math.floor(Math.random() * 11);
    if (roll <= 7) {
        const val = Math.floor(Math.random() * spells.Cleric.level1.length);
        return spells.Cleric.level1[val];
    }
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Cleric.level2.length);
        return spells.Cleric.level2[val];
    }
  }

  private getArtificerSpell(): string {
    const roll = Math.floor(Math.random() * 21);
    if (roll <= 5) {
        const val = Math.floor(Math.random() * spells.Artificer.cantrips.length);
        return spells.Artificer.cantrips[val];
    }
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Artificer.level1.length);
        return spells.Artificer.level1 [val];
    }
    if (roll <= 14) {
        const val = Math.floor(Math.random() * spells.Artificer.level2.length);
        return spells.Artificer.level2[val];
    }
    if (roll <= 17) {
        const val = Math.floor(Math.random() * spells.Artificer.level3.length);
        return spells.Artificer.level3[val];
    }
    if (roll <= 19) {
        const val = Math.floor(Math.random() * spells.Artificer.level4.length);
        return spells.Artificer.level4[val];
    }
    if (roll <= 20) {
        const val = Math.floor(Math.random() * spells.Artificer.level5.length);
        return spells.Artificer.level5[val];
    }
  }

  private getRangerSpell(): string {
    const roll = Math.floor(Math.random() * 21);
    if (roll <= 10) {
        const val = Math.floor(Math.random() * spells.Ranger.level1.length);
        return spells.Ranger.level1 [val];
    }
    if (roll <= 14) {
        const val = Math.floor(Math.random() * spells.Ranger.level2.length);
        return spells.Ranger.level2[val];
    }
    if (roll <= 17) {
        const val = Math.floor(Math.random() * spells.Ranger.level3.length);
        return spells.Ranger.level3[val];
    }
    if (roll <= 19) {
        const val = Math.floor(Math.random() * spells.Ranger.level4.length);
        return spells.Ranger.level4[val];
    }
    if (roll <= 20) {
        const val = Math.floor(Math.random() * spells.Ranger.level5.length);
        return spells.Ranger.level5[val];
    }
  }
}
