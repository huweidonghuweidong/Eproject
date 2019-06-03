;(function($){
    "use strict"
    $.fn.banner2=function(options){
        var {items,index}=options;
        var index=0;
        var str="";
        var a="";
            for(var i=0;i<items.length;i++){
                str+=`<li></li>`
            }
            this.append($("<ul class='ll'></ul>").html(str))
            var that=this;
            //设置list的样式
            $(".ll").css({
                width:"100%",
                height:30,
                // background:"rgba(200,200,200,.4)",
                position:"absolute",
                left:0,
                bottom:0,
                zIndex:10,
                listStyle:"none",
                display:"flex",
                justifyContent:"center",
                margin:0,
                padding:0
            }).children().css({
                // flex:1,
                margin:10,
                width:15,
                height:15,
                borderRadius:"50%",
                background:"black"
                // textAlign:"center",
                // lineHeight:"30px",
                // borderLeft:"1px solid black",
                // borderRight:"1px solid black"
            }).eq(index).css({
                background:"red"
            })
            setInterval(() => {
                // index+=1;
                if(index==3){
                    index=0
                }else{
                    index++;
                }
                switch (index) {
                    case 0:
                        a="#4bbffc"
                        break;
                    case 1:
                        a="#d907ee"
                        break;
                    case 2:
                        a="#e60048"
                        break;
                    case 3:
                        a="#3700d7"
                        break;
                }
                items.stop().animate({
                    opacity:0
                },300)
                items.eq(index).css({
                    opacity:0
                }).stop().animate({
                    opacity:1
                },300)
                $(that).find(".ll").children("li").eq(index-1).css({background:"black"}).end().eq(index).css({background:"red"})
                setTimeout(() => {
                    items.eq(1).parent().parent().parent().css({background:a})
                }, 200);
                
            }, 5000);
            $(".ll").children("li").click(function(){
               items.stop().animate({
                    opacity:0
                },500)
                items.eq($(this).index()).css({
                    opacity:0
                }).stop().animate({
                    opacity:1
                },500)
                switch ($(this).index()) {
                    case 0:
                        a="#4bbffc"
                        break;
                    case 1:
                        a="#d907ee"
                        break;
                    case 2:
                        a="#e60048"
                        break;
                    case 3:
                        a="#3700d7"
                        break;
                }
                setTimeout(() => {
                    items.eq(1).parent().parent().parent().css({background:a})
                }, 200);
                console.log(index)
                $(that).find(".ll").children("li").eq(index).css({background:"black"}).end().eq($(this).index()).css({background:"red"})

                //时刻保持index为当前点击的index
                index=$(this).index()
            })

    }
})(jQuery);

