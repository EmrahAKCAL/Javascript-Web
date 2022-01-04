var val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12;
var num=23.25947835498;

val1= 10.5; //number tipindedir
val2='10.5';  //string tipindedir.

console.log(val1); //10.5
console.log(typeof val1); //number

console.log(val2); //10.5
console.log(typeof val2); //string

val3=Number(val2); //string tipini number tipine dönüştürme
console.log(val3); //10.5
console.log(typeof val3); //number

val4=parseInt(val2); //Eğer değer string tipinde ise numbera dönüştürüp tam sayıya yuvarlatır.
console.log(val4); //10
console.log(typeof val4); //number

val5=parseFloat(val2); //stringi number tipine dönüştürür ve sayıyı olduğu gibi verir.
console.log(val5); //10.5
console.log(typeof val5);//number

val6=parseInt('500aa'); //sadece sayı kısmını alır.
console.log(val6); //50
console.log(typeof val6); //number

val7=parseInt('a50'); //harf sayının önüne gelemez.
console.log(val7); //NaN(Not a Number)
console.log(typeof val7); //number

val8=isNaN('500aa'); //500aa bir NaN olup olmadığı sorgulamak 
console.log(val8); //true(evet bu bir NaN(sayı değildir))
console.log(typeof val8); //boolean

val9=isNaN('a50'); //a50 bir NaN olup olmadığı sorgulamak 
console.log(val9); //true(evet bu bir NaN(sayı değildir))
console.log(typeof val9); //boolean

val10=isNaN('50'); //a50 bir NaN olup olmadığı sorgulamak 
console.log(val10); //false(hayır bu bir Sayıdır)
console.log(typeof val10); //boolean

val11=num.toPrecision(4); //sayının ilk 4 basamağını göster(son basamak yuvarlatır-hiçbir şey yazmasak sayının tümünü verir).
console.log(val11); //23.26
console.log(typeof val11); //string

val12=num.toFixed(4); //virgülden sonra kaç sayı gösterileceği(hiçbir şey yazmasak sayının tam kısmını verir.)
console.log(val12); //23.2595
console.log(typeof val12); //string

