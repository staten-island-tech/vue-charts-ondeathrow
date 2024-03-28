<template>
  <div class="container">
    <div v-if="loaded" class = "doughnutgraphgraph">
      <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { onMounted, reactive } from 'vue'
import { parse } from 'vue/compiler-sfc'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
//title is obv the title of the chart, tooltip is the hover thing, legend is the legend, barelement is the inividual bar things and the 
//rendering of the graph, categoryscale is for the x-axis, and linearscale is for the y axis 

export default{
  name: 'percentage of new yorkers who died from 2007 - 2014', 
  components: {Doughnut},
  data() {
    return {
      loaded: false, 
      chartData: {
        dataset: [{
          backgroundColor: ['#6D696A', '#7D7879', '#878283', '#918D8D', '#A5A1A1', '#AFACAC', '#B9B6B6'],
          data: [0,0,0,0,0,0,0]
        }],
        labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
      }
    }
  }, 
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const result = await fetch(
          `https://data.cityofnewyork.us/resource/jb7j-dtam.json`
        );
        const data = await result.json()
        const seven = data.filter(item => item.year === '2007')
        console.log(seven) //test 
        let sevendata = seven.map(item => parseInt(item.deaths))

        //this part should get the values of deaths in 2007 and add them 
  
        //make a part that replaces the first value of data to be the value of seven data 
      } catch (error) {
        console.log(error)
      }
    }
  }
}
// my part should be ethnicity and maybe hsoudl say percentages if u can figure that out 
</script>

<style scoped>
</style>
