$(".backToTop").click(function () {
    window.scrollTo(0, 0);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("nav").addClass("scrolled");
        $(".backToTop").addClass("show");
    } else {
        $("nav").removeClass("scrolled");
        $(".backToTop").removeClass("show");
    }
    // $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
    // $(".backToTop").toggleClass("show", $(this).scrollTop() > 100);
});