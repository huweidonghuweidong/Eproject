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
    $("#login .active1").hover(function(){
        $(".vip").css({display:"block"})
    },function(){
        $(".vip").css({display:"none"})
    })
    $(".vip").hover(function(){
        $(".vip").css({display:"block"})
    },function(){
        $(".vip").css({display:"none"})
    })
    
    
    $("#login .active2").hover(function(){
        $(".my").css({display:"block"})
    },function(){
        $(".my").css({display:"none"})
    })
    $(".my").hover(function(){
        $(".my").css({display:"block"})
    },function(){
        $(".my").css({display:"none"})
    })
    
    
    $("#login .active3").hover(function(){
        $(".dis").css({display:"block"})
    },function(){
        $(".dis").css({display:"none"})
    })
    $(".dis").hover(function(){
        $(".dis").css({display:"block"})
    },function(){
        $(".dis").css({display:"none"})
    })
    
    
    $("#login .active4").hover(function(){
        $(".nav").css({display:"block"})
    },function(){
        $(".nav").css({display:"none"})
    })
    $(".nav").hover(function(){
        $(".nav").css({display:"block"})
    },function(){
        $(".nav").css({display:"none"})
    })


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
                // switch (this.goods[0].num) {
                //     case "1":
                //         this.url="http://localhost:8383/json/indexF1.json";
                //         break;
                //     case "2":
                //         this.url="http://localhost:8383/json/indexF2.json";
                //         break;
                //     case "3":
                //         this.url="http://localhost:8383/json/indexF3.json";
                //         break;
                //     case "4":
                //         this.url="http://localhost:8383/json/indexF4.json";
                //         break;
                //     case "5":
                //         this.url="http://localhost:8383/json/indexF5.json";
                //         break;
                //     case "6":
                //         this.url="http://localhost:8383/json/indexF6.json";
                //         break;
                //     case "7":
                //         this.url="http://localhost:8383/json/indexF7.json";
                //         break;
                //     default:
                //         this.url="http://localhost:8383/details/json/goods.json"
                //         break;
                // }
                this.url="http://localhost:8383/details/json/goods.json"
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
            this.addEvent()
        }
        addEvent(){
            var that=this;
           
            $(".b-r").on("click",".call",function(){
                alert("添加成功")
                //设置cookie
                that.call=getCookie("call")
                if(that.call){
                    that.call=JSON.parse(that.call)
                    // console.log(that.call)
                    var onoff=true;
                    for(var i=0;i<that.call.length;i++){
                        if(that.call[i].id==that.dd){
                            onoff=false;
                            that.call[i].number++;
                        }
                    }
                    console.log(onoff)
                    if(onoff){
                        that.call.push({
                            id:that.dd,
                            num:that.goods[0].num,
                            number:1
                        })
                    }
                }else{
                    that.call=[{
                        id:that.dd,
                        num:that.goods[0].num,
                        number:1
                    }]
                }
                setCookie("call",JSON.stringify(that.call),{path:"/"})
            })
        }
        
    }
    new Goods()
    class Index{
        constructor(){
            this.init();
        }
        init(){
            //获取到localStorage的所有信息，并转换
            this.juser=localStorage.getItem("juser")?JSON.parse(localStorage.getItem("juser")):[];
            //检查onoff的值
            for(var i=0;i<this.juser.length;i++){
                if(this.juser[i].onoff==1){
                    // ////console.log( $("#dl"))
                    // $("#dl").remove();
                    // $("#zx").append(`<a id="dl">${this.juser[i].user}</a>`);
                    $("#dl").text(this.juser[i].user);
                    $("#dl").attr('href','##');
                    $("#logout").css({display:"inline-block"})
                    $("#zc").css({display:"none"})
                    // ////console.log($("#dl").html(this.juser[i].user))
                    this.addLogout();

                }
            }
        }
        addLogout(){
            var that=this;
            $("#logout").click(function(){
                //找到具体的账号
                ////console.log(typeof($("#dl").text()))
                for(var i=0;i<that.juser.length;i++){
                    if( $("#dl").text()==that.juser[i].user){
                        that.juser[i].onoff=0;
                        //修改完一定要改回去
                        localStorage.setItem("juser",JSON.stringify(that.juser))
                        $("#dl").text("登录");
                        $("#logout").css({display:"none"})
                        $("#zc").css({display:"inline-block"})
                    }   
                }
            })
        }
    }
    new Index();

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
