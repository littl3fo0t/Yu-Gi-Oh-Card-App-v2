import SPELL_CONTINUOUS_WEBP from "@/assets/race/spell/Continuous.webp";
import SPELL_EQUIP_WEBP from "@/assets/race/spell/Equip.webp";
import SPELL_FIELD_WEBP from "@/assets/race/spell/Field.webp";
import SPELL_NORMAL_SVG from "@/assets/race/spell/Normal.svg";
import SPELL_QUICK_PLAY_WEBP from "@/assets/race/spell/Quick-Play.webp";
import SPELL_RITUAL_WEBP from "@/assets/race/spell/Ritual.webp";
import TRAP_CONTINUOUS_WEBP from "@/assets/race/trap/Continuous.webp";
import TRAP_COUNTER_WEBP from "@/assets/race/trap/Counter.webp";
import TRAP_NORMAL_SVG from "@/assets/race/trap/Normal.svg";

interface CardRaceMap {
    [key: string]: {
        [key: string]: string
    }
};

const cardRaceMap: CardRaceMap = {
    spell: {
        Continuous: SPELL_CONTINUOUS_WEBP,
        Equip: SPELL_EQUIP_WEBP,
        Field: SPELL_FIELD_WEBP,
        Normal: SPELL_NORMAL_SVG,
        "Quick-Play": SPELL_QUICK_PLAY_WEBP,
        Ritual: SPELL_RITUAL_WEBP
    },
    trap: {
        Continuous: TRAP_CONTINUOUS_WEBP,
        Counter: TRAP_COUNTER_WEBP,
        Normal: TRAP_NORMAL_SVG
    }
};

export default cardRaceMap;