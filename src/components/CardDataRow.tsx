import React from "react";
import type { Card, MonsterCard } from "@/types/card.types";
import cardFrameTypeMap from "@/utils/cardFrameTypeMap";
import monsterAttributeMap from "@/utils/monsterAttributeMap";
import isDarkMode from "@/utils/isDarkMode";

interface CardDataRowProps {
    index: number,
    card: Card,
    setCardToView: (card: Card) => void
};

const CardDataRow: React.FC<CardDataRowProps> = ({ index, card, setCardToView }) => {
    const {
        frameType,
        name,
        humanReadableCardType
    } = card;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div style={{ "display": "flex" }}>
                    <img
                        src={"attribute" in card ? monsterAttributeMap[(card as MonsterCard).attribute] : cardFrameTypeMap[frameType]}
                        className="image is-24x24"
                    />
                    &nbsp;{"attribute" in card ? (card as MonsterCard).attribute : frameType.toUpperCase()}
                </div>
            </td>
            <td>{"typeline" in card ? "[ " + (card as MonsterCard).typeline.join(" / ") + " ]" : humanReadableCardType}</td>
            <td>{name}</td>
            <td>
                <a
                    className={isDarkMode ? "button is-white" : "button is-black"}
                    onClick={() => setCardToView(card)}
                    href="#viewCard"
                >
                    View Card
                </a>
            </td>
        </tr>
    );
};

export default CardDataRow;