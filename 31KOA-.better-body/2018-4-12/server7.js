const koa=require('koa');

let server=new koa();
server.listen(8080);

server.use(async ctx=>{
  console.log(ctx.cookies.get('a'));

  ctx.cookies.set('b', 5, {
    maxAge: 86400*1000
  });

  ctx.response.body='aaa';
});
