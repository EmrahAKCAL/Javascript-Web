let IndexAli, IndexCan; //iki değişken tanımlanıldı
const kgAli=78, heightAli=1.81, kgCan=85, heightCan=1.75; //sabit değişkenler tanımlanıldı.

IndexAli = (kgAli)/(heightAli*heightAli); //Ali'nin kilo indeksi
IndexCan = (kgCan)/(heightCan*heightCan); //Can'nın kilo indeksi

console.log("Ali'nin kilo indeksi:"+IndexAli.toFixed(2)); //Ali'nin kilo indeksini konsola yansıt

let HeigherKgIndex= IndexCan > IndexAli; //kilo indeksi karşılaştırası

console.log("Can'nın kilo indexsi Ali'nin kilo indeksinden daha büyüktür mü?" +HeigherKgIndex); 

let AliWeak= (IndexAli>=0) && (IndexAli<=18.4);
let AliNormal=(IndexAli>=18.4) &&(IndexAli<=24.9);
let AliFat=(IndexAli>=25) &&(IndexAli<=29.9);
let AliObese=(IndexAli>=30) &&(IndexAli<=34.9);
let AliMorbidObese=(IndexAli>=35);

console.log("Ali zayıf mı?"+AliWeak);
console.log("Ali normal mı?"+AliNormal);
console.log("Ali kilolu mu?"+AliFat);
console.log("Ali obez mi?"+AliObese);
console.log("Ali morbid obez mi?"+AliMorbidObese);

console.log("Can'nın kilo indeksi:"+IndexCan.toFixed(2))
let CanWeak= (IndexCan>=0) && (IndexCan<=18.4);
let CanNormal=(IndexCan>=18.4) &&(IndexCan<=24.9);
let CanFat=(IndexCan>=25) &&(IndexCan<=29.9);
let CanObese=(IndexCan>=30) &&(IndexCan<=34.9);
let CanMorbidObese=(IndexCan>=35);

console.log("Can zayıf mı?"+CanWeak);
console.log("Can normal mı?"+CanNormal);
console.log("Can kilolu mu?"+CanFat);
console.log("Can obez mi?"+CanObese);
console.log("Can morbid obez mi?"+CanMorbidObese);
