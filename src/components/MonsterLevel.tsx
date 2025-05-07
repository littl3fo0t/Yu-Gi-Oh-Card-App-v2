import React from "react";
import level_svg from "@/assets/Level.webp";

interface MonsterLevelProps {
    level: number | null
};

const MonsterLevel: React.FC<MonsterLevelProps> = ({ level }) => {
    return (
        <>
            <td>
                <img
                    src={level_svg}
                    alt="Level Star"
                    className="image is-24x24"
                />
            </td>
            <td>{level}</td>
        </>
    );
};

export default MonsterLevel;