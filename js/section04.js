var vibeBtn = $(".vibe-about>input[type=button]");

var sec4Go = $(".sec3-arrow");
var goTopsec4 = $(".section.sec4").offset().top;
sec4Go.on("click", sec4GoFunc);
function sec4GoFunc() {
  $("html,body").animate({ scrollTop: goTopsec4 + 1 }, 1000);
  console.log(goTopsec4);
}

$(window).on("scroll", sec4_scrollFunc);
function sec4_scrollFunc() {
  clearInterval(setTimer);
  var goTopsec4 = $(".section.sec4").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopsec4) {
    $(".sec4-port").animate({ left: "0" }, 2000);
    $("h1.vibeLogo").fadeIn(500, function () {
      $(".vibeColor>ul>li").fadeIn(1000);
    });
    $("h1.vibeLogo img").animate({ opacity: "1" }, 1000);
    $(".vibe-about>h3").delay(1000).fadeIn(500);
    $(".vibe-about>h6").delay(1500).fadeIn(500);
    $(".vibe-about>span").delay(2000).fadeIn(500);
    $(".vibe-about>p").delay(2500).fadeIn(500);
    vibeBtn.delay(3000).fadeIn(500);
    $(".sec4-arrow").delay(3500).fadeIn(200);
  }
}

vibeBtn.on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/naver-vibe/index.html");
});
