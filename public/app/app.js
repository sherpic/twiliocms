(function(builder) {
    new Vue({
        el      : 'body',
        data    : {
            salutation: ', hurray!'
        },
        children: [builder],
        methods : {
            lll: function () {
                console.log('lll');
            }
        }
    });
})(builder);