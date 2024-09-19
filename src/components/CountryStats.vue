<template>
  <div class="country-stats">
    <h3 class="text">{{ country }}</h3>
    <div class="stats">
      <div>
        <p>Total de casos</p>
        <p class="value">{{ totalCases.toLocaleString() }}</p>
      </div>
      <div>
        <p>Mortes</p>
        <p class="value">{{ deaths.toLocaleString() }}</p>
      </div>
      <div>
        <p>Fatalidade</p>
        <p class="value">{{ fatalityRate.toFixed(2) }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      country: String,
      totalCases: Number,
      deaths: Number,
      fatalityRate: Number,
    },
  }
</script>

<style scoped>
  .country-stats {
    width: 80%;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #fff;
  }

  .country-stats h3 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 10px;
  }

  .country-stats .stats {
    display: flex;
    justify-content: space-between;
  }

  .country-stats .stats div {
    text-align: center;
  }

  .country-stats .stats div p {
    margin: 5px 0;
    font-size: 18px;
    color: #333;
  }

  .country-stats .stats div p.value {
    font-size: 22px;
    color: #f76565;
    font-weight: bold;
  }
</style>
