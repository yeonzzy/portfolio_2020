var cocaBtn = $(".coca-about>input[type=button]");

var sec5Go = $(".sec3-arrow");
var goTopsec5 = $(".section.sec5").offset().top;
sec5Go.on("click", sec5GoFunc);
function sec5GoFunc() {
  $("html,body").animate({ scrollTop: goTopsec5 + 1 }, 1000);
  console.log(goTopsec5);
}

$(window).on("scroll", sec5_scrollFunc);
function sec5_scrollFunc() {
  clearInterval(setTimer);
  var goTopsec5 = $(".section.sec5").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopsec5) {
    $(".sec5-port").animate({ left: "0" }, 2000);
    $("h1.cocaLogo").fadeIn(500, function () {
      $(".cocaColor>ul>li").fadeIn(1000);
    });
    $("h1.cocaLogo img").animate({ opacity: "1" }, 1000);
    $(".coca-about>h3").delay(1000).fadeIn(500);
    $(".coca-about>h6").delay(1500).fadeIn(500);
    $(".coca-about>span").delay(2000).fadeIn(500);
    $(".coca-about>p").delay(2500).fadeIn(500);
    cocaBtn.delay(3000).fadeIn(500);
    $(".sec5-arrow").delay(3500).fadeIn(200);
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
