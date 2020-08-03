//topGoBtn 클릭시
var topGoBtn = $("span.topGo");
topGoBtn.on("click", TopGoFunc);
function TopGoFunc() {
  $("html,body").animate({ scrollTop: 0 }, 1000);
}

//scroll의 위치가 sec2의 top값보다 크면
//topGoBtn 활성화
$(window).on("scroll", TopGoscrollFunc);
function TopGoscrollFunc() {
  var goTopSec2 = $(".section.sec2").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec2) {
    topGoBtn.fadeIn(500);
  }else if(docScrollTop == 0 || docScrollTop < goTopSec2){
    topGoBtn.fadeOut(500);
  }
}
