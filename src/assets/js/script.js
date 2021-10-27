$(document).ready(function () {
    $('.hamburger').on('click', function (event) {
        $('.header__right').toggleClass('active');
        $('.hamburger').toggleClass('active');
        $('body').toggleClass('openMenu');
    });
});