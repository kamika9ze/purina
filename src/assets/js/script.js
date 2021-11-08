$(document).ready(function () {
    $('.hamburger').on('click', function (event) {
        $('.header__right').toggleClass('active');
        $('.hamburger').toggleClass('active');
        $('body').toggleClass('openMenu');
    });
    var button = $('#button-up');	
    $(window).scroll (function () {
        if ($(this).scrollTop () > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });	 
    button.on('click', function(){
        $('body, html').animate({scrollTop: 0}, 800);
        return false;
    });	
});