//window의 높이 (화면상 보여지는 높이) 를 변수에 저장
var win_h = $(window).height();
//each 매개변수 index : .section의 인덱스값(0~5)
$(".section").each(function (index) {
  //자신에게 "data-inedx"속성 추가 그 값은 win_h*인덱스값
  //ex win_h=0 , index=0 일때 "data-index=0"
  //ex win_h=969 , index=1 일때 "data-index=969"
  $(this).attr("data-index", win_h * index);
});

//section에 마우스휠 이벤트
$(".section").on("mousewheel", function (e) {
  var E = e.originalEvent;
  delta = 0;
  //IE나 Chrome의 경우 wheelDelta값은 -120 or 120
  //firefox의 경우 detail값으로 -3 or 3을 가지기 때문에
  //따로 제어
  if (E.detail) {
    delta = E.detail * -1;
  } else {
    delta = E.wheelDelta;
  }
  //자신의 data-index 값을 정수로 가져와 저장 = secPonint
  var secPoint = parseInt($(this).attr("data-index"));
  //1.만약 wheelDelta값이 0보다 크거나 같으면 (마우스 휠 올렸을 때 : 양수)
  if (e.originalEvent.wheelDelta >= 0) {
    console.log("secPoint :" + secPoint + "," + "win_h :" + win_h);
    //스크롤은 secPoint-높이 로 이동
    //ex secPoint=969, win_h=969 일 때 0으로 이동
    $("html,body")
      .stop()
      .animate({ scrollTop: secPoint - win_h }, 1000);
    return false;
    //2. wheelDelta값이 0보다 작을 떼 (마우스 휠 내렸을 때 : 음수)
  } else if (e.originalEvent.wheelDelta < 0) {
    console.log("secPoint :" + secPoint + "," + "win_h :" + win_h);
    //스크롤은 secPoint+높이 로 이동
    //ex secPoint=0, win_h=969 일 때 969 로이동
    $("html,body")
      .stop()
      .animate({ scrollTop: secPoint + win_h }, 1000);
    return false;
  }
});
