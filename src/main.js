var Vue = require('vue/dist/vue.common.js');

document.querySelector('body').append(document.createElement('div'))
new Vue({
    template:'<editor v-model="content" lang="html" height="500" @init="initEditor"></editor>',
    data:{
        content:""
    },
    components:{
        editor:require('vue2-ace-editor')
    },
    methods:{
        initEditor:function (editor) {
            require('brace/mode/html');
            require('brace/theme/chrome');
        }
    }
}).$mount('div');
