const koa=require('koa');
const staticCache=require('koa-static-cache');
const pathlib=require('path');

let server=new koa();
server.listen(8080);

server.use(staticCache(pathlib.resolve('www')));
