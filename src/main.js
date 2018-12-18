var Vue = require('vue/dist/vue.common.js');

document.querySelector('body').append(document.createElement('div'))
new Vue({
    template:'<div>123<editor v-model="content" lang="html" height="500" @init="initEditor"></editor></div>',
    data:{
        content:""
    },
    components:{
        editor:function () {
            return new Promise(function (resolve) {
                require(['vue2-ace-editor'],resolve);
            })
        }
    },
    methods:{
        initEditor:function (editor) {
            require('brace/mode/html');
            require('brace/theme/chrome');
        }
    }
}).$mount('div');
