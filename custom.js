$(function () {
  // slick slider - welcome
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });

  /* TypeIt - Welcome */
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
    speed: 100, 
    autoStart: true, 
    breakLines: false, 
  });
});
