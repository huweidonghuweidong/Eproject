function setCookie(key,value,options){
    //判断有没有输入后面的对象
    options=options?options:{};
    //判断输入的对象里有没有expires,并且处理
    if(options.expires){
        var d=new Date();
        d.setDate(d.getDate()+options.expires);
        var exe=";expires="+d;
    }else{
        var exe="";
    }
    // 判断输入的对象中有没有path路径，并且处理
    var p=options.path?";path="+options.path:"";
    document.cookie=key+"="+value+exe+p;
}
//封装删除功能
function delectCookie(key,options){
    options=options?options:{};
    options.expires=-1;
    setCookie(key,"gsgs",options)
}
//封装查的功能,利用字符串截取，截取两次
function getCookie(key){
    var arr=document.cookie.split("; ")
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0]==key){
            return arr[i].split("=")[1]
        }
    }
}