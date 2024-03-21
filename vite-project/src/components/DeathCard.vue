<template>
  <div class="card">
    <h2>{{ nycdeaths.leading_cause }}</h2>
    <h5>{{ nycdeaths.deaths }} 
      <template v-if = "nycdeaths.sex === 'M'">
        male
      </template>
      <template v-else>
        female
      </template>
      {{ nycdeaths.race_ethnicity }}s have died from {{ nycdeaths.leading_cause }}</h5>
      <h5>Death/Mortality Rate: {{ nycdeaths.death_rate }}</h5>
<!--     <h3>{{ id }}</h3> dont really need this lmao-->
  </div>
</template>

<script setup>
const props = defineProps({
  nycdeaths: Object,
  id: Number 
});
</script>

<style scoped>
.card {
  height: 350px;
  width: 300px;
  border-radius: 12px;
  padding: 2%;
  margin: 0.5rem 0.5rem;
  background-color: #adb5bd;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
}

body {
  margin: 0;
}
</style>