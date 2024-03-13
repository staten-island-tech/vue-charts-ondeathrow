<template>
  <div>
    <h1>bleh</h1>
  </div>
</template>

<script>
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
import{ref, onMounted, onUnmounted} from "vue";
  const nycdeaths= ref("");
  async function getnycdeaths(){
    let res= await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
    let data= await res.json();
    nycdeaths.value = data;
  }

onMounted(()=> {
  getnycdeaths();

  onUnmounted(() => clearInterval(intervalId))
});


</script> 