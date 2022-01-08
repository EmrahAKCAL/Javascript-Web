//basit function yapısı
function sum(a, b){
    var c=a+b;
    return c;
}
console.log(sum(3, 8));

//var sayılan parametre ataması 
function sub(x, y){
    if(typeof x==='undefined'){
        x=0;
    }
    if(typeof y==='undefined'){
        y=0;
    }
    var z=x+y;
    return z;
}
console.log(sub(20, 10));