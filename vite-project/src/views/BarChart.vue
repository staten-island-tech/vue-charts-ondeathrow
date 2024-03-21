<template>
  <div>
    <h2>Placeholder cause i have no fucking clue what vincents doing</h2>
  </div>
</template>

<script>
import{ref, onMounted} from "vue";
import DeathView from '../components/DeathView.vue'
  const nycdeaths= ref("");
  async function getnycdeaths(){
    let res= await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
    let data= await res.json();
    nycdeaths.value = data;
  }
