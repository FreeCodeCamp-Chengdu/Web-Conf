(function() {
    var parameter = new URLSearchParams(location.search);

    var title = (document.title = parameter.get('title')),
        detail = parameter.get('detail'),
        lnglat = (parameter.get('lnglat') || '').split(',');

    var infoWindow,
        map,
        level = 14,
        center = {
            lng: lnglat[0],
            lat: lnglat[1]
        },
        features = [
            {
                type: 'Marker',
                name: title,
                desc: detail,
                color: 'red',
                icon: 'cir',
                offset: { x: -9, y: -31 },
                lnglat: { lng: lnglat[0], lat: lnglat[1] }
            }
        ];

    function areaOf(lnglat) {
        return lnglat.map(function(item) {
            return new AMap.LngLat(item.lng, item.lat);
        });
    }

    function load(features) {
        for (var feature, data, i = 0; features[i]; i++) {
            data = features[i];

            switch (data.type) {
                case 'Marker':
                    feature = new AMap.Marker({
                        map: map,
                        position: new AMap.LngLat(
                            data.lnglat.lng,
                            data.lnglat.lat
                        ),
                        zIndex: 3,
                        extData: data,
                        offset: new AMap.Pixel(data.offset.x, data.offset.y),
                        title: data.name,
                        content:
                            '<div class="icon icon-' +
                            data.icon +
                            ' icon-' +
                            data.icon +
                            '-' +
                            data.color +
                            '"></div>'
                    });
                    break;
                case 'Polyline':
                    feature = new AMap.Polyline({
                        map: map,
                        path: areaOf(data.lnglat),
                        extData: data,
                        zIndex: 2,
                        strokeWeight: data.strokeWeight,
                        strokeColor: data.strokeColor,
                        strokeOpacity: data.strokeOpacity
                    });
                    break;
                case 'Polygon':
                    feature = new AMap.Polygon({
                        map: map,
                        path: areaOf(data.lnglat),
                        extData: data,
                        zIndex: 1,
                        strokeWeight: data.strokeWeight,
                        strokeColor: data.strokeColor,
                        strokeOpacity: data.strokeOpacity,
                        fillColor: data.fillColor,
                        fillOpacity: data.fillOpacity
                    });
                    break;
                default:
                    feature = null;
            }

            if (feature)
                AMap.event.addListener(feature, 'click', mapFeatureClick);
        }
    }

    function mapFeatureClick(e) {
        infoWindow = infoWindow || new AMap.InfoWindow({ autoMove: true });

        var extData = e.target.getExtData();

        infoWindow.setContent(
            '<h3>' + extData.name + '</h3><div>' + extData.desc + '</div>'
        );

        infoWindow.open(map, e.lnglat);
    }

    map = new AMap.Map('mapContainer', {
        center: new AMap.LngLat(center.lng, center.lat),
        level: level,
        resizeEnable: true,
        zoomEnable: false
    });

    load(features);

    map.on('complete', function() {
        map.plugin(['AMap.ToolBar', 'AMap.OverView', 'AMap.Scale'], function() {
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.OverView({ isOpen: true }));

            map.addControl(new AMap.Scale());
        });
    });
})();
