import React from "react";

interface MonsterTypeLineProps {
    typeline: string[]
};

const MonsterTypeLine: React.FC<MonsterTypeLineProps> = ({ typeline }) => {
    const formattedTypeLine = `[${typeline.join("/")}]`;
    return (
        <tr>
            <td colSpan={2}>
                {formattedTypeLine}
            </td>
        </tr>
    );
};

export default MonsterTypeLine;