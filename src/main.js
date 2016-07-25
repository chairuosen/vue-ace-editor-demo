var Vue = require('vue');

new Vue({
    el:'body',
    replace: false,
    template:'<editor :content.sync="content" lang="html" height="500"></editor>',
    data:{
        content:""
    },
    components:{
        editor:require('vue-ace-editor')
    },
    events:{
        'vue-ace-editor:init':function () {
            require('brace/mode/html');
            require('brace/theme/chrome');
        }
    }
});
