<template>
  <section class="filter-section">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Digite o nome do país"
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
  .filter-section {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .search-bar {
    position: relative;
    width: 50%;
    max-width: 500px;
    padding: 10px;
    border-radius: 8px;
  }

  input {
    width: 100%;
    padding: 15px 15px 15px 40px;
    border: none;
    border-bottom: 2px solid #f76565;
    outline: none;
    font-size: 16px;
    color: #333;
  }

  .icon-search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #f76565;
  }
</style>
