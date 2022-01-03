let x;
const a=60, b=40, c=45, d=10, e=60, f='60';

//Karşılaştırma Operatörleri

//buradaki x değişkeni mantık doğru ise true, yanlış ise false göstermesi içindir. Sadece işlemi kontrol eder.

x=a==b; //a değeri b değerine eşit mi? Bunu doğru olup olmadığını x değişkenine gönder. Doğru ise x=true, yanlış ise false olacak. Sonuç: false- type:boolen

x=a==e; //Sonuç a ve e eşit olduğundan true- type:boolen

x=a===e;//Burada a ve e değerleri eşit mi ve tipi de aynı mı? a ve e eşit ve tipleri ikisi number olduğundan true(doğru)

x=a==f; // a ve f değerleri eşittir. Sonuç true

x=a===f; // a ve f değerleri eşit ancak tipleri farlı(number-string) olduğundan sonuç false

x=a!=b; //a değeri b değerine eşit değil mi? işlem true(eşit değildir)

x=a!=e; //sonuç false. Çünkü ikisi eşittir.

x=a!==f; //sonuç true. Çünkü sayılar eşit ancak tipleri farklı olduğundan sonuç dalse olmalıdır. Dolayısıyla buradaki mantık zaten değildir dediğinden sonucu doğruladığından true olur.

x=a>b; // a değeri b değerinden büyük mü? Sonuç evet büyük(true)

x=a>=b;  //a değeri b değerinden büyük mü? veya eşit mi? Sonuç evet büyük(true)

x=a>=e; // a değeri e değerinden büyük mü? Veya eşit mi? Sonuç evet eşit(true)
console.log(x);
console.log(typeof x);