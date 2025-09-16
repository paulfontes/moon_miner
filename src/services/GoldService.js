import { AppState } from "@/AppState.js"
import { computed } from "vue"

class GoldService {
    addGold() {

        AppState.gold += AppState.multiplier

    }

    addGoldOnIntervol() {
        AppState.gold += AppState.autoMultiplier
    }

}
export const goldService = new GoldService()