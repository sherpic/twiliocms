// response component, draws the
Vue.component('response', {
    template: '#response-template',
    props: [
        // you can use prop assertions to ensure the
        // callback prop is indeed a function.
        {
            name: 'remove-response',
            type: Function,
            required: true
        }
    ],
    compiled: function () {

    },
    data    : function () {
        return {
            verbs: []
        }
    },
    ready   : function () {

    },
    methods : {
        addVerb: function () {
            console.log('We are going to add the verb, beware!');
        },
        remove: function(response) {
            // triggering the parent method
            this.removeResponse(this.$data);
        }
    },
    components: {
        'title': {
            props: ['title'],
            template: '<div v-if="!editMode">\n<span class="panel-title">{{title}}</span>\n    <a v-on="click: edit" style="cursor: pointer;">[e]</a>\n</div>\n<div v-if="editMode">\n    <input v-model="tmpTitle">\n    <a v-on="click: save">[s]</a>\n</div>\n',
            data  : function() {
                return {
                    editMode: false,
                    tmpTitle: ''
                };
            },
            ready: function() {
                this.tmpTitle=this.title;
            },
            methods: {
                edit: function() {
                    console.log('edit');
                    this.editMode = true;
                },
                save: function() {
                    console.log('save');
                    if(!_.isEmpty(this.tmpTitle)) {
                        this.title = this.tmpTitle;
                    }
                    this.editMode = false;
                }
            }
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
            var data = {title: 'response #'+(this.responses.length+1), uuid: UUID.generate()};
            console.log(data);
            this.responses.push(data);
        },
        removeResponse: function(response) {
            this.responses.$remove(response);
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

