$(function() {
    smoothScroll(800);
    slider();
});

function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function slider() {

    $('.sprzet-unit').click(function() {
        $('.sprzet-slider').css('left','-100%');
        $('.info-container').show();
    });

    $('#back').click(function() {
        $('.sprzet-slider').css('left','0%');
        $('.info-container').hide(800);
    });

}

var mn = $('nav.kicker');

$(window).scroll(function() {
    if( $(this).scrollTop() > 450 ) {
        mn.addClass("nav-scrolled");
    } else {
        mn.removeClass("nav-scrolled");
    }
});
