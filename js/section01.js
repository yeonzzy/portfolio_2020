$(document).ready(function () {
  clearInterval(setTimer);
  $(".introTxt-1").delay(1000).fadeIn(0, function () {
      $(".introTxt-1").animate({ width: "100%" }, 3000);
      $(".introTxt-1").fadeOut(0);
      $(".introTxt-2").delay(3000).fadeIn(0, function () {
          $(".introTxt-2").animate({ width: "100%" }, 4000);
          $(".introTxt-2").fadeOut(0);
           $(".introTxt-3").delay(4000).fadeIn(0, function () {
              $(".introTxt-3>span").animate({ width: "90%" }, 4000);
              $(".openGrdient").fadeIn(2000);
              $(".introTxt-3").animate({ width: "100%" }, 4000);
            });
        });
    });
  $(".introTxt-4").delay(10000).fadeIn(1000, function () {
      aboutMe();
    });
});

function aboutMe() {
  $(".introTxt-4").animate({ top: "57%" }, 1000, function () {
    $(this).animate({ top: "57.5%" }, 1000, function () {
      aboutMe();
    });
  });
}
