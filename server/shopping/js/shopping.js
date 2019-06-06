(function(){
    "use strict";
    // class Magnify{
    //     constructor(){
    //         this.init();
    //     }
    //     init(){
    //         $(".sbig").mouseover(function(){
    //             $(".sbig span").css({display:"block"})
    //             $(".big").css({display:"block"})
    //         })
    //         $(".sbig").mouseout(function(){
    //             $(".sbig span").css({display:"none"})
    //             $(".big").css({display:"none"})
    //         })
    //         //跟随鼠标移动
    //         var that=this;
    //         $(".sbig").mousemove(function(){
    //             //移动事件
    //             that.move();
    //         })
    //     }
    //     move(){
    //         // $(".sbig span").css("left")
    //         console.log($(".sbig span").css("left"))
    //     }
    // }
    // new Magnify();
    function Magnify(){
        //2、获取元素
        this.sbox=document.querySelector(".sbig");
        this.smallImg=document.querySelector(".sbig img");
        this.bbox=document.querySelector(".big");
        this.span=document.querySelector(".sbig span");
        this.img=document.querySelector(".big img")

        this.init();
        
    }
    Magnify.prototype.init=function(){
        //绑定事件
        //3.1、进入显示
        let that=this;
        this.sbox.onmouseover=function(){
            that.span.style.display="block";
            that.bbox.style.display="block";
        }
        //3.2离开隐藏
        this.sbox.onmouseout=function(){
            that.span.style.display="none";
            that.bbox.style.display="none";
        }
        //3.3、跟随鼠标移动
        this.sbox.onmousemove=function(eve){
            var e=eve||window.event;
            that.move(e);
        }
    }
    Magnify.prototype.move=function(e){
        //跟随鼠标移动，并进行范围判断
        var l=e.pageX-this.sbox.offsetLeft-this.span.offsetWidth/2;
        var t=e.pageY-this.sbox.offsetTop-this.span.offsetHeight/2;
        if(l<0)l=0;
        if(t<0)t=0;
        if(l>(this.sbox.offsetWidth-this.span.offsetWidth)){
            l=this.sbox.offsetWidth-this.span.offsetWidth;
        }
        if(t>(this.sbox.offsetHeight-this.span.offsetHeight)){
            t=this.sbox.offsetHeight-this.span.offsetHeight;
        }
        this.span.style.left=l+"px";
        this.span.style.top=t+"px";

        //计算span距离左边和上边的比例
        var x=l/(this.sbox.offsetWidth-this.span.offsetHeight);
        if(l==this.sbox.offsetWidth-this.span.offsetWidth){
            x=1;
        }
        var y=t/(this.sbox.offsetHeight-this.span.offsetHeight);

        //在大图上根据比例进行显示
        this.img.style.left=-(this.img.offsetWidth-this.bbox.offsetWidth)*x+"px";
        this.img.style.top=-(this.img.offsetHeight-this.bbox.offsetHeight)*y+"px";
    }
    new Magnify();
})()
