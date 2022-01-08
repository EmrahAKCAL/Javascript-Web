//Basit bir while döngüsü
let i=0;
 while(i<5){
    console.log(i);
     i++;
 }
 //Döngü içerisinde koşul ifadesi kullanımı
 let j=0;
 while(j<5){
    if(j==2){
         console.log('En sevdiğim sayı: '+j);
         break;
    }
    console.log(j);
     j++;
}