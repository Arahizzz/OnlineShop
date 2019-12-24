<template>
  <div v-if="loading" id="productView">
    <circle-spinner></circle-spinner>
  </div>
  <div v-else id="goods">
    <div v-for="category in categories" v-bind:key="category.name" class="list">
      <h1>{{category.name}}</h1>
      <div class="grid">
        <cell v-for="cell in category.products" v-bind:key="cell.id" v-bind:cell="cell"></cell>
      </div>
    </div>
  </div>
</template>

<script>
import cell from "../components/cell.vue";
export default {
  data(){
    return {
        loading: true,
        categories: [
          {
            name: "",
            id: -1,
            products: []
          }
        ],
      }
  },
  methods: {
    fetchCategories(){
        fetch("https://mshop-api.herokuapp.com/api/categories").then(response => {
        response.json().then(categories => {
          this.categories = categories;
          this.loading = false;
        });
      });
    }
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchCategories"
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchCategories();
    window.scrollTo(0, 0);
  },
  components: {
    cell
  }
};
</script>