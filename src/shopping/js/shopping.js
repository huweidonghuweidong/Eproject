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
    
    class Goods{
        constructor(){
            this.init()
        }
        init(){
            var that=this;
            this.url="";
            //获取到cookie里的数值
            this.goods=JSON.parse(getCookie("goods"))
            // console.log(this.goods)
                // console.log(this.goods[0].num)
                this.dd=this.goods[0].id;
                switch (this.goods[0].num) {
                    case "1":
                        this.url="http://localhost:8383/json/indexF1.json";
                        break;
                    case "2":
                        this.url="http://localhost:8383/json/indexF2.json";
                        break;
                    case "3":
                        this.url="http://localhost:8383/json/indexF3.json";
                        break;
                    case "4":
                        this.url="http://localhost:8383/json/indexF4.json";
                        break;
                    case "5":
                        this.url="http://localhost:8383/json/indexF5.json";
                        break;
                    case "6":
                        this.url="http://localhost:8383/json/indexF6.json";
                        break;
                    case "7":
                        this.url="http://localhost:8383/json/indexF7.json";
                        break;
                    default:
                        this.url="http://localhost:8383/details/json/goods.json"
                        break;
                }
               
            //通过Ajax获取到商品名字和图片
            $.ajax({
                url:this.url,
                success:function(res){
                    that.res=res;
                    var str1="";
                    var str2="";
                    var str3="";
                    // console.log(that.res)
                    for(var i=0;i<that.res.length;i++){
                        if(that.res[i].id==that.dd){
                            console.log(that.res[i].src)
                            //生成页面
                            str1+=`<div class="sbig">
                                        <img src="${that.res[i].src}" class="big1"/>
                                        <span></span>
                                    </div>`
                            str2+=`<div class="big">
                                        <img src="${that.res[i].src}"/>
                                    </div>`
                            str3=  `<p>${that.res[i].name} ${that.res[i].num}</p>
                                            <div class="qian">
                                                <div class="pir">
                                                    促销
                                                    <span>${that.res[i].pirse}</span>
                                                    <i>价格：￥14.26</i>
                                                </div>
                                                <div class="express">
                                                    <p>满就送</p>
                                                    江浙沪满88包邮
                                                </div>
                                            </div>
                                            <div class="num">
                                                <div class="n-color">
                                                    <span>颜色</span>
                                                    <p>黑色</p>
                                                </div>
                                                <div class="n-num">
                                                    <span>包装</span>
                                                    <p>精装</p>
                                                </div>
                                            </div>
                                            <div class="shopp">
                                                <p class="buy">立即购买</p>
                                                <p class="call">加入购物车</p>
                                                <div class="serve">
                                                    <span>服务承诺</span>
                                                    <p>正品保障</p>
                                                    <p>增票服务</p>
                                                    <p>闪电发货</p>
                                                    <p>七天无理由退货</p>
                                                </div>
                                            </div>`
                        }
                    }
                    $(".b-l").html(str1)
                    $(".bb").html(str2)
                    $(".b-r").html(str3)
                    new Magnify();
                    //生成页面
                    // that.display();
                }
            })
           
        }
        
        
    }
    new Goods()


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
        $(".b-l").on("mouseover",".sbig",function(){
            that.span.style.display="block";
            that.bbox.style.display="block";
        })
        // this.sbox.onmouseover=function(){
            // that.span.style.display="block";
            // that.bbox.style.display="block";
        // }
        $(".b-l").on("mouseout",".sbig",function(){
            that.span.style.display="none";
            that.bbox.style.display="none";
        })
        //3.2离开隐藏
        // this.sbox.onmouseout=function(){
        //     that.span.style.display="none";
        //     that.bbox.style.display="none";
        // }
        $(".b-l").on("mousemove",".sbig",function(eve){
            var e=eve||window.event;
            that.move(e);
        })
        //3.3、跟随鼠标移动
        // this.sbox.onmousemove=function(eve){
        //     var e=eve||window.event;
        //     that.move(e);
        // }
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
    

})()
