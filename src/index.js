import './scss/main.scss';

console.log(`The time is ${new Date()}`);

var goods = new Vue({
    el: "#goods",
    data: {
        categories: [
            {
                name: "Посуд",
                cells: [
                    {
                        name: "Кастрюля",
                        old_price: 150,
                        price: 125,
                        img_url: "http://placekitten.com/200/200"
                    },
                    {
                        name: "Тарілка",
                        price: 150,
                        img_url: "http://placekitten.com/200/200"
                    }
                ]
            },
            {
                name: "Техніка",
                cells: [
                    {
                        name: "Посудомийка",
                        price: 2500,
                        img_url: "http://placekitten.com/200/200"
                    },
                    {
                        name: "Чайник",
                        price: 150,
                        old_price: 200,
                        img_url: "http://placekitten.com/200/200"
                    }
                ]
            }
        ]
    }
    // options
});

// Vue.component('good-cell',
// {
//     props: ['name', 'price', 'old_price'],
//     template: '<div class="cell">'+
//                 '<img src="http://placekitten.com/300/300" alt="">'+
//                 '<p><a class=goodName href="useless.html">Кастрюля</a></p>'+
//                 '<s class=old_price>{{ol}}</s>'+
//                 '<p><span class="price">150</span><button>Купити</button></p>'+
//             '</div>'
// });