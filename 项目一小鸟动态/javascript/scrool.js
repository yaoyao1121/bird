/**
 * Created by 晓霞 on 2017/8/22.
 */
(function(){
    //返回顶部效果（判断是否在顶部以隐藏显示按钮）
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".scroll_wrap").fadeIn();
        }else{
            $(".scroll_wrap").fadeOut(0);
        }
    });
    /*点击鼠标滚轮返回顶部*/
    $(".scroll_wrap .scroll-top").click(function(){
        $(this).parent().animate({bottom:3000},400,function(){
            $('.scroll_wrap').css({bottom:160});
        });
        $("body,html").animate({scrollTop:0},500);
    })
})();
