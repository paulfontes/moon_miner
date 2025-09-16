import { AppState } from "@/AppState.js"

class UpgradesService {
    buyClickableUpgrade(upgradeId) {
        const idToUpgrade = AppState.clickUpgrades.find((u) => u.id == upgradeId)
        if (AppState.gold >= idToUpgrade.price) {
            console.log(idToUpgrade);
            // idToUpgrade.quantity += 1
            AppState.gold -= idToUpgrade.price
            AppState.multiplier += idToUpgrade.multiplier

        } else return




    }
    buyAutoUpgrade(upgradeId) {
        const idToUpgrade = AppState.autoUpgrades.find((u) => u.id == upgradeId)
        if (AppState.gold >= idToUpgrade.price) {
            console.log(idToUpgrade);
            idToUpgrade.quantity += 1
            AppState.gold -= idToUpgrade.price
            AppState.autoMultiplier += idToUpgrade.multiplier
        }


    }

}
export const upgradesService = new UpgradesService()