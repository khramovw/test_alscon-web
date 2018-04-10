'use strict';

var slickCarousel = $('.slider-vertical');

slickCarousel.slick({
    // dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 639,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    }]
});

//mouse wheel
slickCarousel.on('wheel', function (e) {

    e = e.originalEvent;

    e.preventDefault();

    if (e.deltaY < 0) {

        $(this).slick('slickPrev');
    } else {

        $(this).slick('slickNext');
    }
});

$('.over').on('wheel', function (e) {

    e = e.originalEvent;

    e.preventDefault();

    if (e.deltaY < 0) {

        $("body,html").animate({ scrollTop: $(this).offset().top }, 1000);
    } else {

        $("body,html").animate({ scrollTop: $(slickCarousel).offset().top }, 1000);
    }
});

$('.start').on('wheel', function (e) {

    e = e.originalEvent;

    console.log('start', e);

    e.preventDefault();

    if (e.deltaY < 0) {

        $('.main-slider').removeClass('active');
        $("body,html").animate({ scrollTop: $('.over').offset().top }, 1000);
    } else if (e.deltaY > 0) {

        $('.main-slider').addClass('active');
    }
});

$('.end').on('wheel', function (e) {

    e = e.originalEvent;
    console.log('end', e);

    e.preventDefault();

    if (e.deltaY < 0) {

        console.dir('slide end < 0', e.deltaY);
        $('.main-slider').addClass('active');
    } else if (e.deltaY > 0) {

        $('.main-slider').removeClass('active');
        $("body,html").animate({ scrollTop: $('.under').offset().top }, 1000);
    }
});

$('.under').on('wheel', function (e) {

    e = e.originalEvent;

    e.preventDefault();

    if (e.deltaY < 0) {

        $("body,html").animate({ scrollTop: $(slickCarousel).offset().top }, 1000);
    }
});