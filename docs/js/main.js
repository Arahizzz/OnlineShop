!function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=13)}([function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";var o=r(0);r.n(o).a},function(t,e,r){"use strict";var o=r(1);r.n(o).a},function(t,e,r){"use strict";var o=r(2);r.n(o).a},function(t,e,r){"use strict";var o=r(3);r.n(o).a},function(t,e,r){"use strict";var o=r(4);r.n(o).a},function(t,e,r){"use strict";var o=r(5);r.n(o).a},function(t,e,r){"use strict";r.r(e);r(6);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",[r("circle-spinner")],1):r("div",t._l(t.categories,(function(e){return r("div",{key:e.name,staticClass:"list"},[r("h1",[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"grid"},t._l(e.products,(function(t){return r("cell",{key:t.id,attrs:{cell:t}})})),1)])})),0)};o._withStripped=!0;var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cell"},[r("img",{attrs:{src:t.cell.image_url,alt:""}}),t._v(" "),r("div",{staticClass:"bottom"},[r("p",[r("router-link",{staticClass:"goodName",attrs:{to:"/product/"+t.cell.id}},[t._v(t._s(t.cell.name))])],1),t._v(" "),r("div",[null!=t.cell.old_price?r("s",{staticClass:"old_price"},[t._v(t._s(t.cell.old_price))]):t._e()]),t._v(" "),r("p",[r("span",{staticClass:"price"},[t._v(t._s(t.cell.price))]),r("button",{on:{click:function(e){return t.addToCart(t.cell)}}},[t._v("Купити")])])])])};i._withStripped=!0;function n(t,e,r,o,i,n,s,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var s=n({props:["cell"],methods:{addToCart:function(t){for(var e={name:t.name,image_url:t.image_url,id:t.id,price:t.price,quantity:1},r=this.$store.state.cart.goods,o=0;o<r.length;o++)if(r[o].id==e.id)return r[o].quantity++,void this.$store.commit("updateCartCounter");r.push(e),this.$store.commit("updateCart",r)}}},i,[],!1,null,null,null);s.options.__file="src/components/cell.vue";var a=s.exports,c=n({data:function(){return{loading:!0,categories:[{name:"",id:-1,products:[]}]}},methods:{fetchCategories:function(){var t=this;fetch("https://mshop-api.herokuapp.com/api/categories").then((function(e){e.json().then((function(e){t.categories=e,t.loading=!1}))}))}},watch:{$route:"fetchCategories"},created:function(){this.fetchCategories(),window.scrollTo(0,0)},components:{cell:a}},o,[],!1,null,null,null);c.options.__file="src/views/productList.vue";var l=c.exports,u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{attrs:{id:"productView"}},[r("circle-spinner")],1):t.error?r("div",[r("h1",[t._v("Товар з даним ID не знайдено")])]):r("div",{attrs:{id:"productView"}},[r("div",[r("img",{attrs:{src:t.product.image_url,alt:""}})]),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"name"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"priceColumn"},[r("p",[null!=t.product.old_price?r("s",{staticClass:"old_price"},[t._v(t._s(t.product.old_price))]):t._e()]),t._v(" "),r("p",{staticClass:"price"},[t._v(t._s(t.product.price))])]),t._v(" "),r("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Купити")]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])])};u._withStripped=!0;var d={data:function(){return{loading:!0,error:!1,product:{name:"",price:0,image_url:"",description:""}}},watch:{$route:"fetchData"},created:function(){this.fetchData(),window.scrollTo(0,0)},methods:{fetchData:function(){var t=this;this.loading=!0,fetch("https://mshop-api.herokuapp.com/api/products/"+this.$route.params.id).then((function(e){200==e.status?e.json().then((function(e){return t.product=e})):t.error=!0,t.loading=!1})).catch((function(e){t.error=!0,t.loading=!1}))},addToCart:function(t){for(var e={name:t.name,img_url:t.image_url,id:t.id,price:t.price,quantity:1},r=this.$store.state.cart.goods,o=0;o<r.length;o++)if(r[o].id==e.id)return r[o].quantity++,void this.$store.commit("updateCartCounter");r.push(e),this.$store.commit("updateCart",r)}}},p=(r(7),n(d,u,[],!1,null,null,null));p.options.__file="src/views/productView.vue";var m=p.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{attrs:{id:"goods"}},[r("circle-spinner")],1):t.error?r("div",{attrs:{id:"goods"}},[r("h1",[t._v("Сталася помилка")])]):r("div",{attrs:{id:"goods"}},[r("div",{key:t.category.name,staticClass:"list"},[r("h1",[t._v(t._s(t.category.name))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.category.description))]),t._v(" "),r("div",{staticClass:"grid"},t._l(t.category.cells,(function(t){return r("cell",{key:t.id,attrs:{cell:t}})})),1)])])};v._withStripped=!0;var h={data:function(){return{loading:!0,error:!1,category:{name:"",description:"",cells:[]}}},watch:{$route:"getCells"},created:function(){this.getCells(),window.scroll(0,0)},methods:{getCells:function(){var t=this,e=this.$route.params.id;fetch("https://mshop-api.herokuapp.com/api/categories/"+e).then((function(e){200==e.status?e.json().then((function(e){t.category={name:e.name,description:e.description,cells:e.products},t.loading=!1})):(t.error=!0,t.loading=!1)}))}},components:{cell:a}},_=(r(8),n(h,v,[],!1,null,null,null));_.options.__file="src/views/categoryList.vue";var f=_.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"good"},[r("div",[r("p",{staticClass:"cartIndex"},[t._v(t._s(t.index+1))]),t._v(" "),r("img",{attrs:{src:t.item.image_url}}),t._v(" "),r("div",[r("p",{staticClass:"name"},[t._v(t._s(t.item.name))]),t._v(" "),r("p",{staticClass:"price"},[t._v(t._s(t.item.price))])])]),t._v(" "),r("div",{staticClass:"controls"},[r("p",{staticClass:"minus",on:{click:function(e){return t.decrement(t.index)}}},[t._v("-")]),t._v(" "),r("p",{staticClass:"quantity"},[t._v(t._s(t.item.quantity))]),t._v(" "),r("p",{staticClass:"plus",on:{click:function(e){return t.increment(t.index)}}},[t._v("+")]),t._v(" "),r("img",{staticClass:"removeButton",attrs:{src:"https://img.icons8.com/wired/64/000000/filled-trash.png"},on:{click:function(e){return t.removeItem(t.index)}}})])])};g._withStripped=!0;var C=n({props:["item","index"],methods:{removeItem:function(t){var e=this.$store.state.cart.goods;e.splice(t,1),this.$store.commit("updateCart",e)},increment:function(t){var e=this.$store.state.cart.goods;e[t].quantity++,this.$store.commit("updateCart",e)},decrement:function(t){var e=this.$store.state.cart.goods;e[t].quantity>1&&(e[t].quantity--,this.$store.commit("updateCart",e))}}},g,[],!1,null,null,null);C.options.__file="src/components/cart-item.vue";var y=C.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.displayModal?r("div",{staticClass:"modal",attrs:{id:"myModal"}},[r("div",{staticClass:"modal-content"},[r("span",{staticClass:"close",on:{click:function(e){return t.toggleModal()}}},[t._v("×")]),t._v(" "),r("div",{attrs:{id:"totalPrice"}},[t._v("Загальна вартість: "),r("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])]),t._v(" "),t._l(t.goodsInCart,(function(t,e){return r("cart-item",{key:t.id,attrs:{item:t,index:e}})})),t._v(" "),t.displayBottom?r("button",{attrs:{id:"clearCart"},on:{click:t.clearCart}},[t._v("Очистити кошик")]):t._e(),t._v(" "),t.displayBottom?r("button",{on:{click:t.checkout}},[t._v("Оформити замовлення")]):t._e()],2)]):t._e()};$._withStripped=!0;var w=n({methods:{toggleModal:function(){this.$store.commit("toggleModal")},clearCart:function(){this.$store.dispatch("clearCart")},checkout:function(){this.$store.commit("toggleModal"),this.$router.push({name:"checkout"})}},computed:{displayModal:function(){return this.$store.state.showModal},totalPrice:function(){return this.$store.state.cart.totalPrice},goodsInCart:function(){return this.$store.state.cart.goods},displayBottom:function(){return this.$store.state.cart.counter>0}}},$,[],!1,null,null,null);w.options.__file="src/components/modal.vue";var k=w.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.goodsInCart.length>0?r("div",{attrs:{id:"checkout"}},[r("h1",[t._v("Ваше замовлення")]),t._v(" "),t._l(t.goodsInCart,(function(t,e){return r("cart-item",{key:t.id,attrs:{item:t,index:e}})})),t._v(" "),r("div",{attrs:{id:"totalPrice"}},[t._v("\n    Загальна вартість:\n    "),r("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])]),t._v(" "),r("h1",[t._v("Введіть ваші дані")]),t._v(" "),r("div",{staticClass:"form"},[r("p",[t._v("Ваш ПІБ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"Іванов Іван Іванович"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),0==t.correctName?r("p",{staticClass:"error"},[t._v("Уведіть ваше повне ім'я")]):t._e(),t._v(" "),r("p",[t._v("Ваш Телефон")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{placeholder:"380976543210"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),0==t.correctPhone?r("p",{staticClass:"error"},[t._v("Невірний формат телефону")]):t._e(),t._v(" "),r("p",[t._v("Ваш Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{placeholder:"email@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),0==t.correctEmail?r("p",{staticClass:"error"},[t._v("Невірний формат електроної пошти")]):t._e(),t._v(" "),r("p",[t._v("Ваша адреса")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:"Хрещатик, 1"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),0==t.correctAddress?r("p",{staticClass:"error"},[t._v("Заповніть поле адреси")]):t._e(),t._v(" "),r("button",{on:{click:t.confirm}},[t._v("Пітдвердити замовлення")])])],2):r("div",{attrs:{id:"checkout"}},[r("h1",[t._v("Ваша корзина порожня")])])};x._withStripped=!0;var P={data:function(){return{name:"",phone:"",email:"",address:"",correctName:!0,correctPhone:!0,correctEmail:!0,correctAddress:!0}},created:function(){window.scrollTo(0,0)},computed:{goodsInCart:function(){return this.$store.state.cart.goods},totalPrice:function(){return this.$store.state.cart.totalPrice}},methods:{confirm:function(){this.correctName=/['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+$/.test(this.name),this.correctPhone=/^\+?\d{10,12}$/.test(this.phone),this.correctEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(this.email),this.correctAddress=/['a-zA-Z\u00C0-\u017F\u0370-\u18AF]+$/.test(this.address),this.correctName&&this.correctPhone&&this.correctEmail&&this.address&&this.$router.push({name:"confirm",params:{name:this.name,phone:this.phone,email:this.email,address:this.address}})}}},b=(r(9),n(P,x,[],!1,null,null,null));b.options.__file="src/views/checkout.vue";var S=b.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{attrs:{id:"confirmation"}},[r("circle-spinner")],1):0==t.error?r("div",{attrs:{id:"confirmation"}},[r("h1",[t._v("Замовлення успішно оформлено")]),t._v(" "),r("p",[t._v("Наш менеджер зв'яжеться з вами в найближчий час.")])]):r("div",{attrs:{id:"confirmation"}},[r("h1",[t._v("Вибачте, трапилася помилка")]),t._v(" "),r("p",[t._v(t._s(t.errorInfo))])])};E._withStripped=!0;var M={data:function(){return{loading:!0,error:!1,errorInfo:""}},created:function(){this.postOrder(),window.scrollTo(0,0)},methods:{postOrder:function(){var t=this,e=this.$route.params;if(null!=e.name&&null!=e.email&&null!=e.phone&&null!=e.address){var r=this.$store.state.cart.goods.map((function(t){return{id:t.id,quantity:t.quantity}})),o=JSON.stringify({name:e.name,phone:e.phone,email:e.email,address:e.address,products:r});console.log(o),fetch("https://mshop-api.herokuapp.com/api/orders",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:o}).then((function(e){console.log(e),201==e.status||200==e.status||204==e.status?t.$store.dispatch("clearCart"):(t.error=!0,t.errorInfo=e.body),t.loading=!1})).catch((function(e){t.error=!0,t.errorInfo=e,t.loading=!1}))}else this.error=!0,this.errorInfo="Дані покупця не введені",this.loading=!1}}},A=(r(10),n(M,E,[],!1,null,null,null));A.options.__file="src/views/confirmation.vue";var I=A.exports,T=function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"spinner spinner--circle",style:this.styles,attrs:{viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"}})])};T._withStripped=!0;var V={props:{size:{default:"40px"}},computed:{styles(){return{width:this.size,height:this.size}}}},j=(r(11),n(V,T,[],!1,null,"d95d914e",null));j.options.__file="node_modules/vue-loading-spinner/src/components/Circle.vue";var q=j.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",[r("router-link",{attrs:{to:"/"}},[r("div",{attrs:{id:"logo"}},[r("img",{attrs:{src:"https://img.icons8.com/cotton/64/000000/shopping.png"}}),t._v(" "),r("p",[t._v("Усе для дому")])])]),t._v(" "),r("div",{attrs:{id:"categories-container"}},t._l(t.categories,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"category",params:{id:e.id}}}},[r("div",{staticClass:"categoryblock"},[t._v(t._s(e.name))])])})),1),t._v(" "),r("div",{attrs:{id:"cart"},on:{click:t.toggleModal}},[r("div",[r("p",{attrs:{id:"counter"}},[t._v(t._s(t.counter))]),t._v(" "),r("img",{attrs:{src:"https://img.icons8.com/color/48/000000/shopping-cart.png"}})])])],1),t._v(" "),r("modal-cart"),t._v(" "),r("transition",{attrs:{name:"fade"}},[r("router-view",{key:"a"+t.$route.params.id,staticClass:"content"})],1)],1)};z._withStripped=!0;var N={computed:{counter:function(){return this.$store.state.cart.counter},categories:function(){return this.$store.state.categories}},data:function(){return{categories:[]}},methods:{toggleModal:function(){this.$store.commit("toggleModal")},getCategories:function(){var t=this;fetch("https://mshop-api.herokuapp.com/api/categories").then((function(t){return t.json()})).then((function(e){return t.categories=e}))}},created:function(){this.getCategories()}},O=(r(12),n(N,z,[],!1,null,null,null));O.options.__file="src/App.vue";var Z=O.exports;Vue.use(Vuex),Vue.use(VueRouter),Vue.component("cart-item",y),Vue.component("circle-spinner",q),Vue.component("modal-cart",k);var R=new Vuex.Store({state:{showModal:!1,cart:{counter:0,totalPrice:0,goods:[]}},plugins:[createPersistedState({storage:window.sessionStorage,paths:["cart"]})],mutations:{toggleModal:function(){this.state.showModal=!this.state.showModal},updateCart:function(t,e){this.state.cart.goods=e,R.commit("updateCartCounter")},replaceCart:function(t,e){this.state.cart=e,R.commit("updateCartCounter")},updateCartCounter:function(){var t=0,e=0;this.state.cart.goods.forEach((function(r){t+=r.quantity,e+=r.price*r.quantity})),this.state.cart.counter=t,this.state.cart.totalPrice=e}},actions:{clearCart:function(){R.commit("replaceCart",{counter:0,totalPrice:0,goods:[]})}}}),B=new VueRouter({routes:[{path:"/",component:l},{path:"/product/:id",component:m},{name:"category",path:"/category/:id",component:f},{name:"checkout",path:"/checkout",component:S},{name:"confirm",path:"/checkout/confirm",component:I}]});new Vue({el:"#app",router:B,store:R,components:{app:Z},template:"<app/>"})}]);