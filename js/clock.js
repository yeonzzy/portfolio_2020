//footer Clock

$(window).on("scroll", sec3_scrollFunc);
function sec3_scrollFunc() {
  clearInterval(setTimer);
  var goTofoot = $(".footer").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTofoot) {
    newClock();
  } else {
    clearInterval(setTimer);
  }
}

var setTimer = setInterval(newClock, 1000);
function newClock() {
  var pNowTime = $("p.nowTime");
  var now_h = new Date().getHours();
  var now_m = new Date().getMinutes();
  var now_s = new Date().getSeconds();
  var ampm;
  if (now_h >= 12) {
    ampm = "PM";
    now_h -= 12;
  } else {
    ampm = "AM";
  }
  if (now_s < 10) {
    now_s = "0" + now_s;
  }
  if (now_m < 10) {
    now_m = "0" + now_m;
  }
  pNowTime.text(ampm + " " + now_h + ":" + now_m + ":" + now_s);
  setTimer = setInterval(newClock, 1000);
}
