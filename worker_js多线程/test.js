var dd;
self.onmessage=function (p1) {
    dd=p1.data;
    self.postMessage(++dd)
}