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
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
//title is obv the title of the chart, tooltip is the hover thing, legend is the legend, barelement is the inividual bar things and the 
//rendering of the graph, categoryscale is for the x-axis, and linearscale is for the y axis 

export default {
  name: 'Doughnutgraph',
  components: { Doughnut },
  data: () => ({
    loaded: false,
    chartData: {
      labels
    }
  }),
}

</script>

<style scoped>
</style>