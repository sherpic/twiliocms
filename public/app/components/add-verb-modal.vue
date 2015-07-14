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
        props: ['hideAddVerbModal', 'addVerb'],
        data   : function () {
            return {
                verbTypes       : [
                    {text: 'Say', value: 'SAY'},
                    {text: 'Dial', value: 'DIAL'},
                    {text: 'Redirect', value: 'REDIRECT'}
                ],
                selectedVerbType: undefined
            }
        },
        methods: {
            add  : function () {
                console.log(this.selectedVerbType);
                this.$parent.addVerb(this.selectedVerbType);
                console.log('p 2', this.$parent.verbs.length);
                console.log('add');
            },
            close: function () {
                this.$parent.hideAddVerbModal();
                console.log('close');
            }
        },
        ready  : function () {
            console.log(this);
        }
    }
</script>