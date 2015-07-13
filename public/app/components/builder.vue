<template>
    <button type="button"
            class="btn btn-lg btn-success"
            style="margin: 10px;"
            v-class="disabled: isMaxResponses"
            v-on="click: addResponse">
        <span class="glyphicon glyphicon-plus"></span> Add Response
    </button>

    <response v-repeat="responses" remove-response="{{removeResponse}}"></response>
</template>

<script>
    // application builder, one per application
    module.exports = {
        el      : function() {return '.builder'},
        data    : function() {
            return {
                responses: [
                    {
                        'uuid' : UUID.generate(),
                        'title': 'response #1'
                    }
                ]
            }
        }
        ,
        methods : {
            addResponse   : function () {
                if (this.isMaxResponses) {
                    return false;
                }

                console.log('adding ' + (this.responses.length + 1));
                var data = {title: 'response #' + (this.responses.length + 1), uuid: UUID.generate()};
                console.log(data);
                this.responses.push(data);
            },
            removeResponse: function (response) {
                this.responses.$remove(response);
            }
        },
        computed: {
            isMaxResponses: function () {
                return this.responses.length === 5;
            }
        }
    };
</script>