import './scss/main.scss';
import productList from './views/productList.vue'
import productView from './views/productView.vue'
import cartItem from './components/cart-item.vue'
import checkout from './views/checkout.vue';
import Circle from 'vue-loading-spinner/src/components/Circle.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('cart-item', cartItem);
Vue.component('circle-spinner', Circle);

const store = new Vuex.Store({
    state: {
        showModal: false,
        categories: [{
            name: "Category",
            cells:[]
        }],
        cart: {
            counter: 0,
            totalPrice: 0,
            goods:[]
        },
    },
    plugins: [createPersistedState({
        paths:['cart']
    })],
    mutations: {
        toggleModal() {
            this.state.showModal = !this.state.showModal
        },
        updateCategories(state, categories) {
            this.state.categories = categories;
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
            this.state.cart.goods.forEach(function (item) {
                totalCount += item.quantity;
                totalPrice += item.price * item.quantity;
            });
            this.state.cart.counter = totalCount;
            this.state.cart.totalPrice = totalPrice;
        }
    },
    actions: {
        fetchData(context) {
            fetch('https://nit.tron.net.ua/api/category/list').then((response) => {
                response.json().then((json) => {
                    //context.commit('updateCategories', json);
                    //var ids = Array.from(json, element => element.id);
                    var categories = [];
                    json.forEach(element => {
                        fetch('https://nit.tron.net.ua/api/product/list/category/' + element.id)
                            .then(categoryRespone => categoryRespone.json().then((productList) => {
                            var category = {
                                name: element.name,
                                cells: productList.map((product) => {
                                    return {
                                        name: product.name,
                                        img_url: product.image_url,
                                        id: product.id,
                                        price: product.special_price != null ? product.special_price : product.price,
                                        old_price: product.special_price != null ? product.price : null,
                                    }
                                })
                            }
                                categories.push(category);    
                        }))
                    });
                    store.commit('updateCategories', categories);
                })
            })
        },
    }
});

store.dispatch('fetchData');

const routes = [
    { path: '/', component: productList },
    { path: '/product/:id', component: productView },
    { path: '/checkout', component: checkout}
];

const router = new VueRouter({
    routes,
});

var app = new Vue({
    router,
    store
}).$mount('#app');


var cart = new Vue({
    el: "#cart",
    computed: {
        counter() {
            return store.state.cart.counter;
        }
    },
    methods: {
        toggleModal() {
            store.commit('toggleModal')
        },
    }
});

var modal = new Vue({
    el: "#myModal",
    store,
    methods: {
        toggleModal() {
            store.commit('toggleModal')
        },
        clearCart() {
            var cart = {
                counter: 0,
                totalPrice: 0,
                goods:[]
            }
            store.commit('replaceCart', cart);
        },
        checkout() {
            store.commit('toggleModal');
            router.push({ path: 'checkout' });
        }
    },
    computed: {
        displayModal() {
            return store.state.showModal;
        },
        totalPrice() {
            return store.state.cart.totalPrice;
        },
        goodsInCart() {
            return store.state.cart.goods;
        },
        displayBottom() {
            return store.state.cart.counter > 0;
        }
    },
});
