require(['vue', 'ELEMENT', 'index'], function(Vue, ElementUI, index) {
    var WebCell = self['web-cell'];

    WebCell.documentReady.then(function() {
        //  主要内容 动态渲染

        Vue.use(ElementUI);

        new Vue({
            el: '#app',
            data: index,
            mounted: function() {
                WebCell.$('load-cover')[0].open = false;
            }
        });
    });
});
