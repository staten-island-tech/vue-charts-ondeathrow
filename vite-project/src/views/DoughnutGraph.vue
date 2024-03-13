<template>
  <div>
    <h1>Doughnut Graph</h1>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
//
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