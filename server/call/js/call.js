(function(){
    "use strict";
    class Car{
        constructor(num){
            this.num=num;
            this.t=document.querySelector(".shopp")
            this.arr=[];
            this.init();
            this.addEvent();
        }
        init(){
            var that=this;
            this.url="";
            this.call=JSON.parse(getCookie("call"));
            
            this.url="http://localhost:8383/details/json/goods.json"
            $.ajax({
                url:this.url,
                success:function(res){
                    // console.log(res)
                    that.res=res;
                    //获取cookie的值
                    that.call=JSON.parse(getCookie("call"));
                    that.display();
                }
            })
        }
        display(){
            var str="";
            for(var i=0;i<this.res.length;i++){
                for(var j=0;j<this.call.length;j++){
                    if(this.call[j].id==this.res[i].id){
                        str+=`  <div class="ss" index="${this.call[j].id}">
                                    <div class="buy1">
                                        1
                                        <input type="checkbox" id="cc">
                                    </div>
                                    <div class="buy2">
                                        <img src="${this.res[i].src}">
                                        <p>${this.res[i].name}</p>
                                    </div>
                                    <div class="buy3">
                                        <p>颜色：黑色</p>
                                        <p>${this.res[i].num}</p>
                                    </div>
                                    <div class="buy4">
                                        <p>${this.res[i].pirse}</p>
                                    </div>
                                    <div class="buy5">
                                        <input type="number" id="ii" value="${this.call[j].number}" min="1">
                                    </div>
                                    <div class="buy6">
                                        <p>￥9.41</p>
                                    </div>
                                    <div class="buy7">
                                        <input type="button" value="删除" id="btn">
                                    </div>
                                </div>`
                    }
                }
            }
            $(".shopp").html(str);
        }
        addEvent(){
            var that=this;
            //删除事件
            $(".shopp").on("click","#btn",function(){
                //保留下ID为删除做准备
                that.id=$(this).parent().parent().attr("index");
                // console.log(that.id)
                that.cookie(function(i){
                    //将符合条件的数据进行截取删除
                    that.call.splice(i,1)
                })
                $(this).parent().parent().remove();
            })
            $(".shopp").on("click","#ii",function(){
                that.id=$(this).parent().parent().attr("index");
                that.mm=$(this).val();
                that.cookie(function(i){
                    that.call[i].number=that.mm;
                })
                that.nn=that.mm;
            })
            //勾选事件
            this.t.addEventListener("click",function(eve){
                var e=eve||window.event;
                var target=e.target||e.srcElement;
                if(target.checked){
                    that.id=target.parentNode.parentNode.getAttribute("index");
                    // console.log(that.id)
                    for(var j=0;j<that.res.length;j++){
                        if(that.res[j].id==that.id){
                            that.pir=that.res[j].pirse;
                            // that.add(that.pir,that.num);  
                        }
                    }
                    for(var i=0;i<that.call.length;i++){
                        if(that.call[i].id==that.id){
                            that.mm=that.call[i].number;
                            // console.log(that.mm)
                            // that.add(that.pir,that.num);
                            that.nn=that.mm;
                        }
                    }
                    
                    // console.log((that.pir.slice(1)))
                    that.d=that.pir.slice(1)*that.mm;
                    // console.log(that.d)
                    
                    that.arr.push(that.d)
                    // console.log(that.arr)
                    that.m=0;
                    //that.add(that.d);
                    for(var i=0;i<that.arr.length;i++){
                        that.m+=that.arr[i]
                    }
                    // that.he.value=that.m;
                    $("#add").val(that.m)
                }else{
                    that.arr.splice(that.arr.indexOf(that.d),1)
                    console.log(that.arr)
                    $("#add").val(that.m-that.d)
                    // console.log(that.m-that.d)
                    if(that.arr.length==0){
                        $("#add").val("0")
                    }
                }
            })
            $("#total").click(function(){
                $("#add").val()
            })
        }
        cookie(callblack){
            for(var i=0;i<this.call.length;i++){
                if(this.call[i].id==this.id){
                    callblack(i);
                    break;
                }
            }
            //处理结束塞回去
            setCookie("call",JSON.stringify(this.call),{path:"/"})
        }
    }
new Car();

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

    // var call=JSON.parse(getCookie("call"))
    // for(var i=0;i<call.length;i++){
    //     var num=call[i].num
    //     new Car(num);
    // }
})()