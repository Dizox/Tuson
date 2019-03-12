import $ from 'jquery';

$(document).ready(function () {
    $('.js-hamburger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });
});
