import './scss/main.scss';
import productList from './views/productList.vue'
import productView from './views/productView.vue'
import cartItem from './components/cart-item.vue'
import modalCart from './components/modal.vue'
import checkout from './views/checkout.vue';
import confirmation from './views/confirmation.vue'
import Circle from 'vue-loading-spinner/src/components/Circle.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('cart-item', cartItem);
Vue.component('circle-spinner', Circle);
Vue.component('modal-cart', modalCart);

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
        clearCart() {
            var cart = {
                counter: 0,
                totalPrice: 0,
                goods:[]
            }
            store.commit('replaceCart', cart);
        },
    }
});

store.dispatch('fetchData');

const routes = [
    { path: '/', component: productList },
    { path: '/product/:id', component: productView },
    { name: 'checkout', path: '/checkout', component: checkout },
    { name: 'confirm', path: '/checkout/confirm', component: confirmation}
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
