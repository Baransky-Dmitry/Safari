$(document).ready(function () {
    // Slider
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase:'linear'
    });
    // Select
    $('input, select').styler();
    // Mobile menu
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    
});