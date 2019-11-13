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
      if (params.name != null && params.email != null && params.phone != null) {
        var products = "";
        this.$store.state.cart.goods.forEach(element => {
          products += `&products[${element.id}]=${element.quantity}`;
        });
        fetch("https://nit.tron.net.ua/api/order/add", {
          method: "post",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body:
            `token=AV7HST12dxiKplsWKY0s&name=${params.name}&phone=${params.phone}&email=${params.email}` +
            products
        })
          .then(r => r.json())
          .then(response => {
            if (response.status == "success") this.$store.dispatch("clearCart");
            else {
              this.error = true;
              for (let [key, value] of Object.entries(response.errors)) {
                this.errorInfo += value + "\n";
              }
            }
            this.loading = false;
          })
          .catch(error => {
            this.error = true;
            this.errorInfo = error;
            this.loading = false;
          });
      }
      else {
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