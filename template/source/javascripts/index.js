var $ = require("jquery");
global.jQuery = $;

import modernizr from 'modernizr';
import slick from 'slick-carousel';

$(document).ready(function() {
  // CANVAS ASIDE LEFT
  $(".js-nav-toggler--left").click(function(e) {
    e.preventDefault;
    $(".canvas").addClass("is-shifted shift-left");
  });
  // CANVAS ASIDE RIGHT
  $(".js-nav-toggler--right").click(function(e) {
    e.preventDefault;
    $(".canvas").addClass("is-shifted shift-right");
  });
  $(".js-nav-close").click(function(e) {
    e.preventDefault;
    $(".canvas").removeClass("is-shifted shift-left shift-right");
  });

  // CAROUSEL WITH SLICK
  /*
  $(".carousel").slick({
    mobileFirst: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true
  })
  */
});
