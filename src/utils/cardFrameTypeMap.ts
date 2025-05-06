import SPELL_SVG from "@/assets/frame-types/SPELL.svg";
import TRAP_SVG from "@/assets/frame-types/TRAP.svg";

interface CardFrameTypeMap {
    [key: string]: string;
};

const cardFrameTypeMap: CardFrameTypeMap = {
    spell: SPELL_SVG,
    trap: TRAP_SVG
};

export default cardFrameTypeMap;