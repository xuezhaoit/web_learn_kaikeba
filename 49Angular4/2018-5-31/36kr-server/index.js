const Fetch=require('/_node_libs/fetch');
const fs=require('fs');
const urllib=require('url');
const pathlib=require('path');
const JSDOM=require('jsdom').JSDOM;

const fetch=new Fetch('./_cache/');

(async()=>{
  let list=JSON.parse(fs.readFileSync('./hx.txt'));

  list=list.filter(item=>item.href&&item.src);

  let index=0;
  async function next(){
    let img=(await fetch.get(list[index].src)).buffer;
    let html=(await fetch.get(list[index].href)).buffer;

    //console.log(index, list.length);

    parseImg(list[index], img);
    parseHtml(list[index], html);

    index++;
    if(index<list.length){
      await next();
    }
  }

  await next();

  //
  list=list.filter(item=>{
    return item.article&&item.article['detailArticle|post'];
  });

  //
  fs.writeFileSync('./.exported', JSON.stringify(list));

  console.log(`complete, ${list.length} datas`);
})();


function parseHtml(item, buffer){
  let html=buffer.toString();

  let the_script;
  let n=0;
  while((n=html.indexOf('<script>'))!=-1){
    let m=html.indexOf('</script>', n);
    let script=html.substring(n+'<script>'.length, m);

    html=html.substring(m);

    if(!script.startsWith('var props')){
      continue;
    }

    the_script=script;
  }

  eval(the_script);

  item.article=props;
}

function parseImg(item, buffer){
  let name=pathlib.parse(urllib.parse(item.src).path).base.split('!')[0];
  fs.writeFileSync(`img/${name}.jfif`, buffer);

  item.old_src=item.src;
  item.src=`${name}.jfif`;
}
