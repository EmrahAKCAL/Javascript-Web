//Local Storage: Tarayıcı kapatılsa dahi bilgiyi saklar


//Bilgi saklamak için setItem kullanılır.
const firsName=localStorage.setItem('firstName', 'Emrah');
const lastName=localStorage.setItem('lastName', 'Akçal'); 

console.log(localStorage); //kalıcı bilgileri konsola yazdırmak

val=localStorage.getItem('firstName'); //Bilgi almak için getItem kullanılır
console.log(val);

localStorage.removeItem('lastName'); //içerisindeki tek bir bilgiyi silmek için
localStorage.clear(); //tüm bilgileri silmek için


let hobies=['Sinema', 'Müzik', 'Koşu', 'Yüzmek'];
localStorage.setItem('hobies', hobies); //String bir bilgi olarak kaydeder.
localStorage.setItem('hobies', JSON.stringify(hobies)); //Dizi-obje olarak kaydeder.


console.log(JSON.parse(localStorage.getItem('hobies'))); //içerisinde obje almak






//Session Storage: Tarayıcı kapatıldığında bilgi gider. Kullanımı local storage ile aynıdır.
const city=sessionStorage.setItem('City', 'İstanbul');
const country=sessionStorage.setItem('Country', 'Türkiye');

console.log(sessionStorage); //bilgileri konsola yazdırmak

val=sessionStorage.getItem('City'); //Bilgi almak için getItem kullanılır
console.log(val);
