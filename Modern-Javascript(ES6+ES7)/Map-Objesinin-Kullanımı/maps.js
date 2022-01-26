//ES6'da gelen objedir.
//Maps: key ve value collectionları saklayabiliyoruz

let val;
const numbers=new Map();  

numbers.set(1, 'one'); //numbersı temsil eden key(anahtar)/ value(değeri)
numbers.set('2', 'two'); //anahtar kelimesi string veya obje olabilir.
numbers.set(3, 'three');
numbers.set('four', 'four');
val=numbers;

val=numbers.get(1); //numbers içerisinde eleman seçimi. Bu seçim key değerleriyle yapılır. Bu değere karşılık gelen value değerini verir.
val=numbers.get('2');
val=numbers.get('four');


val=numbers.size; //eleman sayısını verir.
val=numbers.has('four'); //key değerinde elemanın varlığı kontrol etmek

val=numbers.delete('four') //key elemanına karşılık gelen değeri siler
//numbers.clear(); //tüm elemanları siler
console.log(numbers);
console.log(val);

for(var [key, value] of numbers){
    console.log(key+ '='+value);
}

for(var [key, value] of numbers.entries()){
    console.log(key+ '='+value);
}
//sadece key değerleri
for(var key of numbers.keys()){
    console.log(key);
}


numbers.forEach(function(key, value){
    console.log(key+ "-" +value);
});

var first=new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

var second=new Map([
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
]);

var marged=new Map([...first, ...second]);
console.log(marged);

/*map objesini liste değerlerini, örneğin bir plaka bilgisi, bir ürün saklarken ID key ürün ismini ise value değeri olarak saklayabilirz. kullanılabiliriz.  */