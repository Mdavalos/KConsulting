$(function () {
    $("#faq dd").hide();
    $("#faq dt").click(function (event) {
        event.preventDefault();
        $(this).next("dd").toggle();
    });
});