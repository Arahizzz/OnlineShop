<template>
  <div v-if="goodsInCart.length > 0" id="checkout">
    <h1>Ваше замовлення</h1>
    <cart-item
      v-for="(good, index) in goodsInCart"
      v-bind:key="good.id"
      v-bind:item="good"
      v-bind:index="index"
    ></cart-item>
    <div id="totalPrice">
      Загальна вартість:
      <span class="price">{{totalPrice}}</span>
    </div>
    <h1>Введіть ваші дані</h1>
    <div class="form">
      <p>Ваш ПІБ</p>
      <input v-model="name" placeholder="Іванов Іван Іванович" />
      <p v-if="correctName==false" class="error">Уведіть ваше повне ім'я</p>
      <p>Ваш Телефон</p>
      <input v-model="phone" placeholder="380976543210" />
      <p v-if="correctPhone==false" class="error">Невірний формат телефону</p>
      <p>Ваш Email</p>
      <input v-model="email" placeholder="email@example.com" />
      <p v-if="correctEmail==false" class="error">Невірний формат електроної пошти</p>
      <button v-on:click="confirm">Пітдвердити замовлення</button>
    </div>
  </div>
  <div v-else id="checkout">
    <h1>Ваша корзина порожня</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      correctName: true,
      correctPhone: true,
      correctEmail: true
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    goodsInCart() {
      return this.$store.state.cart.goods;
    },
    totalPrice() {
      return this.$store.state.cart.totalPrice;
    }
  },
  methods: {
    confirm() {
      this.correctName = /['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+$/.test(
        this.name
      );
      this.correctPhone = /^\+?\d{10,12}$/.test(this.phone);
      this.correctEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        this.email
      );
      if (this.correctName && this.correctPhone && this.correctEmail) {
        this.$router.push({
          name: "confirm",
          params: { name: this.name, phone: this.phone, email: this.email }
        });
      }
    }
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 36px;
}

#checkout {
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1100px) {
    .good {
      margin-left: -30px;
      margin-right: -30px;
      .name {
        font-size: 12px;
      }
    }
  }

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