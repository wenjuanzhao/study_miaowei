var trs=document.getElementsByTagName("tr");
var table=document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
var tt;
var j=0;
for(var i=0;i<trs.length;i++){
    trs[i].index=i;
    trs[i].ondragstart=function (e) {
        console.log(11)
        e.dataTransfer.setData("name",this.index)
    }
    trs[i].ondrag=function () {
        console.log(j++)
    }
    trs[i].ondragend=function () {
       // console.log(this)
        //console.log(tt)
        console.log(1122)
    }
}
for(var i=0;i<trs.length;i++){

    trs[i].ondragover=function (e) {
        e.preventDefault();
    }
    trs[i].ondrop=function (e) {
        console.log("end")
        tt=table.removeChild(trs[e.dataTransfer.getData("name")])
        console.log(tt)
        table.insertBefore(tt,this)
        for(var i=0;i<trs.length;i++){
            trs[i].index=i;
        }
    }
}
