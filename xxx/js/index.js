$(".title").children(".bigNav").click(function(){
    $(".titlenav").show("slow");
    $(".mengban").css({"display":"block"})
})
$(".titlenav").children(".clo").click(function(){
    $(".titlenav").hide("slow");
    $(".mengban").css({"display":"none"})
   
})
$(".mengban").click(function(){
    $(".titlenav").hide("slow");
    $(".mengban").css({"display":"none"})
})


// 轮播图
setInterval(function(){
    console.log($(".wai").scrollLeft())
    console.log($(".wai").innerWidth()*2)
    if($(".wai").scrollLeft()>=($(".wai").innerWidth()*2-1)){
        $(".wai").scrollLeft(0);
    }else{
        $(".wai").scrollLeft($(".wai").scrollLeft()+$(".wai").innerWidth());
    }
    
},5000);
// 轮播图
$(".wai").mousedown(function(e){
     kaishi=e.offsetX
    console.log(kaishi)
    // $(".wai").mousemove(function(e){
        
    //     console.log(kaishi-jieshu)
    // })
})

$(".wai").mouseup(function(e){
    var jieshu=e.offsetX
    console.log(jieshu)
    if(kaishi-jieshu<0){
        $(this).scrollLeft($(".wai").scrollLeft()+$(".wai").innerWidth())
    }else{
        
    }
})














// 导航的内容
$.ajax({
    url: "http://127.0.0.1:5500/js/shuju.json",
    dataType: "json",
    success:function(res){
        console.log(res);
        $.each(res.neirong,function(index,value){
            console.log(value.name)  
                $(".navs").children("a").eq(index).append("<p>"+value.name+"</p>")    
            })
    }
})