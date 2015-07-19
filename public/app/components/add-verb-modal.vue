<template>
    <div class="modal fade" id="addVerbModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <select v-model="selectedVerbType" options="verbTypes"></select>

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
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" v-on="click: close">Close</button>
                    <button type="button" class="btn btn-primary" v-on="click: add">Insert</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>

<script>
    module.exports = {
        props: ['verbs', 'addVerb', 'hideAddVerbModal'],
        data   : function () {
            return {
                verbTypes       : [
                    {text: 'Say', value: 'SAY'},
                    {text: 'Dial', value: 'DIAL'},
                    {text: 'Redirect', value: 'REDIRECT'}
                ],
                selectedVerbType: undefined
            };
        },
        methods: {
            add  : function () {
                console.log(this.selectedVerbType);
                console.log('2', this.addVerb);
                this.addVerb(this.selectedVerbType);
                this.verbs.push({type: this.selectedVerbType, id: (this.verbs.length + 1)});

                //this.$add('verbs',{type: this.selectedVerbType, id: (this.verbs.length + 1)});
                console.log('p 2', this.verbs);
                console.log('add');
            },
            close: function () {
                $('#addVerbModal').modal('hide');
                console.log('close');
            }
        },
        ready  : function () {

            var self = this;

            console.log('verbs', this.verbs);

            // remove the instance, after it would be hidden
            $('#addVerbModal').on('hidden.bs.modal', function (e) {
                self.$destroy(true);
            });

            $('#addVerbModal').modal('show');
        }
    }
</script>