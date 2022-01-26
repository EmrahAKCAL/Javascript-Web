//Tekil value değerler tutar

var mySet= new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); //Aynı bilgiden varsa eklemez
mySet.add('iki');
mySet.add({a:1, b:2}); //Bir obje olarak ekler
var obj={a:1, b:2};
mySet.add(obj);

console.log(mySet)
//Değer kontrolü
val=mySet.has(1);
val=mySet.has(obj);

//Eleman sayısını bulma
val=mySet.size;

//Bir değer silme
mySet.delete(obj);
console.log(val);

//elemanları göstermek
for(let item of mySet){
    console.log(item); 
}

for(let item of mySet.keys()){
    console.log(item); //Set'lere key ve value'ler aynı değerdir.
}

for(let item of mySet.values()){
    console.log(item);
}

for(let [key, value] of mySet.entries()){
    console.log(key, value);
}

console.log(Array.from(mySet)); //set elemanlarını diziye çevirmek

let mySet2= new Set([1, 2, 3]);

//Set elemanların kesişimini almak(her iki set de diziye çevrilmiş olmalı)
//intersect
var intersect= new Set(Array.from(mySet).filter(x=> mySet2.has(x)));
console.log(intersect);

var intersect= new Set([...mySet].filter(x=> mySet2.has(x)));
console.log(intersect);

//Farklerı almak(difference)

var difference=new Set([...mySet].filter(x =>!mySet2.has(x)));
console.log(difference);