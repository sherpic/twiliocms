// response component, draws the
Vue.component('response', {
    template: '#response-template',
    compiled: function () {

    },
    data    : function () {
        console.log('uuid', this.uuid);
        return {}
    },
    methods : {
        addVerb: function () {

        }
    }
});

// application builder, one per application
var builder = new Vue({
    el      : '.builder',
    data    : {
        responses: []
    },
    methods : {
        addResponse: function () {
            if (this.isMaxResponses) {
                return false;
            }

            console.log('adding ' + (this.responses.length + 1));
            var data = {uuid: UUID.generate()};
            console.log(data);
            this.responses.push(data);
        }
    },
    computed: {
        isMaxResponses: function () {
            return this.responses.length === 5;
        }
    }
});

new Vue({
    el      : 'body',
    data    : {
        salutation: ', hurray!'
    },
    children: [builder]
});

