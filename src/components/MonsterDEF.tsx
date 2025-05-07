import React from "react";

interface MonsterDEFProps {
    def: number | null
};

const MonsterDEF: React.FC<MonsterDEFProps> = ({ def }) => {
    return (
        <td colSpan={2}>
            <strong>DEF/</strong> {def === -1 ? "?" : def}
        </td>
    );
};

export default MonsterDEF;