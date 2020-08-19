var vibeBtn = $(".vibe-about>input[type=button]");

var sec3Go = $(".sec2-arrow");
var goTopSec3 = $(".section.sec3").offset().top;
sec3Go.on("click", sec3GoFunc);
function sec3GoFunc() {
  $("html,body").animate({ scrollTop: goTopSec3 + 1 }, 1000);
  console.log(goTopSec3);
}

$(window).on("scroll", sec3_scrollFunc);
function sec3_scrollFunc() {
  clearInterval(setTimer);
  var goTopSec3 = $(".section.sec3").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec3) {
    $(".sec3-port").animate({ left: "0" }, 2000);
    $("h1.vibeLogo").fadeIn(500, function () {
      $(".vibeColor>ul>li").fadeIn(1000);
    });
    $("h1.vibeLogo img").animate({ opacity: "1" }, 1000);
    $(".vibe-about>h3").delay(1000).fadeIn(500);
    $(".vibe-about>h6").delay(1500).fadeIn(500);
    $(".vibe-about>span").delay(2000).fadeIn(500);
    $(".vibe-about>p").delay(2500).fadeIn(500);
    vibeBtn.delay(3000).fadeIn(500);
    $(".sec3-arrow").delay(3500).fadeIn(200);
  }
}

vibeBtn.on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/naver-vibe/index.html");
});
