<template>
  <div v-if="loading" id="confirmation">
    <circle-spinner></circle-spinner>
  </div>
  <div v-else-if="error == false" id="confirmation">
    <h1>Замовлення успішно оформлено</h1>
    <p>Наш менеджер зв'яжеться з вами в найближчий час.</p>
  </div>
  <div v-else id="confirmation">
    <h1>Вибачте, трапилася помилка</h1>
    <p>{{errorInfo}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      error: false,
      errorInfo: ""
    };
  },
  created() {
    this.postOrder();
    window.scrollTo(0, 0);
  },
  methods: {
    postOrder() {
      var params = this.$route.params;
      if (
        params.name != null &&
        params.email != null &&
        params.phone != null &&
        params.address != null
      ) {
        var products = this.$store.state.cart.goods.map(element => ({
          id: element.id,
          quantity: element.quantity
        }));
        var body = JSON.stringify({
          name: params.name,
          phone: params.phone,
          email: params.email,
          address: params.address,
          products
        });
        console.log(body);
        fetch("https://online-shop-backend.arahizzz.now.sh/order", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body
        })
          .then(response => {
            console.log(response);
            if (response.status == 201 || response.status == 200 || response.status == 204) this.$store.dispatch("clearCart");
            else {
              this.error = true;
              this.errorInfo = response.body;
            }
            this.loading = false;
          })
          .catch(error => {
            this.error = true;
            this.errorInfo = error;
            this.loading = false;
          });
      } else {
        this.error = true;
        this.errorInfo = "Дані покупця не введені";
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss">
#confirmation {
  text-align: center;
}
</style>