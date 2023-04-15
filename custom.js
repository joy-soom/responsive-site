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
  $(".review-slider").slick({
    infinite: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  /* TypeIt - Welcome */
  $("#typing").typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
    speed: 100,
    autoStart: true,
    breakLines: false,
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
});
