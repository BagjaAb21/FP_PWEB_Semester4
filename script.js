$(".backToTop").click(function () {
    window.scrollTo(0, 0);
});

const contents = $("#content .content");

$(window).scroll(function () {
    // show navbar & btntotop on scroll
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});