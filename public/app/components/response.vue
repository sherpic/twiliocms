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
            <div class="row" v-if="verbs.length">
                <div class="col-md-12">
                    <h4>Verbs</h4>
                    <ul>
                        <li v-repeat="verb: verbs">
                            {{verb.type}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <button type="button" class="btn btn-primary pull-right" v-on="click: showAddVerbModal">Add verb</button>
        </div>
    </div>
</template>
<script>
    var addVerbModal = Vue.extend(require('./add-verb-modal.vue'));

    // response component, draws the
    module.exports = {
        props     : [
            // you can use prop assertions to ensure the
            // callback prop is indeed a function.
            {
                name    : 'remove-response',
                type    : Function,
                required: true
            }
        ],
        compiled  : function () {

        },
        data      : function () {
            return {
                addVerbModalInstance: undefined,
                verbs               : []
            }
        },
        ready     : function () {

        },
        methods   : {
            showAddVerbModal: function () {
                var self = this;

                this.addVerbModalInstance = this.$addChild({

                }, addVerbModal);

                $(this.$el).append('<div class="modalContainer"></div>');
                this.addVerbModalInstance.$mount(this.$el.querySelector('.modalContainer'));

                // remove the instance, after it would be hidden
                $('#addVerbModal').on('hidden.bs.modal', function (e) {
                    self.addVerbModalInstance.$destroy(true);
                });

                $('#addVerbModal').modal('show');
            },
            hideAddVerbModal: function () {
                $('#addVerbModal').modal('hide');
            },
            addVerb         : function (verbType) {
                this.verbs.push({type: verbType, id: (this.verbs.length + 1)});
            },
            remove          : function () {
                // triggering the parent method
                this.removeResponse(this.$data);
            }
        },
        components: {
            'title': {
                props   : ['title'],
                template: '<div v-if="!editMode">\n<span class="panel-title">{{title}}</span>\n    <a v-on="click: edit" style="cursor: pointer;">[e]</a>\n</div>\n<div v-if="editMode">\n    <input v-model="tmpTitle">\n    <a v-on="click: save">[s]</a>\n    <a v-on="click: cancel" style="cursor: pointer;">[c]</a>\n</div>\n',
                data    : function () {
                    return {
                        editMode: false,
                        tmpTitle: ''
                    };
                },
                ready   : function () {

                },
                methods : {
                    edit  : function () {
                        console.log('edit');
                        this.tmpTitle = this.title;
                        this.editMode = true;
                    },
                    save  : function () {
                        console.log('save');
                        if (!_.isEmpty(this.tmpTitle)) {
                            this.title = this.tmpTitle;
                        }
                        this.editMode = false;
                    },
                    cancel: function () {
                        this.editMode = false;
                    }
                }
            }
        }
    };
</script>