$ (function() {
    
    let header = $("#header"); 
    let intro = $("#intro");
    let introH = 750;
    // let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();

        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });



});