var cocaBtn = $(".coca-about>input[type=button]");

var sec4Go = $(".sec3-arrow");
var goTopSec4 = $(".section.sec4").offset().top;
sec4Go.on("click", sec4GoFunc);
function sec4GoFunc() {
  $("html,body").animate({ scrollTop: goTopSec4 + 1 }, 1000);
  console.log(goTopSec4);
}

$(window).on("scroll", sec4_scrollFunc);
function sec4_scrollFunc() {
  clearInterval(setTimer);
  var goTopSec4 = $(".section.sec4").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec4) {
    $(".sec4-port").animate({ left: "0" }, 2000);
    $("h1.cocaLogo").fadeIn(500, function () {
      $(".cocaColor>ul>li").fadeIn(1000);
    });
    $("h1.cocaLogo img").animate({ opacity: "1" }, 1000);
    $(".coca-about>h3").delay(1000).fadeIn(500);
    $(".coca-about>h6").delay(1500).fadeIn(500);
    $(".coca-about>span").delay(2000).fadeIn(500);
    $(".coca-about>p").delay(2500).fadeIn(500);
    cocaBtn.delay(3000).fadeIn(500);
    $(".sec4-arrow").delay(3500).fadeIn(200);
  }
}

cocaBtn.eq(0).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/coca-cola/open-index.html");
});
cocaBtn.eq(1).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/coca-cola/login.html");
});
cocaBtn.eq(2).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/coca-cola/join.html");
});
