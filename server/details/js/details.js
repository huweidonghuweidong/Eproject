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
            }
        })
    }
    display(){
        var str="";
        // console.log(this.res)
        for(var i=0;i<this.res.length;i++){
            str+= `<div class="gg">
                    <a href="##">
                        <img data-src="${this.res[i].src}"/>
                        <b>${this.res[i].pirce}</b>
                        <span>${this.res[i].name}</span>
                        <a href="http://localhost:8383/index.html" class="cs">文具一号超市</a><i>满就送</i>
                        <p>${this.res[i].num}</p>
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
                    console.log(i)
                }
            }
        }
        lazyLog(aimg)
        onscroll = function(){
            lazyLog(aimg)
        }
    }
}
new Goods();

