/**
 * Created by 晓霞 on 2017/8/16.
 */
(function(){
$("#header").load("header.html");
$("#footer").load("footer.html");
var index= 0,  /*banner的索引*/
    lis=$(".banner ul li")
    len=lis.length,
    prev=$(".banner .cli .prev"),
    next=$(".banner .cli .next"),
    dot= $(".banner .center .dot img"),

    prev.hover(function(){
    $(this).find("img").attr("src","images/prev_jiantou_hover.png")
    next.find("img").attr("src","images/next_jiantou.png")
}).click(function(){
    index--;
    if(index<0){
        index=len-1;
    }
   common();
})

    next.hover(function(){
    $(this).find("img").attr("src","images/next_jiantou_hover.png")
    prev.find("img").attr("src","images/prev_jiantou.png")
}).click(function(){
  right();
})
function right(){
    index++;
    if(index>len-1){
        index=0;
    }
    common();
}
 dot.click(function(){
     index=$(this).index();
     common();
 })
function common(){
    lis.fadeOut().eq(index).fadeIn(1000);
    dot.attr("src","images/next&prev_others.png").eq(index).attr("src","images/next&prev_now.png")
}
 var timer=setInterval(right,2000);
$(".banner").hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(right,2000);
})
})();
//main chanpin
(function(){
    var prev= $(".bot-rt .change_line .prev "), /*上点击按钮*/
        next=$(".bot-rt .change_line .next"), /*下点击按钮*/
        content=$(".bot-rt .content"), /*内容部分*/
        index= 0,
        k= 0,
        line=$(".main1 .main1-bot .bot-lt .line"), /*小圆点*/
        len=content.length;  /*内容的个数*/
    //主程序小圆点的切换
    function com(animate){
        /*不调用的时候，函数括号内的元素是形参
        * 只占位，不执行
        * 调用函数的时候，括号内的元素是实参
        * 就是实际参与执行的元素*/
        content.fadeOut(0).eq(index).fadeIn(400);
        /*排他，让所有的淡出，当前自己淡入*/
        line.removeClass("now").eq(index).addClass("now");
        /*小圆点排他，让所有的移除类，当前自己添加类*/
        content.eq(index).find(".lt,.rt").removeClass("animated fadeInRight fadeInLeft").addClass("animated "+animate);
        /*让当前的内容下面的左面和有面部分先移除动画效果，再添加动态效果，animate是形参，接受函数调用时传过来的参数*/
    }
    line.click(function(){
        k=index;    /*获取点击之前的索引值*/
        index=$(this).index();  /*当前的索引值*/
        if(index>k){
           com("fadeInRight"); /*实参*/
        }else{
            com("fadeInLeft");
        }
    });
    prev.click(function(){
        index--;
        if(index<0){
            index=len-1;
        }
        com("fadeInLeft");
    });
    next.click(function(){
        index++;
        if(index>len-1){
            index=0;
        }
        console.log(index);
        com("fadeInRight");
    });
})();
//yewu_wrap

(function(){
    var cli=$(".yewu-mid .yewu-content .yewu-Omemu .Omemu5"),
        img=$(".yewu-mid .yewu-content .yewu-Omemu .Omemu3"),
        that=null;

    function com(){
        that.parent().siblings().slideToggle();
        that.closest(".yewu-content").siblings().find(".yewu-Smemu").slideUp();
        that.closest(".yewu-content").siblings().find(".Omemu5").removeClass("Omemu51")
    }
    img.hover(function(){
        $(this).addClass("animated tada")
    },function(){
        $(this).removeClass("animated tada")
    }).click(function(){
       that=$(this);
       com();
       $(this).parent().find(".Omemu5").toggleClass("Omemu51");

    });
    cli.hover(function(){
        $(this).addClass("animated tada");
    },function(){
        $(this).removeClass("animated tada");
    }).click(function(){
        $(this).toggleClass("Omemu51");
        that=$(this);
        com();
    })

})();
//team_wrap start
(function(){
    var prev=$(".team-bot .cli .prev"),/*上点击按钮*/
        next=$(".team-bot .cli .next"),/*下点击按钮*/
        index= 0,  /*索引初始值*/
        ul=$(".team-bot ul"),
        lis=$(".team-bot ul li"),
        width=$(".team-bot ul li").width(),  /*获取每次要移动的宽度*/
        dot=$(".team-bot .cli .dot span"),  /*小圆点*/
        len=lis.length;   /*滑动个数*/
        prev.click(function(){
        index--;
        if(index<0){
            index=len-1;
        }
        dot.removeClass("now").eq(index).addClass("now");
        ul.prepend($(".team-bot ul>:last-child"));
        /*把最后一个孩子添加到开头*/
        ul.animate({left:-width},0,function(){
            ul.animate({left:0},1000,"backOut");
        })
    });
    function right(){
        index++;
        if(index>len-1){
            index=0;
        }
        dot.removeClass("now").eq(index).addClass("now");
        ul.stop().animate({left:-width},1000,"backIn",function(){
            ul.append($(".team-bot ul>:first-child"));
            ul.css({left:0})
        });
    };
    next.click(function(){
       right();
    });
    var timer=setInterval(right,2000);
    $(".team-bot").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(right,2000);
    })
})();
//relation_wrap start
(function(){
    var input=$(".relation_wrap .relation-mid .relation-hover>:nth-child(2)");
    input.focus(function(){
        $(this).parent().css({ border: "1px solid  #7f7d83"});
    })
    input.blur(function(){
        $(this).parent().css({ border: "1px solid  #dedfe3"});
    })
})();