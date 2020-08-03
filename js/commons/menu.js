var menuBtn=$('span.menu');

$(document).ready(function () {
    menuBtn.delay(10000).fadeIn(500);
});

$(window).on("scroll", TopGoscrollFunc);
function TopGoscrollFunc() {
  var goTopSec2 = $(".section.sec2").offset().top;
  var goTofoot = $(".footer").offset().top;
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop >= goTopSec2) {
    menuBtn.find('img').attr('src','img/commons/menu-g.png');
  }else if(docScrollTop == 0 || docScrollTop < goTopSec2 ){
    menuBtn.find('img').attr('src','img/commons/menu.png');
  }
}
