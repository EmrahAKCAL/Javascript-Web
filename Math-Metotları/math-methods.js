var val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12;

val1=Math.PI;
console.log(val1); //3.1415....
console.log(typeof val1);

val2=Math.round(2.4);
console.log(val2); //2
console.log(typeof val2);

val3=Math.ceil(2.4);
console.log(val3); //3
console.log(typeof val3);

val4=Math.floor(2.6);
console.log(val4); //2
console.log(typeof val4);

val5=Math.sqrt(81) //karekök
console.log(val5); //9
console.log(typeof val5);

val6=Math.pow(2,3);//üs alma
console.log(val6); //8
console.log(typeof val6);

val7=Math.abs(-58);//mutlak değerini alma
console.log(val7); //58
console.log(typeof val7);

val8=Math.min(49, 58, 24, 15, 23); // arasında en küçük değeri verir
console.log(val8); //15
console.log(typeof val8);

val9=Math.max(49, 58, 24, 15, 23); //arasında maksimum değeri verir.
console.log(val9); //58
console.log(typeof val9);

val10=Math.random(); //rastgele 0 ile 1 arasında sayı üretir.
console.log(val10);
console.log(typeof val10);

val11=Math.random()*10; //rastgele 0-10 arasında sayı üretir.
console.log(val11);
console.log(typeof val11);

val12=Math.random()*10;
console.log(val12.toFixed()); //tam sayıya dönüştürüldü.
console.log(typeof val12);