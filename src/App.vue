// JS
<script setup>
import { computed, onMounted, ref } from 'vue'
import { AppState } from './AppState.js'
import { goldService } from './services/GoldService.js';
import Shop from './components/Shop.vue';

const gold = computed(() => AppState.gold)
const multiplier = computed(() => AppState.multiplier)
const autoMultiplier = computed(() => AppState.autoMultiplier)

function getGold() {

  goldService.addGold()
}

function goldOnIntervol() {
  goldService.addGoldOnIntervol()
}

onMounted(() => { setInterval(goldOnIntervol, 2000) })

</script>


// HTML
<template>
  <main class="container-fluid text-white">
    <section class="row">
      <div class="col-4 fw-bolder fs-5">
        <span>Gold: <i class="mdi mdi-gold"></i> {{ gold }}</span>
      </div>
      <div class="col-4 fw-bolder fs-5 ">
        <span>Gold Per Click: <i class="mdi mdi-gold"></i> {{ multiplier }}</span>
      </div>
      <div class="col-4 fw-bolder fs-5 text-end">
        <span>Gold Per 2 Seconds: <i class="mdi mdi-gold"></i> {{ autoMultiplier }}</span>
      </div>
      <div class="col-12 d-flex justify-content-center boss-img">
        <img src="https://pngimg.com/uploads/goblin/goblin_PNG11.png" @click="getGold()" alt="">
      </div>
      <Shop />
    </section>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>