<template>
    <div v-if="goodsInCart.length > 0" id="checkout">
        <h1>Ваше замовлення</h1>
        <cart-item v-for="(good, index) in goodsInCart" v-bind:key="good.id" v-bind:item="good"
                v-bind:index="index"></cart-item>
        <h1>Введіть ваші дані</h1>        
        <div class="form">
            <p>Ваш ПІБ</p>
            <input v-model="name" placeholder="Іванов Іван Іванович">
            <p v-if="correctName==false" class="error">Уведіть повне Прізвище Ім'я По-батькові</p>
            <p>Ваш Телефон</p>
            <input v-model="phone" placeholder="380976543210">
            <p v-if="correctPhone==false" class="error">Невірний формат телефону</p>
            <p>Ваша Email</p>
            <input v-model="email" placeholder="email@example.com">
            <p v-if="correctEmail==false" class="error">Невірний формат електроної пошти</p>
            <button>Пітдвердити замовлення</button>
        </div>
    </div>
    <div v-else id="checkout"><h1>Ваша корзина порожня</h1></div>
</template>

<script>
export default {
    
    data: function (){
        return {
        name: "",
        phone: "",
        email: "",
        correctName: true,
        correctPhone: true,
        correctEmail : true,
        }
    },
    computed: {
        goodsInCart() {
            return this.$store.state.cart.goods;
        }
    },
    methods: {
        confirm(){
            correctName = /(['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+\s){2}['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+/.test(name);
            correctPhone = /^+?\d{9-12}/.test(correctPhone);
        }
    }
}
</script>

<style lang="scss">
    h1 {
        font-size: 36px;
    }

    #checkout {
        margin-left: 50px;
        margin-right: 50px; 
        min-height: 800px;

        .form {
            display: flex;
            flex-direction: column;

            * {
                margin-top: 15px;
            }

            .error {
                margin-top: 2px;
                color: red;
                font-size: 14px;
            }
        }
    }
</style>