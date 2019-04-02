import $ from 'jquery';

$(document).ready(function () {
  var toggle = document.querySelector('.nav-toggle');
  var oldHeight;
  var newHeight;
  toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
      $(".header__column").toggle();
  });

  //slider
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true, //nav arrows
        dots: false,
        touchDrag: true,
        mouseDrag: false,
        loop: true //cycle
    })

    $(".owl-prev > span, .owl-next > span").empty();
  });

  //gallery

  $('.gallery__list').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      enabled: true
    },
  });
});

//sticky header
$(document).scroll(function () {
  let s_top = $(this).scrollTop();
  if(s_top > 300) {
      $(".header").addClass("header_sticky");
      $(".wrapper_header").addClass("wrapper_sticky");
      $(".header__container").addClass("header__container_sticky");
      $(".header__logo").addClass("header__logo_sticky");
  } else {
      $(".header").removeClass("header_sticky");
      $(".wrapper_header").removeClass("wrapper_sticky");
      $(".header__container").removeClass("header__container_sticky");
      $(".header__logo").removeClass("header__logo_sticky");
  }
});
