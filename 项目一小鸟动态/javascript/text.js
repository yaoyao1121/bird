/**
 * Created by 晓霞 on 2017/8/24.
 */
$("#header").load("header.html");
$("#footer").load("footer.html");
(function(){
    var pen=$(".content_wrap .title_list .pen"),
        title_list=$(".content_wrap .title_list");
    pen.click(function(){
        title_list.animate({"width":"100px",backgroundPositionX:"-1000px"},0,function(){
            title_list.animate({"width":"800px",backgroundPositionX:"0px"},1300,"easeOutStrong");
        });
        //title_list.animate({width:100,backgroundPositionX:"-1000px"},0)
    })
})();
(function(){
    var likeBtn=$(".content_wrap .article_content .like_wrap .like_show .like_btn");
    likeBtn.hover(function(){
    })
})();
console.log($(".article_content .img_wrap img").get(0) );

(function(){
    var k=window.location.hash.substring(1);
    console.log(k);
    if(k){
        var xhr=new  XMLHttpRequest();
        xhr.open("get","javascript/articleData.json");
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var list=JSON.parse(xhr.responseText);
                    $(".article_content .img_wrap img").attr("src",list[k].data.coverImg);
                    $(".content_wrap .title_big").text(list[k].data.typeTitle);
                    $(".content_wrap h2").text(list[k].data.typeEntitle);
                    $(".content_wrap .title_list>p").text(list[k].data.title);
                }
            }

        }

    }
})();