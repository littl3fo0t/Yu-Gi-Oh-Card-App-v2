import React from "react";

interface MonsterTypeLineProps {
    typeline: string[]
};

const MonsterTypeLine: React.FC<MonsterTypeLineProps> = ({ typeline }) => {
    const formattedTypeLine = `[ ${typeline.join(" / ")} ]`;
    return (
        <tr>
            <td colSpan={4}>
                <strong>{formattedTypeLine}</strong>
            </td>
        </tr>
    );
};

export default MonsterTypeLine;