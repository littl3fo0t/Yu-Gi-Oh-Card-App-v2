import React from "react";

interface MonsterPendDescProps {
    pend_desc: string | undefined
};

const MonsterPendDesc: React.FC<MonsterPendDescProps> = ({ pend_desc }) => {
    const formattedDesc = pend_desc?.split("\r\n");
    const descWithBlankLines = formattedDesc?.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index === formattedDesc.length - 1 ? "" : <><br /><br /></>}
        </React.Fragment>
    ));
    return (
        <tr>
            <td colSpan={4}>
                <strong>[Pendulum Effect]</strong>
                <br />
                {descWithBlankLines}
            </td>
        </tr>
    );
};

export default MonsterPendDesc;