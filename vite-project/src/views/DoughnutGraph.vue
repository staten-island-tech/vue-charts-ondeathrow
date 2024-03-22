<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014' ],
        datasets: [ { data: [6487, 2540, 4512, 7363, 5837, 7887,8978,3354] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>