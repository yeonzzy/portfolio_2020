var goTopSec2 = $(".section.sec2").offset().top;
var sec2Go = $(".introTxt-4>p");
sec2Go.on("click", sec2GoFunc);
function sec2GoFunc() {
  $("html,body").animate({ scrollTop: goTopSec2 + 1 }, 1000);
  console.log(goTopSec2);
}

$(window).on("scroll", sec2_scrollFunc);
function sec2_scrollFunc() {
  clearInterval(setTimer);
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec2) {
    $(".inner-txt>h1").fadeIn(1000, function () {
      $(".inner-txt").css({ borderBottom: "1px solid #eee" });
    });
    $(".inner-txt>span").delay(200).fadeIn(1000);

    $(".graph-txt").delay(500).fadeIn(1000);
    $(".graph-shape>ul>li").delay(500).fadeIn(1000);
    $(".markup.html").delay(1000).animate({ width: "90%" }, 1000);
    $(".markup.css").delay(1200).animate({ width: "95%" }, 1000);
    $(".coding.jquery").delay(1400).animate({ width: "80%" }, 1000);
    $(".coding.jScript").delay(1600).animate({ width: "50%" }, 1000);
    $(".design.pho").delay(1800).animate({ width: "95%" }, 1000);
    $(".design.ill").delay(2000).animate({ width: "80%" }, 1000);
    $(".sec2-arrow").delay(2500).fadeIn(200);

    $(".selfie").delay(2500).fadeIn(2000);
    $(".heartBack").delay(3000).fadeIn();
  }
}
