!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){"use strict";n.r(e);n(1);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"goods"}},t._l(t.categories,(function(e){return n("div",{key:e.name,staticClass:"list"},[n("h1",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"grid"},t._l(e.cells,(function(t){return n("cell",{key:t.id,attrs:{cell:t}})})),1)])})),0)};r._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell"},[n("img",{attrs:{src:t.cell.img_url,alt:""}}),t._v(" "),n("div",{staticClass:"bottom"},[n("p",[n("router-link",{staticClass:"goodName",attrs:{to:"/product/"+t.cell.id,href:"useless.html"}},[t._v(t._s(t.cell.name))])],1),t._v(" "),n("div",[null!=t.cell.old_price?n("s",{staticClass:"old_price"},[t._v(t._s(t.cell.old_price))]):t._e()]),t._v(" "),n("p",[n("span",{staticClass:"price"},[t._v(t._s(t.cell.price))]),n("button",{on:{click:function(e){return t.addToCart(t.cell)}}},[t._v("Купити")])])])])};i._withStripped=!0;function o(t,e,n,r,i,o,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:u}}var a=o({props:["cell"],methods:{addToCart:function(t){for(var e={name:t.name,img_url:t.img_url,id:t.id,price:t.price,quantity:1},n=this.$store.state.cart.goods,r=0;r<n.length;r++)if(n[r].id==e.id)return n[r].quantity++,void this.$store.commit("updateCartCounter");n.push(e),this.$store.commit("updateCart",n)}}},i,[],!1,null,null,null);a.options.__file="src/components/cell.vue";var c=o({watch:{$route:'$store.dispatch("fetchData")'},computed:{categories:function(){return this.$store.state.categories}},components:{cell:a.exports}},r,[],!1,null,null,null);c.options.__file="src/views/productList.vue";var s=c.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0==t.loading?n("div",{attrs:{id:"productView"}},[n("div",[n("img",{attrs:{src:t.product.image_url,alt:""}})]),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"name"},[t._v(t._s(t.product.name))]),t._v(" "),n("div",{staticClass:"priceColumn"},[n("p",[null!=t.product.special_price?n("s",{staticClass:"old_price"},[t._v(t._s(t.product.price))]):t._e()]),t._v(" "),n("p",{staticClass:"price"},[t._v(t._s(null!=t.product.special_price?t.product.special_price:t.product.price))])]),t._v(" "),n("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Купити")]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])]):t._e()};u._withStripped=!0;var l={data:function(){return{loading:!0,product:{name:"",price:0,image_url:"",description:""}}},watch:{$route:"fetchData"},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.error=this.post=null,this.loading=!0,fetch("https://nit.tron.net.ua/api/product/"+this.$route.params.id).then((function(e){e.json().then((function(e){return t.product=e})),t.loading=!1}))},addToCart:function(t){for(var e={name:t.name,img_url:t.image_url,id:t.id,price:null!=t.special_price?t.special_price:t.price,quantity:1},n=this.$store.state.cart.goods,r=0;r<n.length;r++)if(n[r].id==e.id)return n[r].quantity++,void this.$store.commit("updateCartCounter");n.push(e),this.$store.commit("updateCart",n)}}},d=(n(2),o(l,u,[],!1,null,null,null));d.options.__file="src/views/productView.vue";var p=d.exports;Vue.use(Vuex),Vue.use(VueRouter);var m=new Vuex.Store({state:{showModal:!1,categories:[{name:"Category",cells:[]}],cart:{counter:0,totalPrice:0,goods:[]}},plugins:[createPersistedState({paths:["cart"]})],mutations:{toggleModal:function(){this.state.showModal=!this.state.showModal},updateCategories:function(t,e){this.state.categories=e},updateCart:function(t,e){this.state.cart.goods=e,m.commit("updateCartCounter")},replaceCart:function(t,e){this.state.cart=e,m.commit("updateCartCounter")},updateCartCounter:function(){var t=0,e=0;this.state.cart.goods.forEach((function(n){t+=n.quantity,e+=n.price*n.quantity})),this.state.cart.counter=t,this.state.cart.totalPrice=e}},actions:{fetchData:function(t){fetch("https://nit.tron.net.ua/api/category/list").then((function(t){t.json().then((function(t){var e=[];t.forEach((function(t){fetch("https://nit.tron.net.ua/api/product/list/category/"+t.id).then((function(n){return n.json().then((function(n){var r={name:t.name,cells:n.map((function(t){return console.log(t),{name:t.name,img_url:t.image_url,id:t.id,price:null!=t.special_price?t.special_price:t.price,old_price:null!=t.special_price?t.price:null}}))};e.push(r)}))}))})),m.commit("updateCategories",e)}))}))}}});m.dispatch("fetchData");var f=new VueRouter({routes:[{path:"/",component:s},{path:"/product/:id",component:p}]});new Vue({router:f,store:m}).$mount("#app");Vue.component("cart-item",{props:["item","index"],methods:{removeItem:function(t){var e=m.state.cart.goods;e.splice(t,1),m.commit("updateCart",e)},increment:function(t){var e=m.state.cart.goods;e[t].quantity++,m.commit("updateCart",e)},decrement:function(t){var e=m.state.cart.goods;e[t].quantity>1&&(e[t].quantity--,m.commit("updateCart",e))}},template:'\n    <div class="good">\n        <div>\n            <p class="cartIndex">{{index + 1}}</p>\n            <img :src="item.img_url"> \n            <div>\n            <p>{{item.name}}</p>\n            <p class="price">{{item.price}}</p>\n            </div>\n            </div>\n            <div>\n            <p v-on:click="decrement(index)" class="minus">-</p>\n            <p class="quantity">{{item.quantity}}</p>\n            <p v-on:click="increment(index)" class="plus">+</p>\n            <img v-on:click="removeItem(index)" class="removeButton" src="https://img.icons8.com/wired/64/000000/filled-trash.png">\n        </div>\n    </div>\n    '});new Vue({el:"#cart",computed:{counter:function(){return m.state.cart.counter}},methods:{toggleModal:function(){m.commit("toggleModal")}}}),new Vue({el:"#myModal",methods:{toggleModal:function(){m.commit("toggleModal")},clearCart:function(){m.commit("replaceCart",{counter:0,totalPrice:0,goods:[]})}},computed:{displayModal:function(){return m.state.showModal},totalPrice:function(){return m.state.cart.totalPrice},goodsInCart:function(){return m.state.cart.goods},displayBottom:function(){return m.state.cart.counter>0}}})}]);