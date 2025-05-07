import React from "react";

interface MonsterATKProps {
    atk: number
};

const MonsterATK: React.FC<MonsterATKProps> = ({ atk }) => {
    return (
        <td colSpan={2}>
            <strong>ATK/</strong> {atk === -1 ? "?" : atk}
        </td>
    );
};

export default MonsterATK;