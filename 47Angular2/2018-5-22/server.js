const http=require('http');

http.createServer(function (req, res){
  //res.setHeader('access-allow-orign');
  res.write('[12,6,8,44,34]');
  res.end();
}).listen(8080);
