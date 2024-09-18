<template>
  <div id="app" class="app-container">
    <header>
      <div class="logo-container">
        <img src="../src/assets/logo.png" alt="Covidômetro" class="logo" />
        <h1>Covidômetro</h1>
      </div>
    </header>

    <section class="intro-section">
      <div class="intro-text">
        <h2>Conheça o Covidômetro</h2>
        <p>
          Fique atualizado com velocidade e transparência. O Covidômetro é uma
          ferramenta que mostra para você em tempo real o número de casos e
          óbitos relacionados à pandemia do COVID-19 ao redor do mundo.
        </p>
      </div>
      <div class="intro-image">
        <img
          src="../src/assets/doctors.svg"
          alt="Médicos explicando Covidômetro"
        />
      </div>
    </section>

    <SearchBar @search="handleSearch" />

    <main class="countries-list">
      <CountryStats
        v-for="country in filteredCountries"
        :key="country.name"
        :country="country.name"
        :totalCases="country.totalCases"
        :deaths="country.deaths"
        :fatalityRate="country.fatalityRate"
      />
    </main>
  </div>
</template>

<script>
  import SearchBar from "./components/SearchBar.vue"
  import CountryStats from "./components/CountryStats.vue"

  export default {
    components: {
      SearchBar,
      CountryStats,
    },
    data() {
      return {
        searchTerm: "",
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
      }
    },
    computed: {
      filteredCountries() {
        return this.countries.filter((country) =>
          country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      },
    },
    methods: {
      handleSearch(term) {
        this.searchTerm = term
      },
    },
  }
</script>

<style scoped>
  /* Estilo para todo o app */
  .app-container {
    background-color: #fff;
    font-family: "Arial", sans-serif;
  }

  /* Estilo do header */
  header {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: #fff;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 50px;
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    color: #f76565;
  }

  /* Estilo para a seção de introdução */
  .intro-section {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: #fdf8f6;
  }

  .intro-text {
    width: 50%;
  }

  .intro-text h2 {
    font-size: 36px;
    color: #333;
    margin-bottom: 10px;
  }

  .intro-text p {
    font-size: 18px;
    color: #666;
  }

  .intro-image img {
    width: 300px;
    height: auto;
  }

  /* Seção do filtro de países */
  .filter-section {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .search-bar {
    position: relative;
    width: 50%;
    max-width: 500px;
  }

  input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  .icon-search {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 20px;
    color: #ff6b6b;
  }

  /* Estilo da listagem de países */
  .countries-list {
    padding: 40px;
  }

  .countries-list .country-stats {
    margin-bottom: 20px;
  }
</style>
