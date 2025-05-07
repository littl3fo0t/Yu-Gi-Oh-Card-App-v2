import React from "react";
import cardFrameTypeMap from "@/utils/cardFrameTypeMap";

interface CardFrameTypeProps {
    frameType: "spell" | "trap"
};

const CardFrameType: React.FC<CardFrameTypeProps> = ({ frameType }) => {
    return (
        <>
            <td>
                <img
                    src={cardFrameTypeMap[frameType]}
                    alt={frameType}
                    className="image is-24x24"
                />
            </td>
            <td>{frameType.toUpperCase()}</td>
        </>
    );
};

export default CardFrameType;