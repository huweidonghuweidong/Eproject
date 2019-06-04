(function(){
    "use strict";
    // $(".avtive1").click(function(){
    //     $(".vip").css({display:"block"})
    // })
    // let a=document.querySelector("#login")
    // let b=document.querySelector(".vip")
    // console.log(a)
    // a.onclick=function(){
    //     b.style.display="block"
    // }
    // $("#banner .left ul").children("li").mouseover(function(){
    //     $("#banner .cai").css({display:"block"})
    // }).mouseout(function(){
    //     $("#banner .cai").css({display:"none"})
    // })

    $("#banner .left ul").children().hover(function(){
        $("#banner .cai").css({display:"block"})
    },function(){
        $("#banner .cai").css({display:"none"})
    })
    $("#banner .cai").hover(function(){
        $("#banner .cai").css({display:"block"})
    },function(){
        $("#banner .cai").css({display:"none"})
    })
    // var str="";
    // var index=0;
    
    // console.log(index)
    class Special{
        constructor(){
            this.str="";
            this.index=0;
            this.init();
        }
        init(){
            var that=this;
            that.display()
            $("#special .right .top ul").children().eq(0).click(function(){
                $(this).css({
                    background:"#d71635",
                    color:"#fff"
                }).siblings().css({
                    background:"#f5f5f5",
                    color:"#000"
                })
                that.index=0;
                
                that.display()
            })
            $("#special .right .top ul").children().eq(1).click(function(){
                $(this).css({
                    background:"#d71635",
                    color:"#fff"
                }).siblings().css({
                    background:"#f5f5f5",
                    color:"#000"
                })
                that.index=1;
                
                that.display()
            })
            $("#special .right .top ul").children().eq(2).click(function(){
                $(this).css({
                    background:"#d71635",
                    color:"#fff"
                }).siblings().css({
                    background:"#f5f5f5",
                    color:"#000"
                })
                that.index=2;
                
                that.display()
            })
        }
        display(){
            switch (this.index) {
                case 0:
                $("#special .right .top ul").children().eq(0).css({
                    background:"#d71635",
                    color:"#fff"
                })
                this.str="";
                    this.str=`<div class="l">
                                <a href="##">
                                    <img src="images/10-1.jpg"/>
                                    <h3>十元包邮A</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.60/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="c">
                                <a href="##">
                                    <img src="images/10-2.jpg"/>
                                    <h3>十元包邮B</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.00/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="r">
                                <a href="##">
                                    <img src="images/10-3.jpg"/>
                                    <h3>十元包邮C</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥26.00/套</b>
                                    </p>
                                </a>
                            </div>`
                    break;
                case 1:
                this.str="";
                    this.str=`<div class="l">
                                <a href="##">
                                    <img src="images/20-1.jpg"/>
                                    <h3>十元包邮A</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.60/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="c">
                                <a href="##">
                                    <img src="images/20-2.jpg"/>
                                    <h3>十元包邮B</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.00/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="r">
                                <a href="##">
                                    <img src="images/20-3.jpg"/>
                                    <h3>十元包邮C</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥26.00/套</b>
                                    </p>
                                </a>
                            </div>`
                    break;
                case 2:
                    this.str="";
                    this.str=`<div class="l">
                                <a href="##">
                                    <img src="images/30-1.jpg"/>
                                    <h3>十元包邮A</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.60/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="c">
                                <a href="##">
                                    <img src="images/30-2.jpg"/>
                                    <h3>十元包邮B</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥33.00/套</b>
                                    </p>
                                </a>
                            </div>
                            <div class="r">
                                <a href="##">
                                    <img src="images/30-3.jpg"/>
                                    <h3>十元包邮C</h3>
                                    <p>
                                        ￥10.00/套
                                        <b>￥26.00/套</b>
                                    </p>
                                </a>
                            </div>`
                    break;
            
                default:
                    break;
            }
            $("#special .bottom").empty();
            $("#special .bottom").append(this.str)
        }
    }
    new Special();
    class New{
        constructor(){
            this.str="";
            this.index=0;
            this.init()
        }
        init(){
            var that=this;
            this.display();
            $("#shopping .r-r-top ul").children().eq(0).click(function(){
                $(this).css({
                    background:"#666",
                    color:"#fff"
                }).parent().children().eq(1).css({
                    background:"#e0e0e0",
                    color:"#666"
                })
                that.index=0;
                that.display();
            })
            $("#shopping .r-r-top ul").children().eq(1).click(function(){
                $(this).css({
                    background:"#666",
                    color:"#fff"
                }).parent().children().eq(0).css({
                    background:"#e0e0e0",
                    color:"#666"
                })
                that.index=1;
                that.display();
            })
        }
        display(){
            switch (this.index) {
                case 0:
                $("#shopping .r-r-top ul").children().eq(0).css({
                    background:"#666",
                    color:"#fff"
                })
                this.str=`<ul>
                            <li>
                                <a href="##" class="over">积分活动调整</a>
                            </li>
                            <li>
                                <a href="##" class="over">奖励金活动上线</a>
                            </li>
                            <li>
                                <a href="##" class="over">极速达有偿配送服务开通</a>
                            </li>
                            <li>
                                <a href="##" class="over">最新邮费政策</a>
                            </li>
                            <li>
                                <a href="##" class="over">超级会员周活动</a>
                            </li>
                            <li>
                                <a href="##" class="over">发票开具规则更新</a>
                            </li>
                            <li>
                                <a href="##" class="over">办公采购，文具1号比东东更便宜！</a>
                            </li>
                        </ul>`
                    break;
                case 1:
                    this.str=`<ul>
                            <li>
                                <a href="##" class="over">芬欧蓝泰公司推出Dogbone冷冻标签</a>
                            </li>
                            <li>
                                <a href="##" class="over">全球首款获PEFC认证的数码打样纸张问世</a>
                            </li>
                            <li>
                                <a href="##" class="over">Xitron公司宣布推出网络印刷软件模块</a>
                            </li>
                            <li>
                                <a href="##" class="over">爱普生WorkForce系列新添两员虎将</a>
                            </li>
                            <li>
                                <a href="##" class="over">海德堡全张机代表之速霸XL145/162设备解读</a>
                            </li>
                            <li>
                                <a href="##" class="over">俄罗斯Sun公司即将推出专业平板式打印机</a>
                            </li>
                            <li>
                                <a href="##" class="over">InfoPrint公司即将推出Pro C900AFP打印机</a>
                            </li>
                        </ul>`
                    break;
                default:
                    break;
            }
            $("#shopping .r-r-bottom").empty();
            $("#shopping .r-r-bottom").append(this.str)
        }
    }
    new New();

    
})()