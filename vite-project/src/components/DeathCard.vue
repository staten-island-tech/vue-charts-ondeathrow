<template>
  <div class="card">
    <h2>{{ nycdeaths.leading_cause }}</h2>
    <h3>{{ id }}</h3>
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
  height: 280px;
  width: 200px;
  border-radius: 12px;
  padding: 2%;
  margin: 0.5rem 0.5rem;
  background-color: #708090;
  display: flex;
  flex-direction: column;
  text-align: center;
  filter: grayscale(100%);
  box-sizing: border-box;
}


body {
  margin: 0;
}
</style>
