window.onload=function () {
    var arr=[{url:"img/33.jpg",text:"第一章图片"},{url:"img/44.jpg",text:"第二章图片"},{url:"img/55.jpg",text:"第三章图片"}]
    var prev=document.getElementById("prev")
    var next=document.getElementById("next")
    var text=document.getElementById("text")
    var span1=document.getElementById("span1")
    var img1=document.getElementById("img1")
    var num=0;
    prev.onclick=function () {
        slidePrev();
    }
    next.onclick=function () {
        slideNext()
    }
    function slideNext() {
        num++
        if(num==3){
            num=0;
        }
        text.innerHTML=arr[num].text;
        img1.src=arr[num].url;
        span1.innerHTML=num+"/"+arr.length
    }
    function slidePrev() {
        num--
        if(num==-1){
            num=2;
        }
        text.innerHTML=arr[num].text;
        img1.src=arr[num].url;
        span1.innerHTML=num+"/"+arr.length
    }
    var timer;
    timer=setInterval(function () {
        slideNext();
    },1000)
}