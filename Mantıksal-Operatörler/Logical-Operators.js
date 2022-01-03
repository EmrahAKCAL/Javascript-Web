//Mantıksal operatörler

let x;
const a=40, b=30, c=8, d=15, f=15;

//&&(and-operator) ve operatörü(her ikisi doğru ise true, diğer durumlarda false)

//true && true =>True
x= (a>b)&& (b>c); //a değeri b değerinden büyük mü? ve b değeri c değerinden büyük mü?.

//true && false =>False
x= (a>b)&& (c>d); //a değeri b değerinden büyük mü? ve c değeri d değerinden büyük mü?(a b'den büyük ancak c d'den büyük değildir.).

//false && true =>False
x= (c>=b)&& (d>c); //c değeri b değerinden büyük veya eşit mi? ve d değeri c değerinden büyük mü?(c b'den büyük veya eşit değil ancak d c'den büyüktür.).

//false && false =>False
x= (c>=b)&& (d>=a); //c değeri b değerinden büyük veya eşit mi? ve d değeri a değerinden büyük veya eşit mi?(c b'den büyük veya eşit değil ve d değeri de a değerinden büyük veya eşit değil.).


// ||(or operator) Veya(||) operatörü- Burada her ikisi yanlış(false) ise yanlış(false), öteki durumlarda doğru(true) olur.

//true || true =>True
x= (a>b)|| (b>c); //a değeri b değerinden büyük mü? veya b değeri c değerinden büyük mü?.

//true || false =>True
x= (a>b) || (c>d); //a değeri b değerinden büyük mü? veya c değeri d değerinden büyük mü?(a değeri b değerinden büyüktür.).

//false || true =>True
x= (c>=b)|| (d>c); //c değeri b değerinden büyük veya eşit mi? veya d değeri c değerinden büyük mü?(c b'den büyük veya eşit değil ancak d c'den büyüktür.).

//false || false =>False
x= (c>=b)|| (d>=a); //c değeri b değerinden büyük veya eşit mi? veya d değeri a değerinden büyük veya eşit mi?(c b'den büyük veya eşit değil ve d değeri de a değerinden büyük veya eşit değildir.)


// !(Not operator) Değil(!) operatörü-Burada değil mantığı kullanıldığında doğru ise true gösterir. 

x=a!=b; //a değeri b değerine eşit değil. Sonuç treu(doğru) eşit değil.

x=a>b; //evet a değeri c değerine eşit değil(true)

x=d!=f; //hayır d değeri f değerine eşittir.(false)
console.log(x);
console.log(typeof x);