//arguments değişkenin kullanımı
function sumAll(){
    var total=0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sumAll(5, 15, 25, 50));