window.onload=function () {
   var img=document.getElementById("img");
   var avatar=img.getElementsByTagName("img")[0]
    var tou=0;
    img.onclick=function () {
        if(tou%2==0){
            avatar.setAttribute("src","img/22.gif")
        }else{
            avatar.setAttribute("src","img/11.jpg")
        }
       tou++;
    }
    var button=document.getElementById("button");
    var text=document.getElementById("text");
    var content=document.getElementById("content")
    var content_set=[];
    var message=""
    button.onclick=function () {
        var temp={};
       temp["img"]=avatar.getAttribute("src");
        temp["text"]=text.value;
        message+=`<div class="message"><img src=${temp["img"]} width="40"/><div>${temp["text"]}</div></div>`
        content.innerHTML=message;
       text.value=""
    }
}