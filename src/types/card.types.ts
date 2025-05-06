interface CardImages {
    image_url: string;
    [key: string]: unknown;
};

export interface BaseCard {
    name: string,
    type: string,
    frameType: string,
    desc: string,
    card_images: CardImages[],
    race: string,
    humanReadableCardType: string,
    [key: string]: unknown
};

export interface SpellCard extends BaseCard {
    frameType: "spell"
};

export interface TrapCard extends BaseCard {
    frameType: "trap"
};

export interface MonsterCard extends BaseCard {
    typeline: string[],
    atk: number,            // When -1, then attack = "?"
    def: number | null,     // When -1, then defense = "?" (null for link monsters)
    attribute: string,
    level: number | null,   // Also includes Rank (null for link monsters)
    linkval? : number,      // Only applicable to link monsters
    pend_desc?: string,     // Only applicable to pendulum monsters
    monster_desc?: string   // Only applicable to pendulum monsters
};

export type Card = SpellCard | TrapCard | MonsterCard;