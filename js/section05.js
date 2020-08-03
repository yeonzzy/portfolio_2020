var appleBtn = $(".apple-about>input[type=button]");

var sec5Go = $(".sec4-arrow");
var goTopSec5 = $(".section.sec5").offset().top;
sec5Go.on("click", sec5GoFunc);
function sec5GoFunc() {
  $("html,body").animate({ scrollTop: goTopSec5 + 1 }, 1000);
  console.log(goTopSec5);
}

$(window).on("scroll", sec5_scrollFunc);
function sec5_scrollFunc() {
  clearInterval(setTimer);
  var goTopSec5 = $(".section.sec5").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec5) {
    $(".sec5-port").animate({ left: "0" }, 2000);
    $("h1.appleLogo").fadeIn(500, function () {
      $(".appleColor>ul>li").fadeIn(1000);
    });
    $("h1.appleLogo img").animate({ opacity: "1" }, 1000);
    $(".apple-about>h3").delay(1000).fadeIn(500);
    $(".apple-about>h6").delay(1500).fadeIn(500);
    $(".apple-about>span").delay(2000).fadeIn(500);
    $(".apple-about>p").delay(2500).fadeIn(500);
    appleBtn.delay(3000).fadeIn(500);
    $(".sec5-arrow").delay(3500).fadeIn(200);
  }
}

appleBtn.on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/apple/apple.html");
});
