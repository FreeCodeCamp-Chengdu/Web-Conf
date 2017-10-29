require([
    'jquery', 'vue', 'ELEMENT', 'index'
], function ($, Vue, ElementUI, index) {

    $(document).ready(function () {

    //  主要内容 动态渲染

        Vue.use( ElementUI );

        new Vue({
            el: '#app',
            data: index
        });

    //  地图控件

        var map = new AMap.Map('map', {
            center: [104.062948, 30.539245],
            zoom: 11,
            resizeEnable: false
        });

        map.clearMap();

    //  地图点标记

        var marker = new AMap.Marker({
            map: map,
            position: [104.062948, 30.539245]
        });

        marker.on('click', function (e) {

            marker.markOnAMAP({
                name:'3W COFFEE',
                position:marker.getPosition()
            })
        })

    //  地图点标记 信息窗

        var info = new AMap.InfoWindow({
                content:    $('#Map_Info').remove().css('display', 'block')[0]
            });

        info.open(map, map.getCenter());
    });
});
