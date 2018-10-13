(function($, WebCell, marked, Loading) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        ObjectView = WebCell.ObjectView;

    //  渲染数据

    Promise.all([request('index.json'), documentReady]).then(function(data) {
        data = data[0];

        data.company = data.company.map(function(name) {
            return { name: name };
        });

        for (var key in data)
            if ('detail' in data[key][0])
                for (var i = 0; data[key][i]; i++)
                    data[key][i].detail = marked(data[key][i].detail);

        var body = new ObjectView(document.body);

        body.render(data);
    });

    self.addEventListener('load', Loading.closeAll.bind(Loading));

    //  导航滚动
    $(document).on('click', 'a[href^="#"]', function() {
        var offset = $(this.getAttribute('href')).offset();

        $(document.scrollingElement).animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });

        return false;
    });
})(self.jQuery, self['web-cell'], self.marked, self['Loading'].default);
