require([
    'jquery', 'vue', 'ELEMENT', 'index'
], function ($, Vue, ElementUI, index) {

    $(document).ready(function () {

        Vue.use(ElementUI);

        new Vue({
            el: '#app',
            data: index
        });

        var map = new AMap.Map('map', {
            center: [104.062948, 30.539245],
            zoom: 11,
            resizeEnable: false
        });

        function addMarker() {
            map.clearMap();
            var marker = new AMap.Marker({
                map: map,
                position: [104.062948, 30.539245]
            });
            // marker.setLabel({
            //     offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
            //     content: "点击 - 打开高德地图进行导航"
            // });
            marker.on('click',function(e){
                marker.markOnAMAP({
                    name:'3W COFFEE',
                    position:marker.getPosition()
                })
            })
            // map.addControl(new AMap.ToolBar());
            if(AMap.UA.mobile){
                document.getElementById('button_group').style.display='none';
            }
        }

        //在指定位置打开信息窗体
        function openInfo() {
            //构建信息窗体中显示的内容
            var info = [];
            info.push("<div style=\"padding:0px 0px 0px 4px;font-size:16px;\"><b style=\"padding:0px 0px 0px 4px;font-size:18px;\">会场地址</b>");
            info.push("电话 : 18181407811 ");
            info.push("地址 : 成都市高新区天府五街200号菁蓉国际广场6栋A区 3W COFFEE  ");
            info.push("<span style=\"color: red;\">点击图标 - 打开高德地图进行导航</span></div>");
            infoWindow = new AMap.InfoWindow({
                content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
            });
            infoWindow.open(map, map.getCenter());
        }

        addMarker();
        openInfo();
    });
});