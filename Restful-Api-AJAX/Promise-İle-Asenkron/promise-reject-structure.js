
//Promise basit yapısı
var p= new Promise(function(resolve, reject){
    if(true){
        resolve('success');
    }
    else{
        reject('failure');
    }
});

p.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});