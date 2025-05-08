import React from "react";
import type { Card } from "@/types/card.types";
import CardDataRow from "@/components/CardDataRow";

interface CardDataProps {
    cards: Card[] | undefined,
    setCardToView: (card: Card) => void
};

const CardData: React.FC<CardDataProps> = ({ cards, setCardToView }) => {
    return (
        <div className="table-container">
            <table className="table is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Frame Type/Attribute</th>
                        <th>Race</th>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {cards?.map((card, index) => <CardDataRow key={index} index={index} card={card} setCardToView={setCardToView} />)}
                </tbody>
            </table>
        </div>
    );
};

export default CardData;