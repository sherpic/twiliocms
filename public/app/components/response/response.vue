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
            {{ verbs.length }} {{ verbs | json }}
            <div class="row" v-if="verbs.length">
                <div class="col-md-12">
                    <h4>Verbs</h4>

                    <component is="{{verb.type}}" v-repeat="verb:verbs"></component>
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
                verbs               : [],
                showModal           : false
            };
        }
        ,
        ready     : function () {
            console.log('verbs howhow');
            console.log('v', this.verbs);
            console.log('1', this.addVerb);
            //this.verbs = [];

            this.verbs.push({type: 'SAY', id: 1});
            console.log('verbs 1', this.verbs);

        },
        methods   : {
            showAddVerbModal: function () {
                console.log(this.showModal);
                this.showModal = true;
                console.log(this.showModal);
            }
        },
        components: {
            title       : require('./title.vue'),
            addVerbModal: require('./add-verb-modal.vue'),
            PLAY        : require('./verbs/play.vue'),
            SAY         : require('./verbs/say.vue'),
            DIAL        : require('./verbs/dial.vue'),
            REDIRECT    : require('./verbs/redirect.vue')
        }
    };
</script>