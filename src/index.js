import './scss/main.scss';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showModal: false,
        categories: [{
            name: "adasd",
            cells:[]
        }],
        cart: {
            counter: 0,
            totalPrice: 0,
            goods:[]
        },
    },
    mutations: {
        toggleModal() {
            this.state.showModal = !this.state.showModal
        },
        updateCategories(state, categories) {
            this.state.categories = categories;
        },
        updateCart(state, cart) {
            this.state.cart.goods = cart;
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
                                cells: productList.map((product)=> {
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

var goods = new Vue({
    store,
    el: "#goods",
    computed: {
        categories() {
            return store.state.categories;
        }
    },
});

Vue.component('cell', {
    props: ['cell'],
    methods: {
        addToCart (cell) {
            var good = {
                name: cell.name,
                img_url: cell.img_url,
                id: cell.id,
                price: cell.price,
                quantity: 1
            }
            var cart = store.state.cart;
            for (var i = 0; i < cart.length; i++){
                if (cart[i].id == good.id) {
                    cart[i].quantity++;
                    store.commit("updateCartCounter");
                    return;
                }
            }
            cart.push(good);
            store.commit("updateCart", cart);
        }
    },
    template: `
    <div class="cell">
    <img :src="cell.img_url" alt="">
    <div class="bottom">
        <p><a class=goodName href='useless.html'>{{cell.name}}</a></p>
        <div><s v-if="cell.old_price != null" class='old_price'>{{cell.old_price}}</s></div>
        <p><span class="price">{{cell.price}}</span><button v-on:click="addToCart(cell)">Купити</button></p>
    </div>
    </div>
    `
});

var cart = new Vue({
    el: "#cart",
    computed: {
        counter() {
            return store.state.counter;
        }
    },
    methods: {
        toggleModal() {
            store.commit('toggleModal')
        }
    }
});

var modal = new Vue({
    el: "#myModal",
    computed: {
        displayModal() {
            return store.state.showModal;
        }
    },
});