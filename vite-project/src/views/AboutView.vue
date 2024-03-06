<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->

<template>
  <div>

  </div>
</template>

<script setup>
  import{ref, onMounted} from "vue";
  const skull= ref("");
  async function getskull(){
    let res= await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
    let data= await res.json();
    skull.value = data;
  }

onMounted(()=> {
  getskull();
});
</script>

<style scoped>

</style>
