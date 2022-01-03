var BirtDay= new Date('5/17/1996'); //Kullanıcının yaşı(ay-gün-yıl)
var AgeDifMs= Date.now()-BirtDay.getTime(); //Kullanıcının doğum tarihiden bu güne kadar geçen milisaniye.
var dtAge= new Date(AgeDifMs); //mili saniyeyi yıl bilgisine çevirir
console.log('Milisaniye: '+AgeDifMs);
console.log('Yaş:'+(dtAge.getFullYear()-1970)); 

//2-Yöntem
var dtA= new Date('5/17/1996'); // ay/gün/yıl
var dtB= new Date();

var MiliSecond= dtB -dtA;
var Second= MiliSecond/1000;
var Minute= Second/60;
var Hour= Minute/60;
var Day= Hour/24;
var Month= Day/30;
var Year=Month/12;

console.log('milisaniye :'+MiliSecond.toFixed());
console.log('Saniye :'+Second.toFixed());
console.log('Dakika :'+Minute.toFixed());
console.log('Saat:'+Hour.toFixed());
console.log('Gün :'+Day.toFixed());
console.log('Ay :'+Month.toFixed());
console.log('Yıl :'+Year.toFixed());
