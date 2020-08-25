var hyundaiBtn = $(".hyundai-about>input[type=button]");

var sec3Go = $(".sec2-arrow");
var goTopsec3 = $(".section.sec3").offset().top;
sec3Go.on("click", sec3GoFunc);
function sec3GoFunc() {
  $("html,body").animate({ scrollTop: goTopsec3 + 1 }, 1000);
  console.log(goTopsec3);
}

$(window).on("scroll", sec3_scrollFunc);
function sec3_scrollFunc() {
  clearInterval(setTimer);
  var goTopsec3 = $(".section.sec3").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopsec3) {
    $(".sec3-port").animate({ left: "0" }, 2000);
    $("h1.hyundaiLogo").fadeIn(500, function () {
      $(".hyundaiColor>ul>li").fadeIn(1000);
    });
    $("h1.hyundaiLogo>img").animate({ opacity: "1" }, 1000);
    $(".hyundai-about>h3").delay(1000).fadeIn(500);
    $(".hyundai-about>h6").delay(1500).fadeIn(500);
    $(".hyundai-about>span").delay(2000).fadeIn(500);
    $(".hyundai-about>p").delay(2500).fadeIn(500);
    hyundaiBtn.delay(3000).fadeIn(500);
    $(".sec3-arrow").delay(3500).fadeIn(200);
  }
}

hyundaiBtn.eq(0).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/index.html");
});
hyundaiBtn.eq(1).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/html/about.html");
});
hyundaiBtn.eq(2).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/html/business.html");
});
hyundaiBtn.eq(3).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/html/news.html");
});
hyundaiBtn.eq(4).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/html/career.html");
});
hyundaiBtn.eq(5).on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/hyundai-elevator/html/support.html");
});