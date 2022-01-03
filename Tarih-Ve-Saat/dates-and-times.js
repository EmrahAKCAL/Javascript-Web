let A= new Date(); //A değişkenine tam tarih ve saat bilgisi atandı
let B=new Date();
console.log(A);
console.log(typeof A);

//Get Methods: Anlık tarih-saat bilgileri göstermeyi sağlayan methoddur.
console.log("Get Metodları");
console.log(A.getDate()); //Gün bilgisi
console.log(A.getDay()); //Haftanın kaçıncı günü(pazartesi)
console.log(A.getFullYear());//Yıl bilgisi
console.log(A.getHours()); //Saat bilgisi
console.log(A.getMinutes()); //Dakika bilgisi
console.log(A.getSeconds());//Saniye bilgisi
console.log(A.getMonth()); //Ay bilgisi

//Set Methods: Elimizdeki tarih ve saat objelerinin üzerine istediğimiz kısımları değiştirmemizi sağlayan bir metoddur.
console.log("Set Metodları");
B.setFullYear(2025);//Yıl bilgisi
B.setMonth(5); //Ay bilgisi
B.setDate(17); //Gün bilgisi
B.setHours(21); //Saat bilgisi
B.setMinutes(58); //Dakika bilgisi
B.setSeconds(45);//Saniye bilgisi

console.log(B.getFullYear());//Yıl bilgisi
console.log(B.getMonth()); //Ay bilgisi
console.log(B.getDay()); //Haftanın kaçıncı günü(pazartesi)
console.log(B.getDate()); //Gün bilgisi
console.log(B.getHours()); //Saat bilgisi
console.log(B.getMinutes()); //Dakika bilgisi
console.log(B.getSeconds());//Saniye bilgisi
