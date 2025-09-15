import { AppState } from "@/AppState.js"
import { computed } from "vue"

class GoldService {
    addGold() {
        const gold = computed((g) => AppState.gold)
        AppState.gold++

    }

}
export const goldService = new GoldService()