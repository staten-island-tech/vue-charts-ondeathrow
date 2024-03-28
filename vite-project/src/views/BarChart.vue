 <template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
// import{ref, onMounted} from 'vue';
/* 
   const nycdeaths= ref('');
  async function getnycdeaths(){
    let res= await fetch("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
    let data= await res.json();
    nycdeaths.value = data;
   } */

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false

    try {
      const { api } = await fetch('/https://data.cityofnewyork.us/resource/jb7j-dtam.json/api')
      api.chartdata = api
      api.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}  
/* onMounted(()=> { */
  // getnycdeaths();
// });


</script> 


