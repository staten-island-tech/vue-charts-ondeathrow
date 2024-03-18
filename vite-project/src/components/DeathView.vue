<template>
  <div class="card">
    <h2>{{ leading_cause.name }}</h2>
  </div>
</template>

<script setup>
  const props= defineProps({
    deaths: Object,
  })
</script>

<style scoped>

</style>