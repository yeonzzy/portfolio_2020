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

  //hour가 12보다 크면 pm (13시~23시)
  //hour가 12보다 작으면 am (00시~11시)
  if (now_h > 12) {
    ampm = "PM"
    now_h -= 12;
  }else {
    ampm = "AM";
  }

  //hour가 24시이면 12시로 표시
  //hour사 0시 또는 00시면 12시로 표시
  if(now_h == 24){
    now_h -=12;
  }else if(now_h == 0 || now_h == 00){
    now_h +=12;
  }

  //minute이 10보다 작으면 (0~9) 앞에 0을 붙임
  if (now_m < 10) {
    now_m = "0" + now_m;
  }

  //second가 10보다 작으면 (0~9) 앞에 0을 붙임
  if (now_s < 10) {
    now_s = "0" + now_s;
  }

  //현재시간 출력
  pNowTime.text(ampm + " " + now_h + ":" + now_m + ":" + now_s);
  //1초마다 반복
  setTimer = setInterval(newClock, 1000);
}
