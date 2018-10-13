(function($, WebCell, Loading) {
    var request = WebCell.request,
        documentReady = WebCell.documentReady,
        ObjectView = WebCell.ObjectView;

    //  渲染数据

    Promise.all([request("index.json"), documentReady]).then(function(data) {
        data = data[0];

        data.company = data.company.map(function(name) {
            return { name: name };
        });

        var body = new ObjectView(document.body);

        body.render(data);
    });

    self.addEventListener("load", Loading.closeAll.bind(Loading));

    //  导航滚动
    $(document).on("click", 'a[href^="#"]', function() {
        var offset = $(this.getAttribute("href")).offset();

        $(document.scrollingElement).animate({
            scrollTop: offset.top,
            scrollLeft: offset.left
        });

        return false;
    });
})(self.jQuery, self["web-cell"], self["Loading"].default);
