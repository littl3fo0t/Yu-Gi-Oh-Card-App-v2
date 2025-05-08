import React from "react";
import LEVEL_WEBP from "@/assets/Level.webp";
import RANK_WEBP from "@/assets/Rank.webp";

interface MonsterLevelProps {
    level: number | null,
    isXYZMonster: boolean
};

const MonsterLevel: React.FC<MonsterLevelProps> = ({ level, isXYZMonster }) => {
    return (
        <td colSpan={2}>
            <div style={{ "display": "flex" }}>
                <img
                    src={isXYZMonster ? RANK_WEBP : LEVEL_WEBP}
                    alt={(isXYZMonster ? "Rank" : "Level") + " Star"}
                    className="image is-24x24"
                />
                &nbsp;{level}
            </div>
        </td>
    );
};

export default MonsterLevel;