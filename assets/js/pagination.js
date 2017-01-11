// INFINITE SCROLL PAGINATION
$(function () {
    var blogUrl;
    var page;
    var matches = window.location.href.match(/(.*)\/page\/(\d+)\/$/);
    if (matches) {
        blogUrl = matches[1];
        page = parseInt(matches[2], 10);
    } else {
        blogUrl = window.location.origin;
        page = 1;
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            if (page >= totalPages) {
                return;
            }
            ++page;
            $.get(
                blogUrl + '/page/' + page,
                function (data) {
                    var response = $('<html />').html(data);
                    var thisDiv = $('main.content > div.container > div.row > div');
                    var thoseDivs = $(response).find('main.content > div.container > div.row > div > article.post');
                    thisDiv.append(thoseDivs);
                    page = page + 1;
                }
            );
        }
    });
});
