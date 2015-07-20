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
                    <div class="alert alert-warning alert-dismissible" role="alert" v-if="warningMessage">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on="click: warningMessage=undefined"><span aria-hidden="true">&times;</span></button>
                        <strong>Warning!</strong> {{warningMessage}}
                    </div>

                    <select v-model="selectedVerbType" options="verbTypes" class="form-control"></select>

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
                    <button type="button" class="btn btn-primary" v-class="disabled: isMaxVerbs" v-on="click: add">Insert</button>
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
        props: ['verbs','showModal'],
        data   : function () {
            return {
                verbTypes       : [
                    {text: 'Say', value: 'SAY'},
                    {text: 'Dial', value: 'DIAL'},
                    {text: 'Redirect', value: 'REDIRECT'}
                ],
                selectedVerbType: undefined,
                warningMessage: undefined
            };
        },
        watch: {
            isMaxVerbs: function(newValue, oldValue) {
                console.log(newValue, oldValue);
                this.warningMessage = 'It\'s only possible to add 5 verbs for now';
            }
        },
        methods: {
            add  : function () {
                if(this.isMaxVerbs) {
                    return;
                }

                if(!this.selectedVerbType) {
                    this.warningMessage = 'You should select the verb type';
                    return;
                }


                //this.addVerb(this.selectedVerbType);
                this.verbs.push({type: this.selectedVerbType, id: (this.verbs.length + 1)});
            },
            close: function () {
                $('#addVerbModal').modal('hide');
            }
        },
        computed: {
            isMaxVerbs: function() {
                return this.verbs.length >= 2;
            }
        },
        ready  : function () {
            var self = this;

            this.$watch('isMaxVerbs',function(newValue, oldValue){
               console.log(newValue, oldValue);
            });
            console.log(this, this.isMaxVerbs);

            // remove the instance, after it would be hidden
            $('#addVerbModal').on('hidden.bs.modal', function (e) {
                self.showModal = false;
            });

            $('#addVerbModal').modal('show');
        }
    }
</script>