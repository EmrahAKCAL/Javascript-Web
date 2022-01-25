//Spread Operator

function getTotal(a, b, c){
    return a+b+c;
}
console.log(getTotal(10, 20, 30));

let numbers=[10, 20, 30];



/* Bir dizi içerisindeki elemanları bir fonksiyona göndermek*/
//ES5
console.log(getTotal.apply(null, numbers));
//ES6
console.log(getTotal(...numbers));

let arr1=['one', 'two', 'three'];
let arr2=['four', 'five'];
let arr3=['six', 'seven', 'eight'];
let arr4=[...arr1, ...arr2, ...arr3, 'nine', 'ten'];

/*Elemanları birleştirme*/
//sona ekleme
arr1.push(...arr2);
console.log(arr1);

//öne ekleme
arr2.unshift(...arr3);
console.log(arr2);

//Dizi içerisinde dizi ekleme
console.log(arr4);

//html sayfasında element sayısını tespit etme
let h1=document.querySelector('h1');
let divs=document.querySelectorAll('div');
let tags=[h1,...divs];
console.log(tags);

//Seçilen elementlere özellik atama
tags.forEach(tag=> tag.style.color=' green');

