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

  // review - slick
  $(".review-slider, .mockup-slider").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  /* TypeIt - Welcome */
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
    speed: 100,
    autoStart: true,
    breakLines: false,
  });

  // Wow scroll Reveal Animation
  wow = new WOW({
    boxClass: "wow",
    offset: 150,
    mobile: false,
  });
  wow.init();
});

// Header Scroll Change
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .btn-top").addClass("active");
    } else {
      $("header, .btn-top").removeClass("active");
    }
  });
});

// faq accordian
$(function () {
  // 첫번째 desc 는 보여지게 하기
  $(".faq-desc").eq(0).show();
  // 슬라이드 다운 업 기능
  $(".faq-title").click(function () {
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children(".faq-desc").stop().slideUp();
    // 클릭 슬라이드 css 주기
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  });

  // video modal
  $(".open-modal").click(function () {
    $(".video-modal").fadeIn();
    $("body").addClass("active");
  });
  $(".close-modal").click(function () {
    $(".video-modal").fadeOut();
    $("body").removeClass("active");
  });

  // Header Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $(".gnb a, section").click(function () {
    $(".gnb, .trigger").removeClass("active");
  });
});
