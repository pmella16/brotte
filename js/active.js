// Use custom JavaScript here
(function ($) {
    "use strict";

    // Owl carousel slider
    $('.owl-carousel.owl-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Owl slider home three
    $('.owl-carousel.home-three-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 700,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.home-three-slider').on('translate.owl.carousel', function () {
        $('.slider-wide-border').removeClass('animated fadeInDown').css('opacity', '0');
        $('.slider-three-title').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-three-btn').removeClass('animated fadeInUp').css('opacity', '0');
    });

    $('.home-three-slider').on('translated.owl.carousel', function () {
        $('.slider-wide-border').addClass('animated fadeInDown').css('opacity', '1');
        $('.slider-three-title').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-three-btn').addClass('animated fadeInUp').css('opacity', '1');
    });

    // Owl carousel testimonial
    $('.owl-carousel.owl-testimonial').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Owl carousel Portfolio Home 3
    $('.owl-carousel.portfolio-three-img-wrapper').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        dots: true,
        center: true,
        autoWidth: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    // counterup call
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // home 3 about counterup call
    $('.about-three-box-big-text').counterUp({
        delay: 10,
        time: 1000
    });

    // home 3 call to action counter
    $('.call-to-action-three-number').counterUp({
        delay: 10,
        time: 1000
    });

    // magnificpopup
    $('.gallery .single-portfolio').magnificPopup({
        delegate: 'a',
        removalDelay: 300,
        type: 'image',
        mainClass: 'mfp-fade'
    });

    $('.portfolio-content .home-two-single-portfolio').magnificPopup({
        delegate: 'a',
        removalDelay: 300,
        type: 'image',
        mainClass: 'mfp-fade'
    });

    $('.single-portfolio-three').magnificPopup({
        delegate: 'a',
        removalDelay: 300,
        type: 'image',
        mainClass: 'mfp-fade'
    });

    $('.about-video-four-btn').magnificPopup({
        type: 'iframe'
    })

    // scrollUp
    $.scrollUp({
        scrollText: '<i class=" ion-ios-arrow-thin-up"></i>'
    });

    // Preload
    $(window).on('load', function () {
        $(".preloader-wrapper").fadeOut();
    });

    // scrollspy
    $('body').scrollspy({ target: '#navbar-header' });

    // scrollit
    $.scrollIt();


    // For fixed Nav
    let navbar = $("#navbar-header");

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            navbar.removeClass('fix-nav');
        } else {
            if (window.innerWidth >= 768) {
                navbar.addClass('fix-nav');
            }
        }
    });




    // Home two Owl carousel clients
    $('.owl-carousel.owl-clients').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Home 3 clients owl carousel
    $('.owl-carousel.clients-three-wrapper').owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1366: {
                items: 4
            }
        }
    });

    // Home 3 testimonial owl carousel
    $('.testimonial-three-wrapper.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: ["<img src='img/testimonial/testimonial-three-arrow-left.svg'>", "<img src='img/testimonial/testimonial-three-arrow-right.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });

    // Home responsive menu active
    $('.home-three-responsive-menu-btn').on('click', function(e) {
        e.preventDefault();
        $('.home-three-responsive-menu').toggleClass('home-three-responsive-menu-active');
    });

    $('.home-three-responsive-mene-close-btn').on('click', function(e) {
        $('.home-three-responsive-menu').removeClass('home-three-responsive-menu-active');
    });

    // Home 3 fixed Nav
    let homeThreeNavbar = $("#header-area-three");

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            homeThreeNavbar.removeClass('home-three-fix-nav');
        } else {
            if (window.innerWidth >= 768) {
                homeThreeNavbar.addClass('home-three-fix-nav');
            }
        }
    });

    // Home four search bar active
    $('.full-screen-search-bar-four-open-btn').on('click', function(e) {
        e.preventDefault();
        $('.full-screen-search-bar-four').addClass('full-screen-search-bar-four-active');
    });

    $('.full-screen-search-bar-four-close-btn').on('click', function(e) {
        $('.full-screen-search-bar-four').removeClass('full-screen-search-bar-four-active');
    });


    // Home 4 slider active
    $('.owl-carousel.slider-four-wrapper').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Home 4 Testimonial active
    $('.owl-carousel.feature-four-testimonial').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Home 4 video area carousel
    $('.owl-carousel.video-four-content-wrapper').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Home 4 clients owl carousel
    $('.owl-carousel.clients-four-content-wrapper').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Home 4 mobile menu active
    $('.mobile-menu-four-open-btn').on('click', function(e) {
        e.preventDefault();
        $('.mobile-menu-four-wrap').toggleClass('mobile-menu-four-wrap-active');
    });



    $("#contact-form").submit(function(e) {

        //prevent Default functionality
        $(".btn_email").hide();
        $(".loading_email").show();
        e.preventDefault();

        //get the action-url of the form
        var actionurl = 'enviar.php';
    
        //do your own request an handle the results

        $.post( actionurl, $('form#contact-form').serialize(), function(data) {
            // ... do something with response from server
            var jsonResponse = JSON.parse(data);
       
            if(jsonResponse.success){
                $('form#contact-form').trigger("reset");

            }else{
                alert('error', data.error);
            }

            $(".btn_email").show();
            $(".loading_email").hide();
          });



    });

    $('.first_filter').trigger( "click" );
    $('.portfolio-nav').on('click', 'li', function() {
        $('.portfolio-nav li.active').removeClass('active');
        $(this).addClass('active');
    });



    var $win = $(window);
    var $stat = $('.container_new'); // Change this to affect your desired element.
    var duration = 400;
$win.on('scroll', function () {
    var scrollTop = $win.scrollTop();

    $stat.each(function () {
        var $self = $(this);
        var prev=$self.offset();

        if ( (scrollTop - prev.top) > -300) {

            $('.title_somos, .somos_text_a, .about_btn_new, .somos_img, .somos_text_b, .service_box_container').each(function (i) {
                //$(this).delay(i * (duration / 2)).animate({ opacity: 1, 'top': '0px', 'marginTop': '10px' }, duration);
                $(this).delay(i * (duration / 2)).animate({ opacity: 1, 'top': '0px' }, duration);
            });

                } else {
              
                }

            });

        }).scroll();

})(jQuery);
