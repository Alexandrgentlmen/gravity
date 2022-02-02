// core version + navigation, pagination modules:
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);
const swiper1 = document.querySelector('.swiper-container'),
  swiper2 = document.querySelector('.swiper-loader'),
  swiper3 = document.querySelector('.testimonials-swiper'),
  swiper4 = document.querySelector('.clients-swiper');




let swiper = new Swiper(swiper1, {
  slidesPerView: 1.486,
  loop: true,
  speed: 600,
  spaceBetween: 30,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


let sliderHero = new Swiper(swiper2, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 600,
  fadeEffect: {
    crossFade: true
  },

  effect: 'fade',
});
//**  slider play btn **//

const playBtns = document.querySelectorAll('.playBtn');


sliderHero.on('transitionEnd', function () {
  let videos = document.querySelectorAll('.swiper-loader video');
  videos.forEach((el) => {
    el.pause();
    el.currentTime = 0;
  });
  playBtns.forEach((el) => {
    el.style.display = "block";
  });
});

playBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
    video.play();
    e.currentTarget.style.display = "none";
    setTimeout(() => {
      video.volume = 0.9;
    }, 1000);
  });
});
/****/


let sliderTestimonials = new Swiper(swiper3, {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  spaceBetween: 177,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let sliderClients = new Swiper(swiper4, {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  spaceBetween: 189,

});
