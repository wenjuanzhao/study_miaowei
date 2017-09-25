function RandomArr(isAll,isNow) {
    var arr=[];
    var newArr=[];

    for(var i=0;i<isAll;i++){
        arr.push(i);
    }
    for(var j=0;j<isAll/isNow;j++){
        var temp=[];
        for(var i=0;i<isNow;i++){
            temp.push(arr.splice(Math.floor(Math.random()*arr.length),1))
        }
        newArr.push(temp)
    }
    return newArr
}