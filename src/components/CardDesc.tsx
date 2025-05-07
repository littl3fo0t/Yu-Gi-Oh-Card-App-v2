import React from "react";

interface CardDescProps {
    desc: string
};

const CardDesc: React.FC<CardDescProps> = ({ desc }) => {
    const formattedDesc = desc.split("\r\n");
    const descWithBlankLines = formattedDesc.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index === formattedDesc.length - 1 ? "" : <><br /><br /></>}
        </React.Fragment>
      ));
    return (
        <tr>
            <td colSpan={4}>
                {descWithBlankLines}
            </td>
        </tr>
    );
};

export default CardDesc;