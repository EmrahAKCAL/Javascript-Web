//Gönderilen parametreleri diziye çevirmek
//ES5
function sumES5(){
    let arr1= Array.prototype.slice.call(arguments);
    let result=0;
    arr1.forEach(function(item){
        result+=item;        
    });
    return result;
}
console.log(sumES5(10, 20, 30));

//ES6
function sumES6(...arr2){
    let result=0;
    arr2.forEach(item=>result+=item);
    return result;
}
console.log(sumES6(10, 20, 30, 40));

/*res parametresi bir argüment beklemekte. Gönderilen değerleri bir diziye çevirmektedir. Bu argüment dizisi birden fazla sayı olabilir. Gönderilen sayıları forEach fonksiyonda tanımlanılan işlemi gerçekleştirecektir. */


function isDrawer(age, ...years){
    years.forEach(year=>console.log(2018-year>=age));
}
isDrawer(17, 1997, 1991, 1996, 2005, 2002);