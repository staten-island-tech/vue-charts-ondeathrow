<template>
  <div>
    <h2>Statistics for Deaths in NYC</h2>
  </div>
  <div class="container">
    <DeathCard v-for="(deaths, index) in nycdeaths"
      :key="index"
      :id="index + 1"
      :nycdeaths="deaths"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DeathCard from "@/components/DeathCard.vue";

const nycdeaths = ref('');

async function getnycdeaths() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
  let data = await res.json();
  nycdeaths.value = data;
}

onMounted(() => {
  getnycdeaths();
});

  
</script>

<style scoped>
.container{
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;
flex-wrap: wrap;
}

</style>