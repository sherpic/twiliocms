<template>
    <div class="well">
        <div class="row">
            <div class="col-md-8">
                <h3>Dial</h3>
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

</template>

<script>
    module.exports = {
        methods: {
            remove: function () {
                this.removeVerb(this.$data);
            }
        }
    }
</script>