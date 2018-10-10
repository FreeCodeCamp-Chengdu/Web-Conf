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

    function loadFeatures() {
        for (
            var feature, data, i = 0, len = features.length, j, jl, path;
            i < len;
            i++
        ) {
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
                    for (
                        j = 0, jl = data.lnglat.length, path = [];
                        j < jl;
                        j++
                    ) {
                        path.push(
                            new AMap.LngLat(
                                data.lnglat[j].lng,
                                data.lnglat[j].lat
                            )
                        );
                    }
                    feature = new AMap.Polyline({
                        map: map,
                        path: path,
                        extData: data,
                        zIndex: 2,
                        strokeWeight: data.strokeWeight,
                        strokeColor: data.strokeColor,
                        strokeOpacity: data.strokeOpacity
                    });
                    break;
                case 'Polygon':
                    for (
                        j = 0, jl = data.lnglat.length, path = [];
                        j < jl;
                        j++
                    ) {
                        path.push(
                            new AMap.LngLat(
                                data.lnglat[j].lng,
                                data.lnglat[j].lat
                            )
                        );
                    }
                    feature = new AMap.Polygon({
                        map: map,
                        path: path,
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
            if (feature) {
                AMap.event.addListener(feature, 'click', mapFeatureClick);
            }
        }
    }

    function mapFeatureClick(e) {
        if (!infoWindow) {
            infoWindow = new AMap.InfoWindow({
                autoMove: true
            });
        }
        var extData = e.target.getExtData();
        infoWindow.setContent(
            '<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>'
        );
        infoWindow.open(map, e.lnglat);
    }

    map = new AMap.Map('mapContainer', {
        center: new AMap.LngLat(center.lng, center.lat),
        level: level
    });

    loadFeatures();

    map.on('complete', function() {
        map.plugin(['AMap.ToolBar', 'AMap.OverView', 'AMap.Scale'], function() {
            map.addControl(new AMap.ToolBar());
            map.addControl(
                new AMap.OverView({
                    isOpen: true
                })
            );
            map.addControl(new AMap.Scale());
        });
    });
})();
