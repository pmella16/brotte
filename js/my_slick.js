$(document).on('ready', function () {

    var duration = 600;

    slideHeight = $(window).height();
    $('.slick-slider, #header-area, .photo').css('height', slideHeight);

    slideWidth = $(window).width();
    $( window ).resize(function() {
        slideWidth = $(window).width();
        slideHeight = $(window).height();

        $('.slick-slider, #header-area, .photo').css('height', slideHeight);//change of height of image

    });

    var $el = $('.js-slick');

            $el.on('init', function(slick) { // <-- Your code here was malformed
                console.log('Init');

                $(".container_info_0").animate({ "top": "0px" }, 800).promise().then(function () {
                    $('.anm_a_0').each(function (i) {
                        console.log(i);
                        $(this).delay(i * (duration / 2)).animate({ opacity: 1 }, duration);
                    });
                    });

            });
            
        var myAutoplay = false;
        var customDotClass = 'my-slick-dots';
      
        if (slideWidth > 769 ) customDotClass = 'vertical-dots';
       
        $el.slick({
        autoplay: myAutoplay,
        autoplaySpeed: 5000,
        dots: true,
        draggable: true,

        speed: 200,
        arrows: false,
        vertical: false,
        infinite: true,

        rtl: true,

        dotsClass: customDotClass,
        pauseOnHover: false,
        pauseOnFocus: true,
        //adaptiveHeight: true
        touchMove: true,
    });

    if (myAutoplay){

        $('.js-slick').on( 'touchend touchcancel touchmove', function() { $(this).slick('slickPlay'); } );
    }

    $('.js-slick').on('setPosition', function(event, slick, currentSlide){
        console.log('setPosition', [event, slick, currentSlide]);
        });

    $('.js-slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        //$(slick.$slides.get(currentSlide)).addClass('is-animating');

        console.log('afterChange', [currentSlide, nextSlide]);

        $(".anm_a_0").css({ opacity: 0 });
        $(".anm_a_1").css({ opacity: 0 });
        $(".anm_a_2").css({ opacity: 0 });
        $(".anm_a_3").css({ opacity: 0 });
        $(".anm_a_4").css({ opacity: 0 });
        $(".container_info_a").css({ left: -1000 });
        $(".container_info_0").css({ top: -1000 });



        if (currentSlide == 0) {
            console.log('currentSlide 0');
            $(".container_info_0").animate({ "top": "0px" }, 800).promise().then(function () {

                $('.anm_a_0').each(function (i) {
                    console.log(i);
                    $(this).delay(i * (duration / 2)).animate({ opacity: 1 }, duration);
                });


            });
            console.log('complete 0');
        }
        if (currentSlide == 1) {
            console.log('currentSlide 1');
            $(".container_info_1").animate({ "left": "0px" }, 800).promise().then(function () {
                $('.anm_a_1').each(function (i) {
                    console.log(i);
                    $(this).delay(i * (duration / 2)).animate({ opacity: 1 }, duration);
                });
                console.log('complete 1');
            });
        }
        if (currentSlide == 2) {
            console.log('currentSlide 2');
            $(".container_info_2").animate({ "left": "0px" }, 800).promise().then(function () {
                $('.anm_a_2').each(function (i) {
                    console.log(i);
                    $(this).delay(i * (duration / 2)).animate({ opacity: 1 }, duration);
                });
                console.log('complete 2');
            });
        }
        if (currentSlide == 3) {
            console.log('currentSlide 3');


            $(".container_info_3").animate({ "left": "0px" }, 800).promise().then(function () {
                // Called when the animation in total is complete

                $('.anm_a_3').each(function (i) {
                    console.log(i);
                    $(this).delay(i * (duration / 2)).animate({ opacity: 1 }, duration);
                });
                console.log('complete 3');
            });

        }
        if (currentSlide == 4) {
            console.log('currentSlide 4');


            $(".container_info_4").animate({ "left": "0px" }, 800).promise().then(function () {
                // Called when the animation in total is complete

                $('.anm_a_4').each(function (i) {
                       

                            console.log(i);
                            $(this).delay(i * (duration / 4)).animate({ opacity: 1 }, duration);
                        
                    
                });
                console.log('complete 4');
            });

        }

    });







});