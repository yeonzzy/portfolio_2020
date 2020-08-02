var sec6Go=$('.sec5-arrow');
            var goTopSec6=$('.section.sec6').offset().top;
            sec6Go.on('click',sec6GoFunc);
            function sec6GoFunc(){
                 $('html,body').animate({scrollTop:goTopSec6+1},1000);
                 console.log(goTopSec6);
            }