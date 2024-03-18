<template>
  <div class="container">
    <DeathCard v-for="(hi, index + 1) in nycdeaths"
    :key = "nycdeaths.leading_cause"
    :id: "index + 1"
    :nycdeaths = "hi"
    />
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import DeathCard from "../components/DeathCard.vue"

const nycdeaths = ref('');
async function getnycdeaths() {
  let res = await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
  let data = await res.json();
  nycdeaths.value = data.results;
}

onMounted(() => {
  getnycdeaths()
});
</script>

<style scoped>

</style>