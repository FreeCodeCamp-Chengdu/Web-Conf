(function($, WebCell, marked, Loading) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        mediaReady = WebCell.mediaReady,
        ObjectView = WebCell.ObjectView;

    //  渲染数据

    Promise.all([request('index.json'), documentReady])
        .then(function(data) {
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

            var intersection = new IntersectionObserver(function(
                entry,
                observer
            ) {
                $.each(entry, function() {
                    if (!this.isIntersecting) return;

                    var data = this.target.dataset;

                    this.target.src = data.src;

                    delete data.src;

                    observer.unobserve(this.target);
                });
            });

            $('[data-src]').each(function() {
                intersection.observe(this);
            });

            return mediaReady();
        })
        .then(Loading.closeAll.bind(Loading));

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
