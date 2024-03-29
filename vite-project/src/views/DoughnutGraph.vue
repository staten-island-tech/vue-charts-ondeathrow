<template>
  <div class="container">
    <h1>Number of people who died in NYC from 2007-2014, by ethnicity</h1>
    <h5>Side note: data is not entirely accurate as the api lacks some data</h5>
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
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
//title is obv the title of the chart, tooltip is the hover thing, legend is the legend, barelement is the inividual bar things and the 
//rendering of the graph, categoryscale is for the x-axis, and linearscale is for the y axis 

export default{
  name: 'percentage of new yorkers who died from 2007 - 2014', 
  components: {Doughnut},
  data() {
  return {
    loaded: false, 
    chartData: {
      datasets: [{
        backgroundColor: ['#6D696A', '#7D7879', '#878283', '#918D8D', '#A5A1A1', '#AFACAC'],
        data: [0, 0, 0, 0, 0, 0]
      }],
      labels: ['Asian and Pacific Islander', 'White Non-Hispanic', 'Hispanic', 'Black Non-Hispanic', 'Other Race/Ethnicity', 'Not Stated/Unknown',]
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
        const AsianPacific = data.filter(item => item.race_ethnicity === 'Asian and Pacific Islander' && item.deaths !== '.')
        let AsianPacificData = AsianPacific.map(item => parseInt(item.deaths))
        let totalAsianPacific = 0;
      for (let i = 0; i < AsianPacificData.length; i++) {  
        totalAsianPacific += AsianPacificData[i];
      }
        console.log(totalAsianPacific)

        //this part should get the values of deaths in 2007 and add them 
        const White = data.filter(item => item.race_ethnicity === 'White Non-Hispanic' && item.deaths !== '.')
        let whiteData = White.map(item => parseInt(item.deaths))
        let totalWhite = 0 
        for (let i = 0; i < whiteData.length; i++) {
          totalWhite += whiteData[i]
        }
        console.log(totalWhite)

        const Hispanic = data.filter(item => item.race_ethnicity === 'Hispanic' && item.deaths !== '.')
        let HispanicData = Hispanic.map(item => parseInt(item.deaths))
        let totalHispanic = 0
        for (let i = 0; i < HispanicData.length; i++) {
          totalHispanic += HispanicData[i]
        }
        console.log(totalHispanic)

        const Black = data.filter(item => item.race_ethnicity === 'Black Non-Hispanic' && item.deaths !== '.')
        let BlackData = Black.map(item => parseInt(item.deaths))
        let totalBlack = 0
        for (let i = 0; i < BlackData.length; i++) {
          totalBlack += BlackData[i]
        }
        console.log(totalBlack)

        const Other = data.filter(item => item.race_ethnicity === 'Other Race/ Ethnicity' && item.deaths !== '.')
        let Otherdata = Other.map(item => parseInt(item.deaths))
        let totalOther = 0
        for (let i = 0; i < Otherdata.length; i++) {
          totalOther += Otherdata[i]
        }
        console.log(totalOther)

        const Unknown = data.filter(item => item.race_ethnicity === 'Not Stated/Unknown' && item.deaths !== '.')
        let Unknowndata = Unknown.map(item => parseInt(item.deaths))
        let totalUnknown = 0
        for (let i = 0; i < Unknowndata.length; i++) {
          totalUnknown += Unknowndata[i]
        }
        console.log(totalUnknown)

        this.chartData.datasets[0].data[0] = totalAsianPacific
        this.chartData.datasets[0].data[1] = totalWhite
        this.chartData.datasets[0].data[2] = totalHispanic
        this.chartData.datasets[0].data[3] = totalBlack
        this.chartData.datasets[0].data[4] = totalOther
        this.chartData.datasets[0].data[5] = totalUnknown
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
.doughnutgraphgraph{
  width: 500px;
  height: 500px;
}
</style>