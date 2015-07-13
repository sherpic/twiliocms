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
            $('#addVerb').modal({show:true});
            $(this.$el).append('<foobar></foobar>');
            console.log(this.$el);

            $(this.el).append(this.$compile('<foobar></foobar>'));
            this.$addChild({
                template: '<h1 v-on="click: save">flll</h1>',
                methods: {
                    save: function() {
                        console.log('save');
                    }
                }
            })
        },
        addVerbSave: function() {
            console.log('save');
        },
        remove: function(response) {
            // triggering the parent method
            this.removeResponse(this.$data);
        }
    },
    components: {
        'title': {
            props: ['title'],
            template: '<div v-if="!editMode">\n<span class="panel-title">{{title}}</span>\n    <a v-on="click: edit" style="cursor: pointer;">[e]</a>\n</div>\n<div v-if="editMode">\n    <input v-model="tmpTitle">\n    <a v-on="click: save">[s]</a>\n    <a v-on="click: cancel" style="cursor: pointer;">[c]</a>\n</div>\n',
            data  : function() {
                return {
                    editMode: false,
                    tmpTitle: ''
                };
            },
            ready: function() {

            },
            methods: {
                edit: function() {
                    console.log('edit');
                    this.tmpTitle = this.title;
                    this.editMode = true;
                },
                save: function() {
                    console.log('save');
                    if(!_.isEmpty(this.tmpTitle)) {
                        this.title = this.tmpTitle;
                    }
                    this.editMode = false;
                },
                cancel: function() {
                    this.editMode = false;
                }
            }
        }
    }
});