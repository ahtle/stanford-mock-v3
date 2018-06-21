$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1000) {
        $('main').removeClass("affix");
        $('#main-spacer').addClass('no-display');
        $('#main-navigation').removeClass("transparent-bg");
        $('#main-navigation .container').removeClass("no-display");
    } else {
        $('main').addClass("affix");
        $('#main-spacer').removeClass('no-display');
        $('#main-navigation').addClass("transparent-bg");
        $('#main-navigation .container').addClass("no-display");
    }
});

$(document).ready(function() {
    setTimeout(() => {
        $('#panel-1, #panel-7').addClass('opacity');
    }, 0300);
    setTimeout(() => {
        $('#panel-2, #panel-6').addClass('opacity');
    }, 0600);
    setTimeout(() => {
        $('#panel-3, #panel-5').addClass('opacity');
    }, 900);
    setTimeout(() => {
        $('#panel-4').addClass('opacity');
    }, 1200);
});

// expand panel
$('.slide-panel').click(function() {
    const el = $(this);

    // el.addClass('full-width');
    // el.siblings().addClass('no-width');
    $('.slide-panel').addClass('no-margin one-seventh-width');
    // $('.slide-panel').addClass('no-pointer-event');
    el.siblings().addClass('no-pointer-event');
    $('.slide-panel').css('position', 'initial');

    // $('.pre-expand').addClass('no-display');
    $('.affix-nav').addClass('opacity');
    
    // $('.pre-expand h1').addClass('no-display');
    $('.pre-expand p').addClass('no-display');
    $('.pre-expand .site-title').addClass('no-display');
    
    setTimeout(function() {
        el.children('.post-expand').removeClass('no-display');
        el.children('.post-expand').addClass('opacity');
    }, 400);

    $('main').removeClass("affix");
    $('#main-spacer').addClass('no-display');

    $('.bottom-blank, .top-blank').addClass('no-height');

    $('.post-expand .text-container').addClass('opacity');
});

$('.affix-nav').click(function() {
    $(this).removeClass('opacity');
    
    $('.full-width').siblings().removeClass('no-width');
    $('.full-width').removeClass('full-width');
    $('.pre-expand .site-title').removeClass('no-display');
    $('.pre-expand p').removeClass('no-display');
    $('.post-expand').removeClass('opacity');
    $('.post-expand').addClass('no-display');

    $('.slide-panel').removeClass('no-margin one-seventh-width no-pointer-event');
    $('.bottom-blank, .top-blank').removeClass('no-height');

    $('.slide-panel').css('position', 'relative');
});