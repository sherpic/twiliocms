<template>
    <div class="panel panel-default" style="width: 450px;">
        <div class="panel-heading">
            <div class="row">
                <div class="col-md-8">
                    <title title="{{@ title}}"></title>
                </div>
                <div class="col-md-4">
                    <button type="button" class="btn btn-danger pull-right"
                            v-on="click: remove">
                    <span class="glyphicon glyphicon-remove">
                    </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <button type="button" class="btn btn-primary pull-right" v-on="click: addVerb">Add verb</button>
        </div>
    </div>
</template>
<script>
// response component, draws the
module.exports = {
    el: 'response',
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
};
</script>