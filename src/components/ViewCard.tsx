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

    return (
        <div className="box">
            <h2 className="title is-2 has-text-centered">
                {name}
            </h2>
            <div className="columns is-gapless">
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
                                {"attribute" in card && <MonsterAttribute attribute={(card as MonsterCard).attribute} />}
                                {"level" in card && (card as MonsterCard).level && <MonsterLevel level={(card as MonsterCard).level} />}
                            </tr>
                            {"typeline" in card && <MonsterTypeLine typeline={(card as MonsterCard).typeline} />}
                            {(isSpellOrTrapCard || !(card as MonsterCard).typeline.includes("Pendulum")) && <CardDesc desc={desc} />}
                            <tr>
                                {"atk" in card && <MonsterATK atk={(card as MonsterCard).atk} />}
                                {!("linkval" in card) && <MonsterDEF def={(card as MonsterCard).def} />}
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;