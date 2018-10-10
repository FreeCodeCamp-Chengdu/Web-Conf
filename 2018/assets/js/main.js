~ function displayMap(){
 
    var map = new AMap.Map('map', {
        center: [104.065317,30.581311],
        zoom: 14,
        resizeEnable: false
    });

    AMap.plugin('AMap.ToolBar',function(){
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
    });

    var marker = new AMap.Marker({
        map: map,
        position: [104.065317,30.581311]
    });

    function createInfoWindow (){
        return [
            '<div style="padding:10px;">',
            '<p style="font-size:14px;margin-bottom:5px;font-weight:bold;color:#6E6EF7">2018 成都Web前端大会会场</p>',
            '<p style="font-size:12px">地址 : 天府大道北段966号天府国际金融中心4号楼1楼1号会议厅</p>',
            '</div>'
        ].join('');
    }
    var infoWindow = new AMap.InfoWindow({
        content: createInfoWindow(),
        offset: new AMap.Pixel(16, -50)
    });
    infoWindow.open(map, map.getCenter());
    AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker.getPosition());
    });
}();
