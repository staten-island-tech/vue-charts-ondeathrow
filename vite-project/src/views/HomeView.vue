<template>
  <div>
    <h2>Statistics for Deaths in NYC</h2>
  </div>

</template>

<script>

export default {
    data(){
      return {
      nycdeaths:[ ],
  };
  },
    mounted: function(){
    this.fetchData();
  },
    methods: {
        fetchData: async function(){
        try{
        const results = await fetch(
        'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
      );
        const data = await results.json();
        this.nycdeaths = data.results
        console.log(data); 
      } catch(error){
        console.log('errorrrrrrrrrrrrrrrrr lkraksjlasjfl;dsf asdfjalfsjaflasdfjasdfl; ');
      }
    }
  }
}
  
</script>

<style scoped>

</style>