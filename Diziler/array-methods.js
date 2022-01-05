let names=['Ahmet', 'Yalçın', 'Seher', 'Kemal'];
let years=[1999, 2008, 1995, 2005];

console.log(names);

//get array item
console.log(names[2]); //Dizinin 2. elemanını verir.

//set array item
names[2]='Mehmet'; //Dizideki 2. elemanına Mehmet atandı.
console.log(names);


names[names.length]='Fatih'; //Dizinin sonuna yeni bir dizi ekler
console.log(names);

//add time
names.push('Can'); //Dizinin sonuna Can srting yeni bir dizi ekler.
console.log(names);

names.push(2022); //Dizinin sonuna 2022 number tipinde yeni bir dizi ekler.
console.log(names);

names.unshift('Vatan'); //Dizinin başına Vatan string tipi yeni bir dizi ekler.
console.log(names);

//remove item
names.pop(); //Dizinin son elemanını siler.
console.log(names);

names.shift(); //Dizinin ilk elemanını siler.
console.log(names);

//reverse
names.reverse(); //Dizi elemanlarının sıralamasını ters çevirir.
console.log(names);

names.sort(); //Diziki elemanları alfabetiğe göre sıralar.
console.log(names);

let srt=names.concat(years); //names dizisi ile years dizisiyle birleştirir.
console.log(srt);

names.splice(2, 0, 1999); //dizinin ikinci elemanındn sonra yeni bir eleman ekler
console.log(names);

names.splice(5, 1); //dizinin 5. elemanından sonra 1 tane elemanı siler
console.log(names);

console.log(names.indexOf('Kemal')); //dizideki eleman kaçıncı elemanıdır
console.log(names.length); //dizi kaç elemanlıdır
console.log(names.includes('Kemal')); //dizide elemanın olup olmadığı

