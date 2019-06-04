(function(){
    "use strict";
    class Login{
        constructor(){
            this.init();
        }
        init(){
            var that=this;
            //登录时先获取到localStorage
            $("#btn").click(function(){
                that.getUser();
            })
        }
        getUser(){
            //转换
            this.juser=JSON.parse(localStorage.getItem("juser"))
            // console.log(this.juser)
            //判断localStorage.getItem("juser")是否为空
            this.juser=this.juser?this.juser:[];
            //验证账号密码
            for(var i=0;i<this.juser.length;i++){
                if($("#user").val()==this.juser[i].user&&$("#pass").val()==this.juser[i].pass){
                    //符合，开始登录,注意，修改状态，方便进行注销账号操作
                    this.juser[i].onoff=1;
                    //加入到localStorage中
                    localStorage.setItem("juser",JSON.stringify(this.juser))
                    $(".dl h3").empty()
                    $(".dl h3").html("登录成功，三秒后回到首页").css({color:"red",font:'700 28px/54px ""'})
                    setTimeout(() => {
                        location.href="../../index.html"
                    }, 3000);
                    //登录成功，结束后面操作
                    return;
                }
            }
            $(".dl h3").empty()
            $(".dl h3").html("登录失败，请检查账号密码是否正确，或者前去注册").css({color:"red",font:'700 28px/28px ""'})
        }
    }
    new Login();
})()