(function(DOM_Renderer, WebCell) {
    var ViewList = DOM_Renderer.ViewList,
        request = WebCell.request,
        documentReady = WebCell.documentReady,
        $ = WebCell.$,
        mediaReady = WebCell.mediaReady,
        delegate = WebCell.delegate;

    Promise.all([request('common/index.json'), documentReady])
        .then(function(list) {
            return new ViewList($('body > main')[0]).render([
                {
                    conf_list: list[0].body.map(function(item) {
                        item.passed = new Date(item.date) < new Date();

                        return item;
                    })
                }
            ]);
        })
        .then(mediaReady)
        .then(function() {
            $('load-cover')[0].open = false;
        });

    document.addEventListener(
        'click',
        delegate('footer a[href="#top"]', function(event) {
            event.preventDefault();

            document.body.scrollIntoView({ behavior: 'smooth' });
        })
    );
})(self['dom-renderer'], self['web-cell']);
