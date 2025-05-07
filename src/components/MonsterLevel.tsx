import React from "react";
import LEVEL_WEBP from "@/assets/Level.webp";
import RANK_WEBP from "@/assets/Rank.webp";

interface MonsterLevelProps {
    level: number | null,
    isXYZMonster: boolean
};

const MonsterLevel: React.FC<MonsterLevelProps> = ({ level, isXYZMonster }) => {
    return (
        <>
            <td>
                <img
                    src={isXYZMonster ? RANK_WEBP : LEVEL_WEBP}
                    alt={(isXYZMonster ? "Rank" : "Level") + " Star"}
                    className="image is-24x24"
                />
            </td>
            <td>{level}</td>
        </>
    );
};

export default MonsterLevel;