/**
 * Created by 晓霞 on 2017/8/23.
 */
(function(){
    $(".footer_wrap .music span").click(function(){
        var index=$(this).index();
        if(navigator.userAgent.indexOf("Chrome")>-1){
            $(this).append('<embed autoplay="true" class="mus" hidden="true" loop="false" src="music/sound0'+index+'.mp3"/>');
        }else if(navigator.userAgent.indexOf("Firefox")>-1){
            $(this).append('<object width="0" class="mus" height="0" data="music/sound0'+index+'.mp3" type="">'+
                        '<param name="src" value="music/sound0'+index+'.mp3"/>'+
                        '<param name="autoplay" value="1"/>'+
                        '</object>')
        }else{
            $(this).append('<bgsound autoplay="true" class="mus" hidden="true" loop="false" src="music/sound0'+index+'.mp3"></bgsound>');
        }
        setTimeout(function(){
            $(".mus").eq(0).remove();
        },3000)
    })
})();
