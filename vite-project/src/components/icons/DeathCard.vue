<template>
    <div>
        <div class="card">
      <div class="backgroundimgcolor">
      <img :src="Destination.profileimg" alt="" />
    </div>
    <h2>•---------•</h2>
    <h2>{{ Destination.name }}</h2>
  </div>
    </div>
</template>

<script>

</script>

<style scoped>
.card {
  height: 280px;
  width: 200px;
  border-radius: 12px;
  padding: 2%;
  margin: 0.5rem 0.5rem;
  background-color: #708090;
  display: flex;
  flex-direction: column;
  text-align: center;
  filter: grayscale(100%);
  box-sizing: border-box;
}

.backgroundimgcolor {
  background-color: #77669c;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  margin: 0;
}
</style>