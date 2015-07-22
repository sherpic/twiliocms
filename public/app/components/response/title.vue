<template>
    <div v-if="!editMode">
        <span class="panel-title">{{title}}</span>
        <a v-on="click: edit" style="cursor: pointer;">[e]</a>
    </div>
    <div v-if="editMode">
        <input v-model="tmpTitle">
        <a v-on="click: save">[s]</a>
        <a v-on="click: cancel" style="cursor: pointer;">[c]</a>
    </div>
</template>

<script>
    module.exports = {
        props   : ['title'],
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
</script>