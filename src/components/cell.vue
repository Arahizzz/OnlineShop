<template>
    <div class="cell">
    <img :src="cell.image_url" alt="">
    <div class="bottom">
        <p><router-link :to="'/product/'+cell.id" class=goodName href='useless.html'>{{cell.name}}</router-link></p>
        <div><s v-if="cell.old_price != null" class='old_price'>{{cell.old_price}}</s></div>
        <p><span class="price">{{cell.price}}</span><button v-on:click="addToCart(cell)">Купити</button></p>
    </div>
    </div>
</template>

<script>
export default {
    props: ['cell'],
    methods: {
        addToCart (cell) {
            var good = {
                name: cell.name,
                image_url: cell.image_url,
                id: cell.id,
                price: cell.price,
                quantity: 1
            }
            var goods = this.$store.state.cart.goods;
            for (var i = 0; i < goods.length; i++){
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
}
</script>