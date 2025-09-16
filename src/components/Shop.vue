<script setup>
import { AppState } from '@/AppState.js';
import { upgradesService } from '@/services/UpgradesService.js';
import { computed } from 'vue';

const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

function buyClickableUpgrade(upgradeId) {

    upgradesService.buyClickableUpgrade(upgradeId)
}

function buyAutoUpgrade(upgradeId) {

    upgradesService.buyAutoUpgrade(upgradeId)
}

</script>

<template>
    <section class="row g-2">
        <h5 class="text-center">Goblin Gold Shop</h5>
        <hr />
        <div v-for="upgrade in clickUpgrades" :key="upgrade.id" class="col-6">
            <div class="card">
                <div class="card-body">
                    <p>{{ upgrade.name }} +{{ upgrade.multiplier }}g per click</p>
                    <button @click="buyClickableUpgrade(upgrade.id)"> Buy {{ upgrade.name }} <i class="mdi mdi-gold"> {{
                        upgrade.price
                            }}</i></button>
                </div>
            </div>
        </div>
        <div v-for="upgrade in autoUpgrades" class="col-6">
            <div class="card">
                <div class="card-body">
                    <p>{{ upgrade.name }} +{{ upgrade.multiplier }}g per 2 secs</p>
                    <button @click="buyAutoUpgrade(upgrade.id)"> Buy {{ upgrade.name }} <i class="mdi mdi-gold"> {{
                        upgrade.price }}</i></button>
                </div>
            </div>
        </div>
    </section>

</template>