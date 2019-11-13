<template>
    <div v-if="displayModal" id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span v-on:click="toggleModal()" class="close">&times;</span>
            <div id="totalPrice">Загальна вартість: <span class="price">{{totalPrice}}</span></div>
            <cart-item v-for="(good, index) in goodsInCart" v-bind:key="good.id" v-bind:item="good"
                v-bind:index="index"></cart-item>
            <button v-on:click="clearCart" v-if="displayBottom" id="clearCart">Очистити кошик</button>
            <button v-on:click="checkout" v-if="displayBottom">Оформити замовлення</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleModal() {
            this.$store.commit('toggleModal')
        },
        clearCart() {
            this.$store.dispatch('clearCart');
        },
        checkout() {
            this.$store.commit('toggleModal');
            this.$router.push({ name: 'checkout' });
        }
    },
    computed: {
        displayModal() {
            return this.$store.state.showModal;
        },
        totalPrice() {
            return this.$store.state.cart.totalPrice;
        },
        goodsInCart() {
            return this.$store.state.cart.goods;
        },
        displayBottom() {
            return this.$store.state.cart.counter > 0;
        }
    },
}
</script>