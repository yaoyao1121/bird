/**
 * Created by 晓霞 on 2017/8/16.
 */
$(".header-rt ul li").click(function(){
    var index=$(this).index();
    $(".header-rt ul li p").hide().eq(index).show();
}).hover(function(){
    $(this).find("ol").stop().slideDown(600, 'elasticOut');
},function(){
    $(this).find("ol").stop().slideUp(100);
})
