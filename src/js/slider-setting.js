$(document).ready(function () {
    $('.slider__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000000,
        dots: true,
        arrows: false,
        variableWidth: true,
        respondTo: "slider"
    });
});
