jQuery("document").ready(function($){

    if (window.innerWidth > 900){
        var nav = $('.nav-container');    
        $(window).scroll(function () {
            if ($(this).scrollTop() > 136) {
                nav.addClass("f-nav");
                nav.css("display","block");
            } else {
                nav.css("display","none");
                nav.removeClass("f-nav");
            }
        });
    }
});