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
});

//sticky header
$(document).scroll(function () {
  let s_top = $(this).scrollTop();
  if(s_top > 1) {
      $(".header__container").addClass("header__container_sticky");
      $(".header__logo").addClass("header__logo_sticky");
      $(".header__title").addClass("header__title_sticky");
  } else {
      $(".header__container").removeClass("header__container_sticky");
      $(".header__logo").removeClass("header__logo_sticky");
      $(".header__title").removeClass("header__title_sticky");
  }
});
