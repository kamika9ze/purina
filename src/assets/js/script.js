$(document).ready(function () {
    $('.hamburger').on('click', function (event) {
        $('aside').toggleClass('active');
    });
});