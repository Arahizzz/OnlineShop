import "./scss/main.scss";
import productList from "./views/productList.vue";
import productView from "./views/productView.vue";
import categoryList from "./views/categoryList.vue";
import cartItem from "./components/cart-item.vue";
import modalCart from "./components/modal.vue";
import checkout from "./views/checkout.vue";
import confirmation from "./views/confirmation.vue";
import Circle from "vue-loading-spinner/src/components/Circle.vue";
import app from "./App.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component("cart-item", cartItem);
Vue.component("circle-spinner", Circle);
Vue.component("modal-cart", modalCart);

const store = new Vuex.Store({
  state: {
    showModal: false,
    cart: {
      counter: 0,
      totalPrice: 0,
      goods: []
    }
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: ["cart"]
    })
  ],
  mutations: {
    toggleModal() {
      this.state.showModal = !this.state.showModal;
    },
    updateCart(state, goods) {
      this.state.cart.goods = goods;
      store.commit("updateCartCounter");
    },
    replaceCart(state, cart) {
      this.state.cart = cart;
      store.commit("updateCartCounter");
    },
    updateCartCounter() {
      var totalCount = 0;
      var totalPrice = 0;
      this.state.cart.goods.forEach(function(item) {
        totalCount += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      this.state.cart.counter = totalCount;
      this.state.cart.totalPrice = totalPrice;
    }
  },
  actions: {
    clearCart() {
      var cart = {
        counter: 0,
        totalPrice: 0,
        goods: []
      };
      store.commit("replaceCart", cart);
    }
  }
});

const routes = [
  { path: "/", component: productList },
  { path: "/product/:id", component: productView },
  { name: "category", path: "/category/:id", component: categoryList },
  { name: "checkout", path: "/checkout", component: checkout },
  { name: "confirm", path: "/checkout/confirm", component: confirmation }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  store, 
  components: {
    "app" :app
  },
  template: "<app/>"
});
