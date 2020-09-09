var footGo = $(".sec6-arrow");
var goTofoot = $(".footer").offset().top;
footGo.on("click", footGoFunc);
function footGoFunc() {
  $("html,body").animate({ scrollTop: goTofoot + 1 }, 1000);
  console.log(goTofoot);
}

$(window).on("scroll", sec3_scrollFunc);
function sec3_scrollFunc() {
  clearInterval(setTimer);
  var goTofoot = $(".footer").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTofoot) {
    $(".section.footer .inner-foot").fadeIn(1000);
  }
}

var infoLi = $(".foot-info>ul>li");
infoLi.eq(0).on("click", function () {
  window.open("https://yeonzzy.tistory.com/");
});
infoLi.eq(1).on("click", function () {
  window.open(
    "https://drive.google.com/file/d/1ye92UWUOyJKccmxykS7jaZ1vcpybezIu/view?usp=sharing"
  );
});
infoLi.eq(2).on("click", function () {
  window.open("https://github.com/yeonzzy");
});
