import React from "react";
import type { Card, MonsterCard } from "@/types/card.types";
import CardFrameType from "@/components/CardFrameType";
import CardRace from "@/components/CardRace";
import MonsterAttribute from "@/components/MonsterAttribute";
import MonsterLevel from "@/components/MonsterLevel";
import MonsterTypeLine from "@/components/MonsterTypeLine";
import CardDesc from "@/components/CardDesc";
import MonsterATK from "@/components/MonsterATK";
import MonsterDEF from "@/components/MonsterDEF";
import MonsterLinkVal from "@/components/MonsterLinkVal";
import MonsterPendDesc from "@/components/MonsterPendDesc";

interface ViewCardProps {
    card: Card
};

const ViewCard: React.FC<ViewCardProps> = ({ card }) => {
    const {
        name,
        frameType,
        card_images,
        race,
        humanReadableCardType,
        desc
    } = card;

    const isSpellOrTrapCard = frameType === "spell" || frameType === "trap";
    const isMonsterCard = "typeline" in card;
    const monsterCard = card as MonsterCard;
    const isXYZMonster = isMonsterCard ? monsterCard.typeline.includes("Xyz") : false;
    const isLinkMonster = isMonsterCard && "linkval" in monsterCard && typeof monsterCard.linkval === "number";
    const isPendulumMonster = isMonsterCard ? monsterCard.typeline.includes("Pendulum") : false;

    return (
        <div className="box" id="viewCard">
            <h2 className="title is-2 has-text-centered">
                {name}
            </h2>
            <div className="columns">
                <div className="column">
                    <img src={card_images[0].image_url} alt={name} />
                </div>
                <div className="column">
                    <table className="table">
                        <tbody>
                            <tr>
                                {isSpellOrTrapCard && <CardFrameType frameType={frameType} />}
                                {isSpellOrTrapCard && <CardRace
                                    frameType={frameType}
                                    race={race}
                                    humanReadableCardType={humanReadableCardType}
                                />}
                                {"attribute" in card && <MonsterAttribute attribute={monsterCard.attribute} colSpan={isLinkMonster ? 4 : 2} />}
                                {"level" in card && monsterCard.level && <MonsterLevel level={monsterCard.level} isXYZMonster={isXYZMonster} />}
                            </tr>
                            {"typeline" in card && <MonsterTypeLine typeline={monsterCard.typeline} />}
                            {isPendulumMonster && <MonsterPendDesc pend_desc={monsterCard.pend_desc} />}
                            <CardDesc desc={isPendulumMonster ? monsterCard.monster_desc : desc} isPendulumMonster={isPendulumMonster} />
                            <tr>
                                {"atk" in card && <MonsterATK atk={monsterCard.atk} />}
                                {("def" in card && monsterCard.def !== null) && <MonsterDEF def={monsterCard.def} />}
                                {isLinkMonster && <MonsterLinkVal linkval={monsterCard.linkval} />}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;