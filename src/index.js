import './scss/main.scss';

Vue.use(Vuex);

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
            var goods = store.state.cart.goods;
            for (var i = 0; i < goods.length; i++){
                if (goods[i].id == good.id) {
                    goods[i].quantity++;
                    store.commit("updateCartCounter");
                    return;
                }
            }
            goods.push(good);
            store.commit("updateCart", goods);
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

Vue.component('cart-item', {
    props: ['item', 'index'],
    methods: {
        removeItem(index) {
            var goods = store.state.cart.goods;
            goods.splice(index, 1);
            store.commit('updateCart', goods);
        },
        increment(index) {
            var goods = store.state.cart.goods;
            goods[index].quantity++;
            store.commit('updateCart', goods);
        },
        decrement(index) {
            var goods = store.state.cart.goods;
            if (goods[index].quantity > 1) {
                goods[index].quantity--;
                store.commit('updateCart', goods);
            }
        }
    },
    template: `
    <div class="good">
        <div>
            <p class="cartIndex">{{index + 1}}</p>
            <img :src="item.img_url"> 
            <div>
            <p>{{item.name}}</p>
            <p class="price">{{item.price}}</p>
            </div>
            </div>
            <div>
            <p v-on:click="decrement(index)" class="minus">-</p>
            <p class="quantity">{{item.quantity}}</p>
            <p v-on:click="increment(index)" class="plus">+</p>
            <img v-on:click="removeItem(index)" class="removeButton" src="https://img.icons8.com/wired/64/000000/filled-trash.png">
        </div>
    </div>
    `
});

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
