<template>
    <div class="good">
        <div>
            <p class="cartIndex">{{index + 1}}</p>
            <img :src="item.img_url"> 
            <div>
            <p class="name">{{item.name}}</p>
            <p class="price">{{item.price}}</p>
            </div>
            </div>
            <div class="controls">
            <p v-on:click="decrement(index)" class="minus">-</p>
            <p class="quantity">{{item.quantity}}</p>
            <p v-on:click="increment(index)" class="plus">+</p>
            <img v-on:click="removeItem(index)" class="removeButton" src="https://img.icons8.com/wired/64/000000/filled-trash.png">
        </div>
    </div>
</template>

<script>
export default {
    props: ['item', 'index'],
    methods: {
        removeItem(index) {
            var goods = this.$store.state.cart.goods;
            goods.splice(index, 1);
            this.$store.commit('updateCart', goods);
        },
        increment(index) {
            var goods = this.$store.state.cart.goods;
            goods[index].quantity++;
            this.$store.commit('updateCart', goods);
        },
        decrement(index) {
            var goods = this.$store.state.cart.goods;
            if (goods[index].quantity > 1) {
                goods[index].quantity--;
                this.$store.commit('updateCart', goods);
            }
        }
    },
}
</script>