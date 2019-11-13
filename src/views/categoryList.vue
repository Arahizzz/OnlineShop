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
      <p>{{category.description}}</p>
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
      fetch(
        "https://nit.tron.net.ua/api/category/" + this.$route.params.id
      ).then(response => {
        if (response.status == 200) {
          response.json().then(product => {
            var name = product.name;
            var description = product.description;
            fetch(
              "https://nit.tron.net.ua/api/product/list/category/" +
                this.$route.params.id
            ).then(categoryRespone =>
              categoryRespone.json().then(productList => {
                this.category = {
                  name: name,
                  description: description,
                  cells: productList.map(product => {
                    return {
                      name: product.name,
                      img_url: product.image_url,
                      id: product.id,
                      price:
                        product.special_price != null
                          ? product.special_price
                          : product.price,
                      old_price:
                        product.special_price != null ? product.price : null
                    };
                  })
                };
                this.loading = false;
              })
            );
          });
        }
        else {
            this.error = true;
            this.loading = false;
        }
      });
    }
  },
  components: {
    cell
  }
};
</script>