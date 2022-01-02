let num1='50';
let num2='1';
console.log(num1+num2); //501(xy)

let num3=Number('50');
let num4=Number('1');
console.log(num3+ num4); //51(x+y)

num5 =String(20);
console.log(num5); //sayısal veriden string'e dönüşüm
console.log(num5.length); //karakter sayısını verir.(string e özgüdür.)

num6=String(true);
console.log(num6); //boolean den string e dönüşüm

num7=String([1, 2, 3, 4, 5, 6, 7]);
console.log(num7); // 1, 2, 3, 4, 5, 6, 7 //array'den String e dönüşüm

num8=new Date();
console.log(num8); //Data bilgisini(anlık tarih-saat)

///////////////
x1=Number('50');
console.log(x1); //50 (string tipini number e dönüşüm)
console.log(x1.toFixed(2));// noktadan sonra kaç basamak gösterileceği

x2=Number(true);
console.log(x2); // 1

x3=Number(false);
console.log(x3); //0
x4=Number(null);
console.log(x4); //0

x5=Number('Ali');
console.log(x5); //NaN :Sayısal bir ifadeye karşılık gelmediği
x6=Number([1, 2, 3]); 
console.log(x6); //NaN :Sayısal bir ifadeye karşılık gelmediği

x7=parseInt(10.555);
console.log(x7); //parseInt: Sayının tam sayı kısmını tanımlar.

x8=parseFloat(10.555);
console.log(x8);



























