var http = require('http');//引入http模块

//开启服务，监听8888端口
//端口号最好为6000以上

var server = http.createServer(function(req,res){
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    });
    var data;
    res.write('<div>sasa</div><script>window.onmessage=function (p1) {data=p1.data;console.log(p1.origin)}</script>');//显示给客户端
    res.end();

}).listen(8888);

console.log('服务器开启成功');