importScripts("randArray.js")
self.onmessage=function (p1) {
    var data=p1.data;
    var arr=RandomArr(data,data/10);
    self.postMessage(arr)
}