!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var n=r(0);r.n(n).a},function(t,e,r){"use strict";var n=r(1);r.n(n).a},function(t,e,r){"use strict";var n=r(2);r.n(n).a},function(t,e,r){"use strict";var n=r(3);r.n(n).a},function(t,e,r){"use strict";r.r(e);r(4);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"goods"}},t._l(t.categories,(function(e){return r("div",{key:e.name,staticClass:"list"},[r("h1",[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"grid"},t._l(e.cells,(function(t){return r("cell",{key:t.id,attrs:{cell:t}})})),1)])})),0)};n._withStripped=!0;var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cell"},[r("img",{attrs:{src:t.cell.img_url,alt:""}}),t._v(" "),r("div",{staticClass:"bottom"},[r("p",[r("router-link",{staticClass:"goodName",attrs:{to:"/product/"+t.cell.id,href:"useless.html"}},[t._v(t._s(t.cell.name))])],1),t._v(" "),r("div",[null!=t.cell.old_price?r("s",{staticClass:"old_price"},[t._v(t._s(t.cell.old_price))]):t._e()]),t._v(" "),r("p",[r("span",{staticClass:"price"},[t._v(t._s(t.cell.price))]),r("button",{on:{click:function(e){return t.addToCart(t.cell)}}},[t._v("Купити")])])])])};o._withStripped=!0;function i(t,e,r,n,o,i,a,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var a=i({props:["cell"],methods:{addToCart:function(t){for(var e={name:t.name,img_url:t.img_url,id:t.id,price:t.price,quantity:1},r=this.$store.state.cart.goods,n=0;n<r.length;n++)if(r[n].id==e.id)return r[n].quantity++,void this.$store.commit("updateCartCounter");r.push(e),this.$store.commit("updateCart",r)}}},o,[],!1,null,null,null);a.options.__file="src/components/cell.vue";var s=i({watch:{$route:'$store.dispatch("fetchData")'},computed:{categories:function(){return this.$store.state.categories}},components:{cell:a.exports}},n,[],!1,null,null,null);s.options.__file="src/views/productList.vue";var c=s.exports,l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{attrs:{id:"productView"}},[r("circle-spinner")],1):r("div",{attrs:{id:"productView"}},[r("div",[r("img",{attrs:{src:t.product.image_url,alt:""}})]),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"name"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"priceColumn"},[r("p",[null!=t.product.special_price?r("s",{staticClass:"old_price"},[t._v(t._s(t.product.price))]):t._e()]),t._v(" "),r("p",{staticClass:"price"},[t._v(t._s(null!=t.product.special_price?t.product.special_price:t.product.price))])]),t._v(" "),r("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Купити")]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])])};l._withStripped=!0;var u={data:function(){return{loading:!0,product:{name:"",price:0,image_url:"",description:""}}},watch:{$route:"fetchData"},created:function(){this.fetchData(),window.scrollTo(0,0)},methods:{fetchData:function(){var t=this;this.error=this.post=null,this.loading=!0,fetch("https://nit.tron.net.ua/api/product/"+this.$route.params.id).then((function(e){e.json().then((function(e){return t.product=e})),t.loading=!1}))},addToCart:function(t){for(var e={name:t.name,img_url:t.image_url,id:t.id,price:null!=t.special_price?t.special_price:t.price,quantity:1},r=this.$store.state.cart.goods,n=0;n<r.length;n++)if(r[n].id==e.id)return r[n].quantity++,void this.$store.commit("updateCartCounter");r.push(e),this.$store.commit("updateCart",r)}}},d=(r(5),i(u,l,[],!1,null,null,null));d.options.__file="src/views/productView.vue";var p=d.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"good"},[r("div",[r("p",{staticClass:"cartIndex"},[t._v(t._s(t.index+1))]),t._v(" "),r("img",{attrs:{src:t.item.img_url}}),t._v(" "),r("div",[r("p",[t._v(t._s(t.item.name))]),t._v(" "),r("p",{staticClass:"price"},[t._v(t._s(t.item.price))])])]),t._v(" "),r("div",[r("p",{staticClass:"minus",on:{click:function(e){return t.decrement(t.index)}}},[t._v("-")]),t._v(" "),r("p",{staticClass:"quantity"},[t._v(t._s(t.item.quantity))]),t._v(" "),r("p",{staticClass:"plus",on:{click:function(e){return t.increment(t.index)}}},[t._v("+")]),t._v(" "),r("img",{staticClass:"removeButton",attrs:{src:"https://img.icons8.com/wired/64/000000/filled-trash.png"},on:{click:function(e){return t.removeItem(t.index)}}})])])};m._withStripped=!0;var h=i({props:["item","index"],methods:{removeItem:function(t){var e=this.$store.state.cart.goods;e.splice(t,1),this.$store.commit("updateCart",e)},increment:function(t){var e=this.$store.state.cart.goods;e[t].quantity++,this.$store.commit("updateCart",e)},decrement:function(t){var e=this.$store.state.cart.goods;e[t].quantity>1&&(e[t].quantity--,this.$store.commit("updateCart",e))}}},m,[],!1,null,null,null);h.options.__file="src/components/cart-item.vue";var v=h.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.displayModal?r("div",{staticClass:"modal",attrs:{id:"myModal"}},[r("div",{staticClass:"modal-content"},[r("span",{staticClass:"close",on:{click:function(e){return t.toggleModal()}}},[t._v("×")]),t._v(" "),r("div",{attrs:{id:"totalPrice"}},[t._v("Загальна вартість: "),r("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])]),t._v(" "),t._l(t.goodsInCart,(function(t,e){return r("cart-item",{key:t.id,attrs:{item:t,index:e}})})),t._v(" "),t.displayBottom?r("button",{attrs:{id:"clearCart"},on:{click:t.clearCart}},[t._v("Очистити кошик")]):t._e(),t._v(" "),t.displayBottom?r("button",{on:{click:t.checkout}},[t._v("Оформити замовлення")]):t._e()],2)]):t._e()};_._withStripped=!0;var f=i({methods:{toggleModal:function(){this.$store.commit("toggleModal")},clearCart:function(){this.$store.dispatch("clearCart")},checkout:function(){this.$store.commit("toggleModal"),this.$router.push({name:"checkout"})}},computed:{displayModal:function(){return this.$store.state.showModal},totalPrice:function(){return this.$store.state.cart.totalPrice},goodsInCart:function(){return this.$store.state.cart.goods},displayBottom:function(){return this.$store.state.cart.counter>0}}},_,[],!1,null,null,null);f.options.__file="src/components/modal.vue";var g=f.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.goodsInCart.length>0?r("div",{attrs:{id:"checkout"}},[r("h1",[t._v("Ваше замовлення")]),t._v(" "),t._l(t.goodsInCart,(function(t,e){return r("cart-item",{key:t.id,attrs:{item:t,index:e}})})),t._v(" "),r("h1",[t._v("Введіть ваші дані")]),t._v(" "),r("div",{staticClass:"form"},[r("p",[t._v("Ваш ПІБ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Іванов Іван Іванович"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),0==t.correctName?r("p",{staticClass:"error"},[t._v("Уведіть повне Прізвище Ім'я По-батькові")]):t._e(),t._v(" "),r("p",[t._v("Ваш Телефон")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{placeholder:"380976543210"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),0==t.correctPhone?r("p",{staticClass:"error"},[t._v("Невірний формат телефону")]):t._e(),t._v(" "),r("p",[t._v("Ваш Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"email@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),0==t.correctEmail?r("p",{staticClass:"error"},[t._v("Невірний формат електроної пошти")]):t._e(),t._v(" "),r("button",{on:{click:t.confirm}},[t._v("Пітдвердити замовлення")])])],2):r("div",{attrs:{id:"checkout"}},[r("h1",[t._v("Ваша корзина порожня")])])};C._withStripped=!0;var y={data:function(){return{name:"",phone:"",email:"",correctName:!0,correctPhone:!0,correctEmail:!0}},created:function(){window.scrollTo(0,0)},computed:{goodsInCart:function(){return this.$store.state.cart.goods}},methods:{confirm:function(){this.correctName=/['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+$/.test(this.name),this.correctPhone=/^\+?\d{10,12}$/.test(this.phone),this.correctEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.email),this.correctName&&this.correctPhone&&this.correctEmail&&this.$router.push({name:"confirm",params:{name:this.name,phone:this.phone,email:this.email}})}}},w=(r(6),i(y,C,[],!1,null,null,null));w.options.__file="src/views/checkout.vue";var $=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{attrs:{id:"confirmation"}},[r("circle-spinner")],1):0==t.error?r("div",{attrs:{id:"confirmation"}},[r("h1",[t._v("Замовлення успішно оформлено")]),t._v(" "),r("p",[t._v("Наш менеджер зв'яжеться з вами в найближчий час.")])]):r("div",{attrs:{id:"confirmation"}},[r("h1",[t._v("Вибачте, трапилася помилка")]),t._v(" "),r("p",[t._v(t._s(t.errorInfo))])])};function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}x._withStripped=!0;var k={data:function(){return{loading:!0,error:!1,errorInfo:""}},created:function(){this.postOrder(),window.scrollTo(0,0)},methods:{postOrder:function(){var t=this,e=this.$route.params;if(null!=e.name&&null!=e.email&&null!=e.phone){var r="";this.$store.state.cart.goods.forEach((function(t){r+="&products[".concat(t.id,"]=").concat(t.quantity)})),fetch("https://nit.tron.net.ua/api/order/add",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:"token=AV7HST12dxiKplsWKY0s&name=".concat(e.name,"&phone=").concat(e.phone,"&email=").concat(e.email)+r}).then((function(t){return t.json()})).then((function(e){if("success"==e.status)t.$store.dispatch("clearCart");else{t.error=!0;for(var r=0,n=Object.entries(e.errors);r<n.length;r++){var o=b(n[r],2),i=(o[0],o[1]);t.errorInfo+=i+"\n"}}t.loading=!1})).catch((function(e){t.error=!0,t.errorInfo=e,t.loading=!1}))}else this.error=!0,this.errorInfo="Дані покупця не введені",this.loading=!1}}},S=(r(7),i(k,x,[],!1,null,null,null));S.options.__file="src/views/confirmation.vue";var E=S.exports,P=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"spinner spinner--circle",style:this.styles,attrs:{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})])};P._withStripped=!0;var M={props:{size:{default:"40px"}},computed:{styles(){return{width:this.size,height:this.size}}}},V=(r(8),i(M,P,[],!1,null,"d95d914e",null));V.options.__file="node_modules/vue-loading-spinner/src/components/Circle.vue";var j=V.exports;Vue.use(Vuex),Vue.use(VueRouter),Vue.component("cart-item",v),Vue.component("circle-spinner",j),Vue.component("modal-cart",g);var T=new Vuex.Store({state:{showModal:!1,categories:[{name:"Category",cells:[]}],cart:{counter:0,totalPrice:0,goods:[]}},plugins:[createPersistedState({paths:["cart"]})],mutations:{toggleModal:function(){this.state.showModal=!this.state.showModal},updateCategories:function(t,e){this.state.categories=e},updateCart:function(t,e){this.state.cart.goods=e,T.commit("updateCartCounter")},replaceCart:function(t,e){this.state.cart=e,T.commit("updateCartCounter")},updateCartCounter:function(){var t=0,e=0;this.state.cart.goods.forEach((function(r){t+=r.quantity,e+=r.price*r.quantity})),this.state.cart.counter=t,this.state.cart.totalPrice=e}},actions:{fetchData:function(t){fetch("https://nit.tron.net.ua/api/category/list").then((function(t){t.json().then((function(t){var e=[];t.forEach((function(t){fetch("https://nit.tron.net.ua/api/product/list/category/"+t.id).then((function(r){return r.json().then((function(r){var n={name:t.name,cells:r.map((function(t){return{name:t.name,img_url:t.image_url,id:t.id,price:null!=t.special_price?t.special_price:t.price,old_price:null!=t.special_price?t.price:null}}))};e.push(n)}))}))})),T.commit("updateCategories",e)}))}))},clearCart:function(){T.commit("replaceCart",{counter:0,totalPrice:0,goods:[]})}}});T.dispatch("fetchData");var I=new VueRouter({routes:[{path:"/",component:c},{path:"/product/:id",component:p},{name:"checkout",path:"/checkout",component:$},{name:"confirm",path:"/checkout/confirm",component:E}]});new Vue({router:I,store:T}).$mount("#app"),new Vue({el:"#cart",computed:{counter:function(){return T.state.cart.counter}},methods:{toggleModal:function(){T.commit("toggleModal")}}})}]);