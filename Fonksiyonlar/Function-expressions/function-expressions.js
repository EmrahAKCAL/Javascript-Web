//Basit function expressions yapısı
const sum=function(a, b){
    var c=a+b;
    return c;
}
console.log(sum(50, 15));

//default kontrolü
const sub=function(x, y){
    if(typeof x==='undefined'){x=0;}
    if(typeof y==='undefined'){y=0;}
    var z=x+y;
    return z;
}
console.log(sub(20));


