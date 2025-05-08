import React from "react";
import cardFrameTypeMap from "@/utils/cardFrameTypeMap";

interface CardFrameTypeProps {
    frameType: "spell" | "trap"
};

const CardFrameType: React.FC<CardFrameTypeProps> = ({ frameType }) => {
    return (
        <td colSpan={2}>
            <div style={{ "display": "flex" }}>
                <img
                    src={cardFrameTypeMap[frameType]}
                    alt={frameType}
                    className="image is-24x24"
                />
                &nbsp;{frameType.toUpperCase()}
            </div>
        </td>
    );
};

export default CardFrameType;