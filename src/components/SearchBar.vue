<template>
  <section class="filter-section">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Digite o nome de um país"
        v-model="searchQuery"
        @input="onInput"
      />
      <span class="icon-search">&#128269;</span>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: "",
      }
    },
    methods: {
      onInput() {
        this.$emit("search", this.searchQuery)
      },
    },
  }
</script>

<style scoped>
  /* Estilo da barra de busca */
  .filter-section {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .search-bar {
    position: relative;
    width: 50%;
    max-width: 500px;
    background-color: #fff7f3;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #f76565;
  }

  input {
    width: 100%;
    padding: 15px;
    border: none;
    border-bottom: 2px solid #f76565;
    outline: none;
    font-size: 16px;
    color: #333;
  }

  .icon-search {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 20px;
    color: #f76565;
  }
</style>
