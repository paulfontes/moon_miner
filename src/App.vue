// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { goldService } from './services/GoldService.js';


function getGold() {
  goldService.addGold()
}

</script>


// HTML
<template>
  <main class="container-fluid">
    <section class="row">
      <div class="col-2">
        <span>Gold: <i class="mdi mdi-gold"></i> {{ AppState.gold }}</span>
      </div>
      <div class="col-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1739104471562-aa4d097784ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvYmxpbnxlbnwwfHwwfHx8MA%3D%3D"
          @click="getGold()" alt="">
      </div>
    </section>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>