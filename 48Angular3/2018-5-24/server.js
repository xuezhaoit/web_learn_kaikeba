const http=require('http');

http.createServer(function (req, res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write('[12,6,8,44,34]');
  res.end();
}).listen(8080);

