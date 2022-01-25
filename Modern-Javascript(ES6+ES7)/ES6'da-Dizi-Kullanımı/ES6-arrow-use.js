const boxes=document.querySelectorAll('.box'); //NodeList

//ES5
let boxesES5=Array.prototype.slice.call(boxes); //Array

boxesES5.forEach(function(box) {
    box.style.backgroundColor='yellow';
});
console.log(boxesES5);

//ES6
Array.from(boxes).forEach(box=>box.style.backgroundColor='pink');

//ES5
for (let i=0; i<boxesES5.length; i++){
    if(boxesES5[i].className=='box blue'){
        continue; //Döngünün bir sonraki turuna geç 
    }
    boxesES5[i].textContent= 'Hello ';
}

//ES6
var boxesES6=Array.from(boxes);
for(let box of boxesES6){
    if(box.className=='box blue'){
        continue;
    }
    box.style.backgroundColor='purple';
}

//from metotu kullanımı
let arr=Array.from('hello my friend!'); //boşluk karakteriyle birlikte her bir karakteri bir dizi elemanına çevirir.
console.log(arr);

const products=[
    {name: 'Iphone 5', price: 3000},
    {name: 'Iphone 5', price: 3000},
    {name: 'Iphone 6', price: 4000},
    {name: 'Iphone 7', price: 5000},
];

console.log(Array.from(products,prd => prd.price)); //fiyat 
console.log(products.find(prd =>prd.name=='Iphone 5')); //isme göre bilgi çekme


console.log(products.filter(prd => prd.name=='Iphone 5')); //Bu isme sahip elemanları gösterir

console.log(products.findIndex(prd => prd.price==4000)); //elemanın indeks numarasını bulma

let numbers=['a', 'b', 'c'];
let entries= numbers.entries();
for(let i of entries){
    console.log(i);// her elemanı indeks numarasıyla dizi içerisinde gösterir
}

let keys=numbers.keys(); //sadece keys(indeks numarsına) ulaşmak
for(let i of keys){
    console.log(i);
}

let values=numbers.values(); //sadece value değerlerini gösterme
for(let i of values){
    console.log(i);
}