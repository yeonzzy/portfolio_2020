var menuBtn=$('span.menu');
var topGoBtn = $("span.topGo");
var menuLi=$('.inner-menuBox>ul>li');

var docScrollTop = $(document).scrollTop();
var goTopSec2 = $(".section.sec2").offset().top;
var goTopSec3 = $(".section.sec3").offset().top;
var goTopSec4 = $(".section.sec4").offset().top;
var goTopSec5 = $(".section.sec5").offset().top;
var goTofoot = $(".footer").offset().top;

$(document).ready(function () {
    menuBtn.delay(10000).fadeIn(500);
});

//sec2~sec5 메뉴색상 다르게 적용
$(window).on("scroll", TopGoscrollFunc);
function TopGoscrollFunc() {
  var docScrollTop = $(document).scrollTop();
  var goTopSec2 = $(".section.sec2").offset().top;
  var goTofoot = $(".footer").offset().top;
  if (docScrollTop > goTopSec2 && docScrollTop < goTofoot) {
    menuBtn.find('img').attr('src','img/commons/menu-g.png');
  }else{
    menuBtn.find('img').attr('src','img/commons/menu.png');
  }
}

//menuBtn 클릭시
//menuBtn, goTopBtn 없애고, menuBox 나타내기
menuBtn.on('click',function(){
  $(this).fadeOut(function(){
    $('.menuBox').animate({right:'0'},500);
    topGoBtn.css({opacity:'0'});
  });
})

//menuBox CloseBtn 클릭시
//menuBtn, goTopBtn 나타내고 menuBox 사라지기
$('span.menuClose').on('click', function(){
  $('.menuBox').animate({right:'-100%'},1000,function(){
    menuBtn.fadeIn();
    topGoBtn.css({opacity:'1'});
  });
});

//menuLi 클릭 시 해당 section으로 이동
menuLi.eq(0).on('click',function(){
  $("html,body").animate({ scrollTop:0}, 1000);
});
menuLi.eq(1).on('click',function(){
  $("html,body").animate({ scrollTop:goTopSec2+1}, 1000);
});
menuLi.eq(2).on('click',function(){
  $("html,body").animate({ scrollTop:goTopSec3+1}, 1000);
});
menuLi.eq(3).on('click',function(){
  $("html,body").animate({ scrollTop:goTopSec4+1}, 1000);
});
menuLi.eq(4).on('click',function(){
  $("html,body").animate({ scrollTop:goTopSec5+1}, 1000);
});
menuLi.eq(5).on('click',function(){
  $("html,body").animate({ scrollTop:goTofoot+1}, 1000);
});