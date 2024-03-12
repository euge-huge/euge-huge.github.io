$(document).ready(() => {

  // scroll in btn
  $(".main-offer-button").click(function() { // ID откуда кливаем
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  // header nav links scroll
  $("#about-link").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#competences-link").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".competences").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#portfolio-link").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#contacts-link").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".contacts").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  // footer nav links scroll
  $("#footer-about").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#footer-competences").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".competences").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#footer-portfolio").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });

  $("#footer-contacts").click(function(event) { // ID откуда кливаем
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(".contacts").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
  });


  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      }
    ]
  });

})