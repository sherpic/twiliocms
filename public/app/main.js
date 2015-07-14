var Vue = require('vue');

var builder = new Vue(require('./components/builder.vue'));

var app = new Vue({
    el      : 'body',
    data    : {
        salutation: ', hurray!'
    },
    children: [builder],
    methods : {
        lll: function () {
            console.log('lll');
        }
    }
});