import React from "react";
import type { Card, MonsterCard } from "@/types/card.types";
import cardFrameTypeMap from "@/utils/cardFrameTypeMap";
import monsterAttributeMap from "@/utils/monsterAttributeMap";

interface CardDataRowProps {
    index: number,
    card: Card
};

const CardDataRow: React.FC<CardDataRowProps> = ({ index, card }) => {
    const {
        frameType,
        name,
        humanReadableCardType
    } = card;

    return (
        <tr>
            <td>{index + 1}</td>
            <td style={{"display": "flex"}}>
                <img
                    src={"attribute" in card ? monsterAttributeMap[(card as MonsterCard).attribute] : cardFrameTypeMap[frameType]}
                    className="image is-24x24"
                />
                &nbsp;{"attribute" in card ? (card as MonsterCard).attribute : frameType.toUpperCase()}
            </td>
            <td>{"typeline" in card ? "[ " + (card as MonsterCard).typeline.join(" / ") + " ]" : humanReadableCardType}</td>
            <td>{name}</td>
        </tr>
    );
};

export default CardDataRow;