var appleBtn = $(".apple-about>input[type=button]");

var sec6Go = $(".sec4-arrow");
var goTopsec6 = $(".section.sec6").offset().top;
sec6Go.on("click", sec6GoFunc);
function sec6GoFunc() {
  $("html,body").animate({ scrollTop: goTopsec6 + 1 }, 1000);
  console.log(goTopsec6);
}

$(window).on("scroll", sec6_scrollFunc);
function sec6_scrollFunc() {
  clearInterval(setTimer);
  var goTopsec6 = $(".section.sec6").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopsec6) {
    $(".sec6-port").animate({ left: "0" }, 2000);
    $("h1.appleLogo").fadeIn(500, function () {
      $(".appleColor>ul>li").fadeIn(1000);
    });
    $("h1.appleLogo img").animate({ opacity: "1" }, 1000);
    $(".apple-about>h3").delay(1000).fadeIn(500);
    $(".apple-about>h6").delay(1500).fadeIn(500);
    $(".apple-about>span").delay(2000).fadeIn(500);
    $(".apple-about>p").delay(2500).fadeIn(500);
    appleBtn.delay(3000).fadeIn(500);
    $(".sec6-arrow").delay(3500).fadeIn(200);
  }
}

appleBtn.on("click", function () {
  window.open("http://yeonzzy.dothome.co.kr/apple/apple.html");
});
