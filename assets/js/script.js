$(document).ready(function () {

    var $top = $('#toTop');
    $(window).scroll(function () {
        //Method 1: Using addClass and removeClass
        //if ($(document).scrollTop() > 50) {
        //    $('.navbar-default').addClass('navbar-shrink');
        //} else {
        //    $('.navbar-default').removeClass('navbar-shrink');
        //}
        //Method 2: Using toggleClass
        $(".navbar").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
        if ($(this).scrollTop()) {
            $top.addClass('visible');
        } else {
            $top.removeClass('visible');
        }
    });


    $top.click(function () {
        $("html, body").animate({
            scrollTop: 0
        });
    });

});