import DARK_SVG from "@/assets/monster-attributes/DARK.svg";
import DIVINE_SVG from "@/assets/monster-attributes/DIVINE.svg";
import EARTH_SVG from "@/assets/monster-attributes/EARTH.svg";
import FIRE_SVG from "@/assets/monster-attributes/FIRE.svg";
import LIGHT_SVG from "@/assets/monster-attributes/LIGHT.svg";
import WATER_SVG from "@/assets/monster-attributes/WATER.svg";
import WIND_SVG from "@/assets/monster-attributes/WIND.svg";

interface MonsterAttributeMap {
    [key: string]: string
};

const monsterAttributeMap: MonsterAttributeMap = {
    DARK: DARK_SVG,
    DIVINE: DIVINE_SVG,
    EARTH: EARTH_SVG,
    FIRE: FIRE_SVG,
    LIGHT: LIGHT_SVG,
    WATER: WATER_SVG,
    WIND: WIND_SVG
};

export default monsterAttributeMap;