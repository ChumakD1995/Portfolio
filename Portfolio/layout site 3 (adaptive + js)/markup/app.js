$ (function() {
    
    let header = $("#header"); 
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let nanavTogglev = $("#navToggle");
    
    $(window).on("scroll load resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700)
    });

    nanavTogglev.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });


    let slider = $("#reviewsSlider");

    slider.slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});