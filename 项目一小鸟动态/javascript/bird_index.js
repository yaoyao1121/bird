/**
 * Created by 晓霞 on 2017/8/23.
 */
(function(){
    setTimeout(function(){
        $(".welcome_wrap").slideUp();
    },4000)
    setTimeout(function(){
        $(".welcome_wrap .welcome").animate({top:"10%"},600,function(){
            $(".welcome_wrap .start").each(function(i){
                setTimeout(function(){
                    $(".welcome_wrap .start").eq(i).show().addClass("animated fadeInUp");
                },i*200)
            })
        })
    },2000);
    var index=0;
    $(".welcome_wrap").click(function(){
        if(index==0){
            index++;
        }else{
            $(".welcome_wrap").slideUp();
        }
    })
})();
(function(){
    var hh=$(window).height()-50,
        navLi=$(".nav_wrap ul li"),
        content=$(".content_wrap .contents"),
        len=content.find(".content").length;
        index=0,
        k=0,
        fa=1;
    $(window).resize(function(){
        hh=$(window).height()-50;
        $(".content_wrap,.content").css({height:hh});
    });
    $(".content_wrap,.content").css({height:hh});
    navLi.click(function(){
        index=$(this).index();
        if(index==4){
            index=3;
        }else if(index<5){
            animate();
        }
    }).hover(function(){
        $(this).addClass("col");
    },function(){
        $(this).removeClass("col");
    });
    function animate(){
        content.animate({top:-(index+1)*hh},function(){
          fa=1;
        });
        if(index==0){

        }else if(index==3){
            navLi.removeClass("dot").eq(index).addClass("dot").next().addClass("dot");
        }else{
            navLi.removeClass("dot").eq(index).addClass("dot");
        }
    }
    function scrollDown(){
        if(fa){
            fa=0;
            index++;
            if(index>len-1){
                index=len-1;
            }
            scroll();
            dotCom();
        }
    }
  function scrollUp(){
      if(fa){
          fa=0;
          index--;
          if(index<0){
              index=0;
          }
          scroll();
          dotCom();
      }

  }
    function scroll(){
        content.animate({top:-index*hh},function(){
            fa=1;
        });
    }
    function dotCom(){
        if(index==0){
            navLi.removeClass("dot").eq(0).addClass("dot");
        }else if(index==4){
            navLi.removeClass("dot").eq(index).addClass("dot").prev().addClass("dot");
        }else{
            navLi.removeClass("dot").eq(index-1).addClass("dot");
        }
    }
    var scrol=function(e){
        e = e || window.event; /*ie 低版本没有 e 他只有window.event*/
        if(e.wheelDelta){    /*ie和谷歌*/
            if(e.wheelDelta>0){
                //alert("向上滑动")
                scrollUp();
            }else{
                //alert("向下滑动")
                scrollDown();
            }
            /*向上的 时候是120
            * 向下的时候是-120*/
        }else{   /*火狐*/
            if(e.detail<0){
                //alert("向上滑动")
                scrollUp();
            }else{
                //alert("向下滑动")
                scrollDown();
            }
            /*向上的时候是-3
             * 向下的时候是3*/
        }
    }
    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scrol)
    }
    window.onmousewheel=document.onmousewheel=scrol;
})();
<!--欢迎界面-->
(function(){
   var doNext= $(".content_wrap .welcome .doNext"),
       content=$(".content_wrap .contents"),
       hh=$(window).height()-50;
    doNext.click(function(){
        content.animate({top:-hh});
    })
})();
<!--概述banner图-->
(function(){
    var prev=$(".content_wrap .banner .cli .prev"),
        next=$(".content_wrap .banner .cli .next"),
        index= 0,
        ul=$(".content_wrap .banner ul"),
        lis=$(".content_wrap .banner ul li"),
        wid=lis.width();
        len=lis.length;

    prev.click(function(){
        index--;
        if(index<0){
            index=0;
        }
        ul.animate({left:-index*wid},500);
    })
    next.click(function(){
        index++;
        if(index>len-1){
            index=len-1;
        }
    ul.animate({left:-index*wid},500);
    })
})();

<!--小鸟掌云-->
(function(){
    var btn=$(".content_wrap .bird_cloud .cloud_btn>div"),
        content=$(".content_wrap .bird_cloud .cloud_content"),
        wid=$(".content_wrap .bird_cloud .cloud_contents .cloud_content>div").width(),
        index=0;
    btn.click(function(){
            index=$(this).index();
            content.animate({left:-index*wid});
            $(this).find(".cloud_move").addClass("now").animate({left:0});
            if(index==0){
                $(this).siblings().find(".cloud_move").removeClass("now").animate({left:-78});
            }else{
                $(this).siblings().find(".cloud_move").removeClass("now").animate({left:78});
            }
        })
})();