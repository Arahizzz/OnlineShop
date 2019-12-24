<template>
    <div>
        <header>
            <a href="index.html">
                <div id="logo">
                    <img src="https://img.icons8.com/cotton/64/000000/shopping.png">
                    <p>Усе для дому</p>
                </div>
            </a>
            <div id="categories-container">
                <router-link v-for="category in categories" :key="category.id" :to="{name: 'category', params:{id: category.id}}">
                        <div class="categoryblock">{{category.name}}</div>
                </router-link>
            </div>
            <div v-on:click="toggleModal" id="cart">
                <div>
                    <p id="counter">{{counter}}</p>
                    <img src="https://img.icons8.com/color/48/000000/shopping-cart.png">
                </div>
            </div>
        </header>
        <modal-cart></modal-cart>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.cart.counter;
    },
    categories() {
      return this.$store.state.categories;
    }
  },
  data(){
    return {
      categories:[],
    }
  },
  methods: {
    toggleModal() {
      this.$store.commit("toggleModal");
    },
    getCategories() {
      fetch("https://mshop-api.herokuapp.com/api/categories").then(response => response.json()).then(json => this.categories = json);
    }
  },
  created() {
    this.getCategories();
  }
}
</script>