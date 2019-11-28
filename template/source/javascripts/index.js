require("@fancyapps/fancybox");
require("jquery");

import modernizr from 'modernizr';
import slick from 'slick-carousel';
import anime from 'animejs/lib/anime';
import AOS from 'aos';
import LazyLoad from "lazyload"

$(document).ready(function() {
  AOS.init({disable: 'mobile'});
  lazyload();
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
  $(".carousel").slick({
    mobileFirst: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    lazyLoad: "ondemand",
    adaptiveHeight: true
  })

  anime({
    targets: '.site-nav__logo',
    translateX: 0,
    rotate: '1turn',
    duration: 1200
  });
});
