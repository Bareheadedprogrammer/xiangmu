$(".context").children("ul").children("li").hover(
    function(){
        console.log($(this))
        $(this).css({"box-shadow":" 0 0 26px 0 rgba(0,0,0,.15)","transform":" translateY(-5px)"});
},function(){
        $(this).css({"box-shadow":"0px 0px 0px","transform":" translateY(0px)"})
})