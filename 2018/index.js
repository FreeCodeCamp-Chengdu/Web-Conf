(function($, WebCell, AMap) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        ObjectView = WebCell.ObjectView;

    //  渲染数据

    Promise.all([request('index.json'), documentReady]).then(function(data) {
        data = data[0];

        data.company = data.company.map(function(name) {
            return { name: name };
        });

        var body = new ObjectView(document.body);

        body.render(data);
    });

    //  导航滚动

    $(document).on('click', 'a[href^="#"]', function() {
        var offset = $(this.getAttribute('href')).offset();

        $(document.scrollingElement).animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });

        return false;
    });

    //  加载地图

    var map = new AMap.Map('map', {
        center: [104.065317, 30.581311],
        zoom: 14,
        resizeEnable: true
    });

    AMap.plugin('AMap.ToolBar', function() {
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
    });

    var marker = new AMap.Marker({
            map: map,
            position: [104.065317, 30.581311]
        }),
        infoWindow = new AMap.InfoWindow({
            content: $('#map + .PopOver')
                .remove()
                .css('display', 'block')[0].outerHTML,
            offset: new AMap.Pixel(16, -50)
        });

    infoWindow.open(map, map.getCenter());

    AMap.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker.getPosition());
    });
})(self.jQuery, self['web-cell'], self.AMap);
