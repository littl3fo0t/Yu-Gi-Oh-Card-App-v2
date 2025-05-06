import React from "react";
import monsterAttributeMap from "@/utils/monsterAttributeMap";

interface MonsterAttributeProps {
    attribute: string
};

const MonsterAttribute: React.FC<MonsterAttributeProps> = ({ attribute }) => {
    return (
        <td>
            <img
                src={monsterAttributeMap[attribute]}
                alt={attribute}
                className="image is-24x24" 
            />
            {attribute}
        </td>
    );
};

export default MonsterAttribute;