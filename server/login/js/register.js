(function(){
    "use strict"

    class Register{
        constructor(){
            this.index=0;
            this.diff();
        }
        diff(){
            var that=this;
            $("#user").on("input",function(){
                if($("#user").val().length>10){
                    $(".dl h3").empty()
                    $(".dl h3").html("用户名过长").css({color:"red",font:'700 28px/54px ""'})
                    that.index=3;
                }else{
                    $(".dl h3").empty()
                    $(".dl h3").html("账号密码注册").css({font:'700 20px/54px ""',color:"#e9242b"})
                    that.index=0;
                }
            })
            $("#pass2").on("input",function(){
                if($("#pass").val()==$("#pass2").val()){
                    $(".dl h3").empty()
                    $(".dl h3").html("账号密码注册").css({font:'700 20px/54px ""',color:"#e9242b"})
                    that.index=1;
                }else{
                    $(".dl h3").empty()
                    $(".dl h3").html("两次密码不一致").css({color:"red",font:'700 28px/54px ""'})
                    that.index=0;
                }
                console.log(that.index)
            })
            console.log(this.index)
            this.init();
            
        }
        init(){
            var that=this;
            
            $("#btn").click(function(){
                if(that.index==1){
                    //判断输入是否为空
                    if($("#user").val()==""){
                        $(".dl h3").empty()
                        $(".dl h3").html("注册失败，请输入账号").css({color:"red",font:'700 28px/54px ""'})
                        return;
                    }
                    if($("#pass").val()==""){
                        $(".dl h3").empty()
                        $(".dl h3").html("注册失败，请输入密码").css({color:"red",font:'700 28px/54px ""'})
                        return;
                    }
                    
                    
                    //使用localStorage,获取到指定的，来判断是否是第一次注册
                    that.judge();

                }
                
            })
        }
        judge(){
            this.juser=localStorage.getItem("juser");
            // console.log(this.juser)
            if(this.juser==null){
                //如果是null则说明是第一次注册
                //所以得将用户名密码加入到localStorage中
                this.juser=[{
                    user:$("#user").val(),
                    pass:$("#pass").val(),
                    //加入一个开关，用于注销时使用
                    onoff:0
                }]
            }else{
                //不是第一次注册了，就开始判断是否重名,(得先将localStorage里的数据从字符转成数组进行判断)
                this.juser=JSON.parse(localStorage.getItem("juser"))
                console.log(this.juser)
                for(var i=0;i<this.juser.length;i++){
                    if($("#user").val()==this.juser[i].user){
                        $(".dl h3").empty()
                        $(".dl h3").html("账号重复，请去登录或重新输入").css({color:"#f8392b",font:'700 28px/54px ""'})
                        //重名后就停止
                        return;
                    }
                }
                //不是第一次注册，使用push将注册信息加入
                this.juser.push({
                    user:$("#user").val(),
                    pass:$("#pass").val(),
                    onoff:0
                })
            }
            localStorage.setItem("juser",JSON.stringify(this.juser))
            $(".dl h3").empty()
            $(".dl h3").html("注册成功，三秒后前往登录").css({color:"red",font:'700 28px/54px ""'})
            setTimeout(() => {
                location.href="login.html"
            }, 3000);
        }
    }
    new Register();
})()