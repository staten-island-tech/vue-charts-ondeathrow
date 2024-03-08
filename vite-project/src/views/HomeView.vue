<template>
  <div>

  </div>
</template>

<script>
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