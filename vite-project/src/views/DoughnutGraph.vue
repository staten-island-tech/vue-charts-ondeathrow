<template>
  <div class="container">
    <DeathCard v-for="(item, index) in nycdeaths"
      :key="index"
      :id="index + 1"
      :nycdeaths="item"
    />
  </div>
</template>
<script setup>


</script>


<style scoped>


</style>