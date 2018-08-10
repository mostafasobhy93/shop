$(document).ready(function () {
    'use strict';
    
    // window scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('fixed-header');
            $('.body-top').fadeIn();
        } else {
            $('header').removeClass('fixed-header');
            $('.body-top').fadeOut();
        }
    });
    
    // body to top
    $('.body-top .top').click(function () {
        $('body, html').animate({scrollTop: 0}, '400');
    });
    
    // drowpDown
    var dropdown = $('.dropdown-list');
    function dropdownFun() {
        dropdown.on('click', '.list-item', function () {
            var $this = $(this);
            $this.parents('.dropdown-list').find('.selected-item .item-text').text($this.find('a').text());
        });
    }
    dropdownFun();
    
    
    //   show|hide search
    $(".srch-btn").click(function (e) {
        $(".search-form").show();
        e.stopPropagation();
    });

    $(".srch-btn").click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        if ($(window).width() < 991) {
            $(".search-form").hide();
        } else {
            $(".search-form").show();
        }
    });
    
    
    
    
    // toggle class
    $(document).on('click', '.toggle-click', function () {
        var $this = $(this);
        $this.parent().toggleClass('active');
        
        
        // slide toggle
        if ($this.parent('.accordion').length) {
            $this.parent().find('.accordion-body').slideToggle(300);
            $this.parent().siblings().removeClass('active').find('.accordion-body').slideUp(300);
        }
        
    });
    
    
    
    
    
    
    
    // sidebar
    $('header .sidebar-btn').click(function () {
        $('.sidebar').toggleClass('sidebar-active');
    });
    $('.sidebar .mobile-overlay').click(function () {
        $('.sidebar').toggleClass('sidebar-active');
    });
    
    
    // slick slider
    $('.main-slider .slider').slick({
        nextArrow: '.main-slider .slider-controllers .next',
        prevArrow: '.main-slider .slider-controllers .prev',
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    $('.offer-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });
    
    $('.product-slider').slick({
        slidesToShow: 4,
        nextArrow: '.featured-products .slider-controllers .next',
        prevArrow: '.featured-products .slider-controllers .prev',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $('.testimonials-slider').slick({
        arrows: false,
        dots: true
    });
    
    $('.wanted-slider').slick({
        nextArrow: '.most-wanted .slider-controllers .next',
        prevArrow: '.most-wanted .slider-controllers .prev',
        autoplay: true,
        autoplaySpeed: 4500
    });
    
});


















