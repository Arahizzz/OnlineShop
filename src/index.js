import './scss/main.scss';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showModal: false,
        categories: [{
            name: "adasd",
            cells:[]
        }],
    },
    mutations: {
        toggleModal() {
            this.state.showModal = !this.state.showModal
        },
        updateCategories(state, categories) {
            state.categories = categories;
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
        }
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
    options:{}
});

var cart = new Vue({
    el: "#cart",
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