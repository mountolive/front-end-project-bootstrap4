/*=========================================
                    Services
===========================================*/

$(document).ready(function () {
    //animate on scroll
    new WOW().init();
});

/*=========================================
                    Work
===========================================*/

$(document).ready(function () {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

/*=========================================
                    Team
===========================================*/

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });
});


/*=========================================
                    Testimonials
===========================================*/

$(document).ready(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*=========================================
                    Stats
===========================================*/

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*=========================================
                    Clients
===========================================*/

$(document).ready(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});

/*=========================================
                    Navigation
===========================================*/

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });

});

$(document).ready(function () {
    $("a.scroll-smooth").on("click", function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

//close on item's click for mobile

$(document).ready(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggler").click();
    });
});
