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

//商品详情
class Goods{
    constructor(){
        this.init();
        
    }
    init(){
        var that=this;
        $.ajax({
            url:"http://localhost:8383/details/json/goods.json",
            success:function(res){
                // console.log(res)
                that.res=res;
                //生成页面
                that.display();
                that.addEvent();
            }
        })
    }
    display(){
        var str="";
        // console.log(this.res)
        for(var i=0;i<this.res.length;i++){
            str+= `<div class="gg" num="8">
                    <a index="${this.res[i].id}">
                        <img data-src="${this.res[i].src}"/>
                        <b>${this.res[i].pirse}</b>
                        <span>${this.res[i].name}</span>
                        <a href="http://localhost:8383/index.html" class="cs">文具一号超市</a><i>满就送</i>
                        <p>${this.res[i].numm}</p>
                    </a>
                    </div>`
        }
        $("#goods .margin").html(str);
        var aimg = document.querySelectorAll("img");
        var clientH = document.documentElement.clientHeight;
        function lazyLog(arr){
            var scrollT = document.documentElement.scrollTop;
            
            for(var i=0;i<arr.length;i++){
                if(arr[i].src != "") continue;
    
                if(arr[i].offsetTop < clientH + scrollT){
                    arr[i].src = arr[i].getAttribute("data-src");
                    // console.log(i)
                }
            }
        }
        lazyLog(aimg)
        onscroll = function(){
            lazyLog(aimg)
        }
    }
    addEvent(){
        var that=this;
        $("#goods .margin").on("click","a",function(){
            // console.log($(this).parent().attr("num"))
            // console.log($(this).attr("num"))
            that.id=$(this).attr("index");
            that.num=$(this).parent().attr("num");
            //获取到cookie
            // that.goods=getCookie("goods")
            // console.log(that.goods)
            //清空一下cookie
            // console.log(1)
            delectCookie("goods",{path:"/"})
            //存进cookie
            that.goods=[{
                id:that.id,
                num:that.num
            }]
            setCookie("goods",JSON.stringify(that.goods),{path:"/"})
            open("http://localhost:8383/shopping/shopping.html")
        })
    }
}
new Goods();

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

