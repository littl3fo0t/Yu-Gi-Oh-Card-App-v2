export interface BaseCard {
    name: string,
    type: string,
    frameType: string,
    [key: string]: unknown
};

export interface SpellCard extends BaseCard {
    frameType: "spell",
    humanReadableCardType: string,
    desc: string
};

export interface TrapCard extends BaseCard {
    frameType: "trap",
    humanReadableCardType: string,
    desc: string
};

export interface MonsterCard extends BaseCard {
    typeline: string[],
    race: string,
    atk: number,            // When -1, then attack = "?"
    def: number | null,     // When -1, then defense = "?" (null for link monsters)
    attribute: string,
    level: number | null,   // Also includes Rank (null for link monsters)
    desc: string,
    linkval? : number,      // Only applicable to link monsters
    pend_desc?: string,     // Only applicable to pendulum monsters
    monster_desc?: string   // Only applicable to pendulum monsters
};

export type Card = SpellCard | TrapCard | MonsterCard;