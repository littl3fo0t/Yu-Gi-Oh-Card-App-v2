import React from "react";
import type { Card } from "@/types/card.types";
import CardDataRow from "@/components/CardDataRow";

interface CardDataProps {
    cards: Card[] | undefined
};

const CardData: React.FC<CardDataProps> = ({ cards }) => {
    return (
        <div className="table-container">
            <table className="table is-fullwidth is-hoverable">
                <thead>
                    <th>#</th>
                    <th>Frame Type/Attribute</th>
                    <th>Race</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {cards?.map((card, index) => <CardDataRow key={index} index={index} card={card} />)}
                </tbody>
            </table>
        </div>
    );
};

export default CardData;