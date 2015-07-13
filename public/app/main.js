var Vue = require('vue');

var builder = require('./components/builder.vue');
var response = require('./components/response.vue');
var addVerbModal = require('./components/add-verb-modal.vue');

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