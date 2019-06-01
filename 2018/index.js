(function(DOM_Renderer, WebCell, marked) {
    var ViewList = DOM_Renderer.ViewList,
        request = WebCell.request,
        documentReady = WebCell.documentReady,
        $ = WebCell.$,
        mediaReady = WebCell.mediaReady,
        delegate = WebCell.delegate;

    //  渲染数据

    Promise.all([request('index.json'), documentReady])
        .then(function(data) {
            data = data[0].body;

            data.company = data.company.map(function(name) {
                return { name: name };
            });

            data.review.forEach(function(item, index) {
                item.index = index;
            });

            for (var key in data)
                if ('detail' in data[key][0])
                    for (var i = 0; data[key][i]; i++)
                        data[key][i].detail = marked(data[key][i].detail);

            return Promise.all(
                $('[data-view]').map(function(view) {
                    return new ViewList(view, data).render(
                        data[view.dataset.view]
                    );
                })
            );
        })
        .then(function() {
            var intersection = new IntersectionObserver(function(
                entry,
                observer
            ) {
                entry.forEach(function(item) {
                    if (!item.isIntersecting) return;

                    var data = item.target.dataset;

                    item.target.src = data.src;

                    delete data.src;

                    observer.unobserve(item.target);
                });
            });

            $('[data-src]').forEach(intersection.observe.bind(intersection));

            return mediaReady();
        })
        .then(function() {
            $('load-cover')[0].open = false;
        });

    //  导航滚动
    document.addEventListener(
        'click',
        delegate('a[href^="#"]', function(event) {
            event.preventDefault();

            $(this.getAttribute('href'))[0].scrollIntoView({
                behavior: 'smooth'
            });
        })
    );
})(self['dom-renderer'], self['web-cell'], self.marked);
