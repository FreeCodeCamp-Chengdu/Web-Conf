require(["jquery", "vue", "ELEMENT", "index"], function(
    $,
    Vue,
    ElementUI,
    index
) {
    $(document).ready(function() {
        //  主要内容 动态渲染

        Vue.use(ElementUI);

        new Vue({
            el: "#app",
            data: index
        });
    });
});
