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
