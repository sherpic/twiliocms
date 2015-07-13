// application builder, one per application
var builder = new Vue({
    el      : '.builder',
    data    : {
        responses: [
            {
                'uuid': UUID.generate(),
                'title' : 'response #1'
            }
        ]
    },
    methods : {
        addResponse: function () {
            if (this.isMaxResponses) {
                return false;
            }

            console.log('adding ' + (this.responses.length + 1));
            var data = {title: 'response #'+(this.responses.length+1), uuid: UUID.generate()};
            console.log(data);
            this.responses.push(data);
        },
        removeResponse: function(response) {
            this.responses.$remove(response);
        }
    },
    computed: {
        isMaxResponses: function () {
            return this.responses.length === 5;
        }
    }
});