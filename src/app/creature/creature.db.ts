export class Attack {
    type: string;
    attackBonus: number;
    name: string;
    reachMin: number;
    reachMax: number;
    numberOfTargets: number;
}

export class Creature {
    public name: string;
    public maxHitPoints: number;
    public currentHitPoints: number;
    public armorClass: number;
    public attacks: Attack[];
    public speed: number;
    public experience: number;
    public challenge: number;
    public lastDamageTaken?: number;
}

export class CreatureDB {
    static creatures: Creature[] = [
        {
            challenge: .5,
            name: "Deep Gnome",
            maxHitPoints: 16,
            currentHitPoints: 16,
            armorClass: 15,
            speed: 20,
            experience: 100,
            attacks: [
                {
                    name: "War Pick",
                    type: "Melee Weapon Attack",
                    attackBonus: 4,
                    reachMin: 5,
                    reachMax: 5,
                    numberOfTargets: 1,
                }
            ]
        },
        {
            challenge: .5,
            name: "Gnoll",
            maxHitPoints: 30,
            currentHitPoints: 30,
            armorClass: 15,
            speed: 30,
            experience: 100,
            attacks: [
                {
                    name: "Bite",
                    type: "Melee Weapon Attack",
                    attackBonus: 4,
                    reachMin: 5,
                    reachMax:5,
                    numberOfTargets: 1,
                },
                {
                    name: "Spear",
                    type: "Melee Weapon Attack",
                    attackBonus: 4,
                    reachMin: 5,
                    reachMax: 5,
                    numberOfTargets: 1,
                },
                {
                    name: "Spear Throw",
                    type: "Melee Weapon Attack",
                    attackBonus: 4,
                    reachMin: 20,
                    reachMax: 60,
                    numberOfTargets: 1,
                },
                {
                    name: "Long Bow",
                    type: "Melee Weapon Attack",
                    attackBonus: 3,
                    reachMin: 150,
                    reachMax: 600,
                    numberOfTargets: 1,
                }
            ]
        }
    ]
}