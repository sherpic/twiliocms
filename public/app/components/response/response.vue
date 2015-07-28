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

                    <component is="{{type}}" v-repeat="verbs" remove-verb="{{removeVerb}}"></component>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <button type="button" class="btn btn-primary pull-right" v-on="click: showAddVerbModal">Add verb</button>
        </div>

        <component is="addVerbModal" verbs="{{verbs}}" show-modal="{{@showModal}}" v-if="showModal"></component>
    </div>
</template>
<script>
    //var addVerbModal = Vue.extend(require('./add-verb-modal.vue'));

    // response component, draws the
    module.exports = {
        props     : [
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
                verbs               : [],
                showModal           : false
            };
        }
        ,
        ready     : function () {
            this.verbs.push({type: 'SAY', id: 1});
            console.log('verbs 1', this.verbs);

        },
        methods   : {
            remove: function() {
                this.removeResponse(this.$data);
            },
            showAddVerbModal: function () {
                console.log(this.showModal);
                this.showModal = true;
                console.log(this.showModal);
            },
            removeVerb: function(verb) {
                console.log(verb);
                this.verbs.$remove(verb);
            }
        },
        components: {
            title       : require('./title.vue'),
            addVerbModal: require('./add-verb-modal.vue'),
            PLAY        : require('./verbs/play.vue'),
            SAY         : require('./verbs/say.vue'),
            DIAL        : require('./verbs/dial.vue'),
            REDIRECT    : require('./verbs/redirect.vue'),
            GATHER    : require('./verbs/gather.vue'),
            SMS    : require('./verbs/sms.vue'),
            RECORD    : require('./verbs/record.vue')
        }
    };
</script>