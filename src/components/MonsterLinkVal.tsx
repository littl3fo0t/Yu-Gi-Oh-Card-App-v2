import React from "react";

interface MonsterLinkValProps {
    linkval: number | undefined
};

const MonsterLinkVal: React.FC<MonsterLinkValProps> = ({ linkval }) => {
    return (
        <td colSpan={2}>
            <strong>LINK &#9472;</strong> {linkval ?? "?"}
        </td>
    );
};

export default MonsterLinkVal;