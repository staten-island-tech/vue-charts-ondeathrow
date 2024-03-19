<template>
  <div class="container">
    <h1>bleh</h1>
    <DeathView
    v-for="(leading_cause) in deaths"
    :key="leading_cause.name"
    :deaths="leading_cause" ></DeathView>
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

onMounted(()=> {
  getnycdeaths();

});


</script> 


/*  import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
        required: true,
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { api } = await fetch('/https://data.cityofnewyork.us/resource/jb7j-dtam.json')
      this.chartdata = api
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}  */