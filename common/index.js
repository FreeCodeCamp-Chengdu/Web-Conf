(function () {

    var WebCell = self['web-cell'];

    var ObjectView = WebCell.ObjectView;

    Promise.all([
        $.getJSON('common/index.json'),
        $.ready
    ]).then(function (list) {

        var body = new ObjectView( $('body > main')[0] );

        body.render({
            conf_list:  list[0].map(function (item) {

                item.passed = new Date(item.date)  <  new Date();

                return item;
            })
        });

        $('a[href]').each(function () {

            this.href = new URL(this.getAttribute('href'), location.href);
        });
    });

    $(document).on('click',  'footer a[href="#top"]',  function () {

        self.scrollTo(0, 0);

        return false;
    });
})();
