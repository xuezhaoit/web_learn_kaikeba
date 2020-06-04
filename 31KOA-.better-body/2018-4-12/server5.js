const koa=require('koa');
const router=require('koa-router');

let server=new koa();
server.listen(8080);

let r1=router();
server.use(r1.routes());

r1.get('/api/:name/:arg', async ctx=>{
  console.log(ctx.params);

  ctx.response.body='aaa';
});
