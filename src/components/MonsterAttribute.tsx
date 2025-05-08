import React from "react";
import monsterAttributeMap from "@/utils/monsterAttributeMap";

interface MonsterAttributeProps {
    attribute: string,
    colSpan: number
};

const MonsterAttribute: React.FC<MonsterAttributeProps> = ({ attribute, colSpan }) => {
    return (
        <td colSpan={colSpan}>
            <div style={{ "display": "flex" }}>
                <img
                    src={monsterAttributeMap[attribute]}
                    alt={attribute}
                    className="image is-24x24"
                />
                &nbsp;{attribute}
            </div>
        </td>
    );
};

export default MonsterAttribute;