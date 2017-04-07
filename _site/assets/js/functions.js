$(function() {
    smoothScroll(800);
    slider();
    workLoad();
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


function workLoad() {

    $.ajaxSetup({cache: true});

    $('.sprzet-unit').click(function() {
        var
        newID = this.id,
        spinner = '<div class="spinner"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div></div>',
        newHtml = "./sprzet/" + newID +".html";
    $('.sprzet-load').html(spinner).load(newHtml);

    });
}
