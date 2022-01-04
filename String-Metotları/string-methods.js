const firstName= "Emrah", latsName="Akçal", age=25;
let val, val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, meslekler=' Mühendis, Öğretmen, Mimar, Doktor';

//Birleştirme işlemleri
val= firstName+ " " + latsName; //ikisini birleştirir. 
console.log('Ad-soyad:'+val);

val1='Emrah';
val1 +=' Akçal'; // val= val + 'Akçal' ==> val= Emrah Akçal
console.log('Ad-Soyad: '+val1);

val2 = "Benim adım: "+firstName+ " "+latsName+ " " + "Yaşım: "+age; //birden fazla stringi birleştirme
 console.log('String iç içe:  '+val2);

//string concat
val3= firstName.concat(' ', latsName); //string ifadeleri birleştirir.
console.log('String birleştirme:'+val3);

//string length
val4=val3.length; //toplam karakter sayısını verir.
console.log('Karakter Sayısı: '+val4);

val5= val3[2]; // o sırada bulunan karakteri verir. 
console.log('Karakter: '+val5);

val6 = val3.indexOf('k'); // karakterin indeksini verir. Olmayan karakteri -1 ile gösterir.
console.log(val6);

//string uppercase-lowercase
val7 =val3.toUpperCase(); //bütün karakterleri büyük harfe çevirir.
console.log(val7);

val8 =val3.toLowerCase(); //bütün harfleri küçük harfe dönüştürür.
console.log(val8);

val9 = val3.substring(2,5); //iki indeks arasındakilerini verir.
console.log(val9);

val10= val3.slice(5); //substring ile aynı
console.log(val10);

//string replace: string içerisinde herhangi bir değeri değiştirmek için kullanılabilir.
val11='      ' +val3.replace('emrah', 'Ahmet')+ '       ';
console.log(val11);

//trim : ilk ve sondaki boşlukları alır.
val12= val11.trim(); 
console.log(val12);

val13= meslekler.split(','); //indeks numarasını verir.
console.log(val13);
console.log(typeof val13);
 