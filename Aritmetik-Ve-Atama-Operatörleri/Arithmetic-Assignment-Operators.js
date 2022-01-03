let x, c=10;
const a=30, b=5, d=20, e=7;

//Ariitmetik Operatörleri

x=a+b; //x=35(x=30+5)- type:Number

x=a-b; //x=25(x=30-5)- type:Number

x=a*b; //x=150(x=30*5)- type:Number

x=a/b; //x=6(x=30/5)- type:Number

x=a**b; //x=24300000(x= a^b;)- type:Number

x=a%b; //x=0(mod) -type:Number

x=c++; //x=10(c'nin değerini ekrana yansıtır sonra c'yi 1 artır) -type:Number

x=++c; //c'yi artırıp sonra ekrana yansıtır. Bir öncekinde ekranda c sayısını yansıtmıştı sonra c yi 11 yaptı. Şimdi ise 11 sayısını 1 artırıp ekrana yansıtacaktır.

x=++c; //bir önceki c'nin üzerine 1 sayı artırıp yansıtacak. x=13

x=--c; //bir önceki değerden bir sayı azaltır. En son 13 olmuştur şimdi ise 12 oldu.

//Atama Operatörleri..................................//

x=d; //x'e d değerini atar. Yani x=20 oldu

x+=a; //x=50 oldu. Çünkü x değerine d'yi atamıştık ve x=20 olmuştu.(x=x+a)(x=20+30)

x-=b; //x=45 oldu. Çünkü bir önceki işlemde x=50 olmuştu. (x=x-b)(x=50-5)

x*=a; //x=1350 oldu. Çünkü bir önceki işlemde x=45 olmuştu. (x=45*30)

x/=b; //x=270 olacaktır. (x=1350/5)

x%=e; //x=4 olacaktır.Çünkü bir önceki işlemde x=270 olmuştu. 270 sayısının mod 7'si 4'tür.(270'i 7'ye bölümünde kalan 4 olur) 

x**=b; //x=4^5

console.log(x); 
console.log(typeof x);


