import React from "react";
import cardRaceMap from "@/utils/cardRaceMap";

interface CardRaceProps {
    frameType: string,
    race: string,
    humanReadableCardType: string
};


const CardRace: React.FC<CardRaceProps> = ({ frameType, race, humanReadableCardType }) => {
    return (
        <>
            <td>
                <img
                    src={cardRaceMap[frameType][race]}
                    alt={humanReadableCardType}
                    className="image is-24x24"
                />
            </td>
            <td>{humanReadableCardType}</td>
        </>
    );
};

export default CardRace;