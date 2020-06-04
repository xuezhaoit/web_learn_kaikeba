const koa=require('koa');
const router=require('koa-router');

let server=new koa();
server.listen(8081);

server.use(async (ctx, next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');

  await next();
});

let r1=router();

r1.get('/list', async ctx=>{
  ctx.body=[
    {name: '24K金手表', price: 358, sales: 8531},
    {name: '玩具', price: 18, sales: 915},
    {name: '衣服', price: 857, sales: 28732},
    {name: '毛巾', price: 3, sales: 5},
    {name: '被子', price: 67, sales: 900},
  ];
});

server.use(r1.routes());
