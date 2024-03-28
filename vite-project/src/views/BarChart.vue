<template>
  <div class="container">
    <h1>Number of People who died per year in NYC from 2007-2014</h1>
    <h5>Side note: data is not entirely accurate as the api lacks some data</h5>
    <div v-if="loaded" class = "bargraphgraph">
      <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
//title is obv the title of the chart, tooltip is the hover thing, legend is the legend, barelement is the inividual bar things and the 
//rendering of the graph, categoryscale is for the x-axis, and linearscale is for the y axis 

export default{
  name: 'percentage of new yorkers who died from 2007 - 2014', 
  components: {Bar},
  data() {
  return {
    loaded: false, 
    chartData: {
      datasets: [{
        backgroundColor: ['#6D696A', '#7D7879', '#878283', '#918D8D', '#A5A1A1', '#AFACAC', '#B9B6B6'],
        data: [0, 0, 0, 0, 0, 0, 0]
      }],
      labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
    },
    chartOptions: { 
      responsive: true
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
        const seven = data.filter(item => item.year === '2007' && item.deaths !== '.')
        console.log(seven) //test 
        let sevendata = seven.map(item => parseInt(item.deaths))
        //this bit only takes the value of "deaths" in the const of seven
        console.log(sevendata)//another test
        let totalseven = 0
        for (let i = 0; i < sevendata.length; i++) {
          totalseven += sevendata[i]
        }
        console.log(totalseven)//I AM A GENIUS

        //this part should get the values of deaths in 2007 and add them 
        const eight = data.filter(item => item.year === '2008' && item.deaths !== '.')
        let eightdata = eight.map(item => parseInt(item.deaths))
        let totaleight = 0 
        for (let i = 0; i < eightdata.length; i++) {
          totaleight += eightdata[i]
        }
        console.log(totaleight)

        const nine = data.filter(item => item.year === '2009' && item.deaths !== '.')
        let ninedata = nine.map(item => parseInt(item.deaths))
        let totalnine = 0
        for (let i = 0; i < ninedata.length; i++) {
          totalnine += ninedata[i]
        }
        console.log(totalnine)

        const ten = data.filter(item => item.year === '2010' && item.deaths !== '.')
        let tendata = ten.map(item => parseInt(item.deaths))
        let totalten = 0
        for (let i = 0; i < tendata.length; i++) {
          totalten += tendata[i]
        }
        console.log(totalten)

        const eleven = data.filter(item => item.year === '2011' && item.deaths !== '.')
        let elevendata = eleven.map(item => parseInt(item.deaths))
        let totaleleven = 0
        for (let i = 0; i < elevendata.length; i++) {
          totaleleven += elevendata[i]
        }
        console.log(totaleleven)

        const twelve = data.filter(item => item.year === '2012' && item.deaths !== '.')
        let twelvedata = twelve.map(item => parseInt(item.deaths))
        let totaltwelve = 0
        for (let i = 0; i < twelvedata.length; i++) {
          totaltwelve += twelvedata[i]
        }
        console.log(totaltwelve)

        const thirteen = data.filter(item => item.year === '2013' && item.deaths !== '.')
        let thirteendata = thirteen.map(item => parseInt(item.deaths))
        let totalthirteen = 0
        for (let i = 0; i < thirteendata.length; i++) {
          totalthirteen += thirteendata[i]
        }
        console.log(totalthirteen)

        const fourteen = data.filter(item => item.year === '2014' && item.deaths !== '.') 
        let fourteendata = fourteen.map(item => parseInt(item.deaths))
        let totalfourteen = 0
        for (let i = 0; i < fourteendata.length; i++) {
          totalfourteen += fourteendata[i]
        }
        console.log(totalfourteen)
        this.chartData.datasets[0].data[0] = totalseven
        this.chartData.datasets[0].data[1] = totaleight
        this.chartData.datasets[0].data[2] = totalnine
        this.chartData.datasets[0].data[3] = totalten
        this.chartData.datasets[0].data[4] = totaleleven
        this.chartData.datasets[0].data[5] = totaltwelve
        this.chartData.datasets[0].data[6] = totalthirteen
        this.chartData.datasets[0].data[7] = totalfourteen
        //make a part that replaces the first value of data to be the value of seven data 

        this.loaded = true
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.bargraphgraph{
  width: 1000px;
  height: 1000px;
}
</style>



