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
            title_list.animate({"width":"1100px",backgroundPositionX:"0px"},1300,"easeOutStrong");
         });
    })
})();
(function(){
    var index=0;
    $(".content_wrap .list_more").click(function(){
        index++;
        if(index<3){
            ajax();
        }
    });
    ajax();
    function ajax(){
        var xhr=new XMLHttpRequest();
        xhr.open("get","javascript/listData.json");
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    var list=JSON.parse(xhr.responseText);
                    if(index==0){
                        $(".list_content").html("");
                    }
                    var data=list[index].data.list;
                    for(var i=0;i<data.length;i++){
                        var item=$("#item").html().replace("$title$",data[i].title)
                            .replace("$img$",data[i].coverImg)
                            .replace("$id$",data[i].sysId);
                        $(".list_content").append(item);
                    }
                }
            }
        }
    }
    $(".list_content").delegate(".content","click",function(){
        window.open("text.html#xiaoniaoNews"+$(this).attr("sysId"));
    })
})();