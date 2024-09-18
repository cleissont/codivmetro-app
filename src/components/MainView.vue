<template>
  <div class="main-view">
    <CountryStats
      v-for="country in filteredCountries"
      :key="country.name"
      :country="country.name"
      :totalCases="country.totalCases"
      :deaths="country.deaths"
      :fatalityRate="country.fatalityRate"
    />
  </div>
</template>

<script>
  import CountryStats from "./CountryStats.vue"

  export default {
    components: {
      CountryStats,
    },
    data() {
      return {
        countries: [
          {
            name: "África do Sul",
            totalCases: 32687680,
            deaths: 672790,
            fatalityRate: 2.05,
          },
          {
            name: "Austrália",
            totalCases: 32687680,
            deaths: 672790,
            fatalityRate: 2.05,
          },
          {
            name: "Brasil",
            totalCases: 32687680,
            deaths: 672790,
            fatalityRate: 2.05,
          },
          {
            name: "Estados Unidos",
            totalCases: 32687680,
            deaths: 672790,
            fatalityRate: 2.05,
          },
          // Outros países...
        ],
        searchTerm: "", // A ser utilizado para a barra de pesquisa
      }
    },
    computed: {
      filteredCountries() {
        // Filtra os países com base no termo de pesquisa
        return this.countries.filter((country) =>
          country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      },
    },
  }
</script>

<style scoped>
  .main-view {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
</style>
