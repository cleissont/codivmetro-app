<template>
  <div id="app" class="app-container">
    <header class="header">
      <div class="logo-container">
        <img src="../src/assets/logo.png" alt="Covidômetro" class="logo" />
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

    <section class="filter-section">
      <SearchBar @search="handleSearch" />
    </section>

    <main class="countries-list">
      <p v-if="!filteredCountries.length">Carregando dados...</p>
      <CountryStats
        v-else
        v-for="country in filteredCountries"
        :key="country.region.name"
        :country="country.region.name"
        :totalCases="country.confirmed"
        :deaths="country.deaths"
        :fatalityRate="(country.deaths / country.confirmed) * 100"
      />
    </main>
  </div>
</template>

<script>
  import axios from "axios"
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
        countries: [],
      }
    },
    computed: {
      filteredCountries() {
        return this.countries
          .filter((country) => !country.region.province)
          .filter((country) =>
            country.region.name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
          )
      },
    },
    methods: {
      handleSearch(term) {
        this.searchTerm = term
      },
      async fetchCountriesData() {
        try {
          const response = await axios.get("https://covid-api.com/api/reports")
          this.countries = response.data.data
        } catch (error) {
          console.error("Error fetching data from API:", error)
        }
      },
    },
    mounted() {
      this.fetchCountriesData()
    },
  }
</script>

<style scoped>
  .app-container {
    background-color: #fff;
    font-family: "Arial", sans-serif;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #fff;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 10px;
  }

  h1 {
    font-size: 24px;
    color: #f76565;
  }

  .intro-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .intro-text {
    margin: 50px;
    width: 40%;
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

  .card-filter {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    .intro-section {
      flex-direction: column;
      text-align: center;
    }

    .intro-text,
    .intro-image {
      width: 100%;
    }

    .intro-image img {
      width: 200px;
    }
  }

  input {
    width: 100%;
    padding: 20px;
    padding-left: 45px;
    border: 2px solid #e3e3e3;
    border-radius: 8px;
    font-size: 18px;
    background-color: #fdf8f6;
    color: #555;
    box-sizing: border-box;
    outline: none;
  }

  input::placeholder {
    color: #c0c0c0;
  }

  .filter-section h2 {
    text-align: center;
    color: #666;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .countries-list {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .countries-list .country-stats {
    margin-bottom: 20px;
  }
</style>
