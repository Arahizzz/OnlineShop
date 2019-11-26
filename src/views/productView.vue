<template>
  <div v-if="loading" id="productView">
    <circle-spinner></circle-spinner>
  </div>
  <div v-else-if="error">
    <h1>Товар з даним ID не знайдено</h1>
  </div>
  <div v-else id="productView">
    <div>
      <img :src="product.image_url" alt />
    </div>
    <div class="info">
      <p class="name">{{product.name}}</p>
      <div class="priceColumn">
        <p>
          <s v-if="product.old_price != null" class="old_price">{{product.old_price}}</s>
        </p>
        <p class="price">{{product.price}}</p>
      </div>
      <button v-on:click="addToCart(product)">Купити</button>
      <p class="description">{{product.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      error: false,
      product: {
        name: "",
        price: 0,
        image_url: "",
        description: ""
      }
    };
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
    window.scrollTo(0, 0);
  },
  methods: {
    fetchData() {
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      fetch("http://127.0.0.1:3000/products/" + this.$route.params.id)
        .then(response => {
          if (response.status == 200)
            response.json().then(product => (this.product = product));
          else this.error = true;
          this.loading = false;
        })
        .catch(error => {
          this.error = true;
          this.loading = false;
        });
    },
    addToCart(product) {
      var good = {
        name: product.name,
        img_url: product.image_url,
        id: product.id,
        price: product.price,
        quantity: 1
      };
      var goods = this.$store.state.cart.goods;
      for (var i = 0; i < goods.length; i++) {
        if (goods[i].id == good.id) {
          goods[i].quantity++;
          this.$store.commit("updateCartCounter");
          return;
        }
      }
      goods.push(good);
      this.$store.commit("updateCart", goods);
    }
  }
};
</script>

<style lang="scss">
#productView {
  margin-left: 50px;
  margin-right: 25px;
  display: flex;
  overflow: auto;

  div > img {
    flex: 1;
  }
  img {
    max-height: 550px;
    max-width: 450px;
  }

  .info {
    margin-top: 75px;
    margin-left: 50px;

    * {
      margin-bottom: 30px;
    }
  }

  .priceColumn {
    display: inline-block;
    margin-left: 0;
    * {
      margin-bottom: 3px;
    }
  }
  .name {
    display: block;
    font-size: 42px;
    font-weight: bold;
  }

  button {
    float: initial;
  }
}

@media (max-width: 1100px) {
  #productView {
    margin-left: 0px;
    margin-right: 12px;
    flex-direction: column;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-height: 220px;
      max-width: 300px;
    }

    .info {
      margin-top: 25px;
      margin-left: 50px;

      * {
        margin-bottom: 10px;
      }
    }
  }
  .name {
    font-size: 16px;
  }
}
</style>