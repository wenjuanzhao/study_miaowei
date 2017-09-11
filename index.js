var colors=document.getElementsByClassName("colors")[0];
var widths=document.getElementsByClassName("width")[0];
var heights=document.getElementsByClassName("height")[0];
var colors_btn=colors.getElementsByTagName("span");
var options=document.getElementsByClassName("options")[0]
var choose=document.getElementsByClassName("choose")[0];
var huifu=choose.getElementsByTagName("span")[0]
var sure=choose.getElementsByTagName("span")[1]
var shu=document.getElementsByClassName("shu")[0];
var header=document.getElementsByClassName("header")[0];
var resource={};
resource["color"]=getCssValue(shu,"background")
resource["width"]=getCssValue(shu,"width");
resource["height"]=getCssValue(shu,"height");
function getCssValue(ele,property){
    return  window.getComputedStyle(ele).getPropertyValue(property);
}
var bgbtns=colors.getElementsByTagName("span");
var widthbtns=widths.getElementsByTagName("span");
var hrightbtns=heights.getElementsByTagName("span");
var target={}
opt(bgbtns,"color");
opt(widthbtns,"width");
opt(hrightbtns,"height");
function opt(chooses,attr){
    for(var i=0;i<chooses.length;i++){
        chooses[i].onclick=function () {
            target[attr]=this.getAttribute("data");
            if(this.parentNode==colors)
            {
                setCss(shu,target,"background")
            }else if(this.parentNode==widths){
                setCss(shu,target,"width")
            }
            else if(this.parentNode==heights){
                setCss(shu,target,"height")
            }
        }
    }
}
function setCss(obj,option,attr){
    if(attr=="background"){
        obj.style.background=option["color"];
    }else if(attr=="width"){
        obj.style.width=option[attr]+"px";
    }else{
        obj.style.height=option[attr]+"px";
    }

}
huifu.onclick=function (e) {
    shu.style.background=resource["color"]
    shu.style.width=resource["width"]
    shu.style.height=resource["height"]
    e.stopPropagation();
    options.style.display="none";
}
sure.onclick=function (e) {
    e.stopPropagation();
    setCss(shu,target,"color")
    setCss(shu,target,"width")
    setCss(shu,target,"height")
    options.style.display="none";
}
header.onclick=function () {

    options.style.display="block"
}

