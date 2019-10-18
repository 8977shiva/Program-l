var p = new Promise((reslove,reject)=>reslove('hi'), reject('hello'))
p.then((h)=>console.log('this is reslove')).catch((h)=> console.log('this is catch'))