require([
    'jquery', 'vue', 'ELEMENT', 'index'
],  function ($, Vue, ElementUI, index) {

    $( document ).ready(function () {

        Vue.use( ElementUI );

        new Vue({
            el:      '#app',
            data:    index
        });

        var map = new AMap.Map('map', {
                 center:          [104.062948, 30.539245],
                 zoom:            11,
                 resizeEnable:    true
            });
    });
});