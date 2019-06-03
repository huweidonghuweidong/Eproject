//1.1解决了，当没输入左右按钮时不自动轮播的bug
//前面加上;是为了不让html中没写;影响到这里的js程序,在下面传入jQuery是为了避免$和jQuery被人重写



;(function($){
    "use strict";//严格模式
    
    $.fn.banner=function(options){      
        var {items,left,right,list,autoPlay,delayTime,moreTime,index}=options;
        var that=this;
        //判断list和autoPlay是否绝对为false，是就为false否则为true
        list=list===true?true:false;
        autoPlay=autoPlay===true?true:false;
        //利用或的特性，当有数值时，就直接结束或返回
        delayTime=delayTime||3000;
        moreTime=moreTime||300;
        index=index||0
        // .imgbox img:nth-child(1){left:0}
        items.eq(index).css({left:0})
        let iPrev;
        if(left!=undefined && left.length>0 && right!=undefined && right.length>0){
            //  console.log(this+"有左右按钮")

            //开始写左右按钮的功能
            //计算索引
            left.click(LeftEvent)
            right.click(RightEvent)

        }
        function LeftEvent(){
            
            if(index==0){
                index=items.length-1;
                //走的图片
                iPrev=0;
            }else{
                index--;
                iPrev=index+1;
            }
            move(1)
        }
        function RightEvent(){
            if(index==items.length-1){
                index=0;
                //走的图片
                iPrev=items.length-1;
            }else{
                index++;
                iPrev=index-1;
            }
            move(-1)
        }
        function move(direct){
            items.eq(iPrev).css({
                left:0
            }).stop().animate({
                left:items.eq(0).width()*direct
            })
            items.eq(index).css({
                left:-items.eq(0).width()*direct
            }).stop().animate({
                left:0
            })
            
            //运动的时候对list进行设置，走的iPrev要消除红色，来的index要加红色
            if(list){
                $(that).find(".list").children("li").eq(iPrev).css({background:"rgba(0,0,0,.5)"}).end().eq(index).css({background:"black"})
            }
        }
        //是否自动轮播
        if(autoPlay){
            let time=setInterval(() => {
                RightEvent()
            }, delayTime);
            this.hover(function(){
                clearInterval(time)
            },function(){
                time=setInterval(() => {
                    RightEvent()
                }, delayTime);
            })
        }

        
        //根据图片数生成list
        if(list){
            var str="";
            for(var i=0;i<items.length;i++){
                str+=`<li></li>`
            }
           
            this.append($("<ul class='list'></ul>").html(str))

            //设置list的样式
            $(".list").css({
                width:"100%",
                height:30,
                // background:"rgba(200,200,200,.4)",
                position:"absolute",
                left:"50px",
                bottom:"110px",
                listStyle:"none",
                display:"flex",
                justifyContent:"center",
                margin:0,
                padding:0,
                zIndex:2
            }).children().css({
                // flex:1,
                margin:10,
                width:25,
                height:4,
                // borderRadius:"50%",
                background:"rgba(0,0,0,.5)"
                // textAlign:"center",
                // lineHeight:"30px",
                // borderLeft:"1px solid black",
                // borderRight:"1px solid black"
            }).eq(index).css({
                background:"black"
            })
            //图片运动,direct(状态),iPrev(走的),iNow(进来的)
            function move(direct,iPrev,iNow){
                    items.eq(iPrev).css({
                        left:0
                    }).stop().animate({
                        left:-items.eq(0).width()*direct
                    }).end().eq(iNow).css({ //end()表示上一层操作的,这里就表示items
                        left:items.eq(0).width()*direct
                    }).stop().animate({
                        left:0
                    })
            }
            //在list上绑定事件
            $(".list").children("li").mouseover(function(){
                //判断当前点击的序号与idnex的大小，进行图片的轮播
                if($(this).index()>index){
                    // console.log("left")
                    //进行图片的运动
                    move(1,index,$(this).index())
                }
                if($(this).index()<index){
                    // console.log("right")
                    move(-1,index,$(this).index())
                }
                // console.log(this)
                // console.log($(this).index())
                console.log(this)
                //设置当前list项
                $(that).find(".list").children("li").eq(index).css({background:"rgba(0,0,0,.5)"}).end().eq($(this).index()).css({background:"black"})
                
                //时刻保持index为当前点击的index
                index=$(this).index()
            })
        }
    }
})(jQuery);
