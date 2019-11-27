<template>
  <div v-if="loading" id="goods">
    <circle-spinner></circle-spinner>
  </div>
  <div v-else-if="error" id="goods">
    <h1>Сталася помилка</h1>
  </div>
  <div v-else id="goods">
    <div v-bind:key="category.name" class="list">
      <h1>{{category.name}}</h1>
      <p class="description">{{category.description}}</p>
      <div class="grid">
        <cell v-for="cell in category.cells" v-bind:key="cell.id" v-bind:cell="cell"></cell>
      </div>
    </div>
  </div>
</template>

<script>
import cell from "../components/cell.vue";
export default {
  data() {
    return {
      loading: true,
      error: false,
      category: { name: "", description: "", cells: [] }
    };
  },
  watch: {
    $route: "getCells"
  },
  created() {
    this.getCells();
    window.scroll(0, 0);
  },
  methods: {
    getCells() {
      this.$store.dispatch("fetchData");
      var id = this.$route.params.id;
      fetch("https://online-shop-backend.arahizzz.now.sh/categories/" + id).then(
        categoryRespone => {
          if (categoryRespone.status == 200) {
            categoryRespone.json().then(productList => {
              this.category = {
                name: productList.name,
                description: productList.description,
                cells: productList.products
              };
              this.loading = false;
            });
          }
          else {
            this.error = true;
            this.loading = false;
          }
        }
      );
    }
  },
  components: {
    cell
  }
};
</script>

<style lang="scss">
#goods {
  .description {
    text-align: center;
  }
}
</style>